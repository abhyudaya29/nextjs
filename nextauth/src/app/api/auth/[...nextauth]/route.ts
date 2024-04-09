import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

export const authOption={

    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!
      })
    ]
}

export const handler=NextAuth(authOption);
export {handler as GET,handler as POST}