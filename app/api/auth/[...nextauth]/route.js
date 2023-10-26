import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { CONNECT_MONGO_DB } from "@/lib/ConnectMongoDB";
import UserMODEL from "@/models/UserModel";

export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        const { provider } = account;
        await CONNECT_MONGO_DB();
        const IF_USER_EXIST = await UserMODEL.findOne({ email });
        if (!IF_USER_EXIST) {
          try {
            const res = await fetch("http://localhost:3000/api/AccessDB", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, provider }),
            });

            if (res.ok) {
              return user;
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      return user;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };
