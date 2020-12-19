import { Arg, Int, Root, Mutation, Query, Resolver, InputType, Field, Ctx, UseMiddleware, FieldResolver, ObjectType } from "type-graphql";
import { Post } from "../entities/Post";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
export class PostInput {
  @Field()
  title: string;

  @Field()
  text: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(()=> [Post])
  posts: Post[]
  @Field()
  hasMore: boolean;
}
@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet ( @Root() root: Post) {
    return root.text.slice(0,50);
  }

  @Query(() => PaginatedPosts)
  async posts (
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit) + 1;
    const realLimitPlusOne = realLimit + 1;
    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const posts = await getConnection().query(
      `
      SELECT
        p.*,
        JSON_BUILD_OBJECT(
          'id', u.id,
          'email', u.email,
          'username', u.username,
          'createdAt', u."createdAt",
          'updatedAt', u."updatedAt"
        ) creator
      FROM post p
      INNER JOIN public.user u ON u.id = p."creatorId"
      ${cursor ? `WHERE p."createdAt" < $2` : ""}
      ORDER BY p."createdAt" DESC
      LIMIT $1
    `,
      replacements,
    );

    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }

  @Query(() => Post, { nullable: true })
  post (@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  createPost (
    @Arg("input", () => PostInput) input: PostInput,
    @Ctx() { req }: MyContext
    ): Promise<Post> {
    return Post.create({
      ...input,
      creatorId: req.session.userId
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost (
    @Arg("id", () => Int) id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
  ): Promise<Post | null> {
    const post = await Post.findOne(id);
    if (!post) return null;
    if (typeof title !== "undefined") {
      await Post.update({ id }, { title });
    }
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost (@Arg("id", () => Int) id: number): Promise<boolean> {
    await Post.delete(id);
    return true;
  }
}