import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from './mikro-orm.config';
import { Post } from "./entities/Post";

const main = async() => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    /*const post = orm.em.create(Post, {
        title: "my first post",
    });
    await orm.em.persistAndFlush(post);*/
    const post = await orm.em.find(Post, {});
    console.table(post);
}

main().catch((err) => {
    console.error(err);
});