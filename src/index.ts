import 'reflect-metadata';
import express from "express";
import Redis from 'ioredis';
import cors from 'cors';
import connectRedis from 'connect-redis';
import session from 'express-session';
import { createConnection } from 'typeorm';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from './resolvers/user';
import { __prod__, COOKIE_NAME } from './constants';
import { Post } from './entities/Post';
import { User } from './entities/User';
import path from 'path';
import { Upvote } from './entities/Upvote';

const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        database: 'db_social_news_app_development',
        username: 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, "./migration/*")],
        entities: [Post, User, Upvote]
    });
    await conn.runMigrations();
    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis();

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        })
    );

    app.use(
    session({
        name: COOKIE_NAME,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10years
            httpOnly: true,
            sameSite: 'lax', // csrf
            secure: __prod__, // cookie only works in https
        },
        saveUninitialized: false,
        secret: 'qweklsfodertmxcsldft',
        resave: false,
    })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, redis }),
    });

    apolloServer.applyMiddleware({ app, path: "/", cors: false });

    app.listen(4000, () => {
        // tslint:disable-next-line: no-console
        console.log('server started on localhost:4000');
    });
};

main().catch((err) => {
    // tslint:disable-next-line: no-console
    console.error(err);
});