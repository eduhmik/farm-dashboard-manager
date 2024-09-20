// types.ts

export interface User {
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
    token: string;
  }
  
  export interface LoginResponse {
    message: string;
    status: number;
    data: {
      user: User;
      token: string;
      expiresIn: number;
    };
  }
  
  export interface UseLoginReturnType {
    login: (email: string, password: string) => Promise<void>;
    userData: LoginResponse | null;
    loading: boolean;
    error: string | null;
  }
  