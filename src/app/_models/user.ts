import { Role } from "./role";

export interface User {
    id: number;
    fullName: string;
    firstName: string;
    lastName: string;
    username: string;
    role: Role;
    token?: string;
}