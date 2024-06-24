import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const options:NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_Secret ?? "",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        email:{label: "Email", type: "email", placeholder: ""},

      },
      async authorize(credentials:any, req) {
        const user: User = { id: '1', name: 'Yasan', email: 'yasanhemachandra@gmail.com', password: '1234'}
        return (credentials.username === user.name && credentials.password === user.password) ? user : null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }:{session:any, token:any}) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};