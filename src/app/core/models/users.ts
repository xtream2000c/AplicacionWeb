import { EUserType } from "./EUserType";

export class User{
    id?: string;
    name : string;
    email: string;
    username: string;
    password: string;
    type:EUserType;
}