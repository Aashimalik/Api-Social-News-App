import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "db_social_news_app_development",
  type: "postgresql",
  debug: !__prod__,
  password: process.env.DATABASE_PASSWORD || "postgres",
} as Parameters<typeof MikroORM.init>[0];
