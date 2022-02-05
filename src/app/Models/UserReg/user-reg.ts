export interface UserReg {
    fullName: string;
    phoneNum: string[];
    userEmail: string;
    password: string;
    address: {
        city: string;
        postalCode: string;
        street: string
      };
}
