import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from 'lib/mongodb'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const production = process.env.NODE_ENV === 'production'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: 'auth',
  }),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async redirect({ url }) {
      return url
    },
  },
  cookies: {
    sessionToken: {
      name: `${production ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        domain: production ? 'fullstacklab.org' : 'localhost',
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: production ? true : false,
      },
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
})
