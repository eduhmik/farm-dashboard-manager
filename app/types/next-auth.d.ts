import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        data: {
            user: {
                _id: string;
                firstName: string;
                lastName: string;
                middleName: string;
                email: string;
                emailVerified: boolean;
                phoneNumber: string;
                phoneNumberVerified: boolean;
                roles: string[];
                isActive: boolean;
            };
            token: string;
            expiresIn: number;
        }
    }

    interface JWT { 
        token?: string;
        id?: string;
    }
}