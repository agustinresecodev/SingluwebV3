import { Role } from "../models/Role";

export const UserRoles = {
    ADMIN: {
        id: 1,
        name: "ADMIN",
        description: "Administrator",

    } as Role,
    USER: {
        id: 2,
        name: "USER",
        description: "User",
    } as Role,
    BUSINESS: {
        id: 3,
        name: "BUSINESS",
        description: "Business",
    } as Role
}