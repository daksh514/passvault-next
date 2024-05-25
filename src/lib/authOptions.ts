import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from 'next-auth';
import clientPromise from './db';
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret :process.env.AUTH_SECRET as string,
    adapter: MongoDBAdapter(clientPromise),
} as AuthOptions