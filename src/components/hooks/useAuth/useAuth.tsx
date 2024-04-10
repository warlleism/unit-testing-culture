import { useState } from "react";

type LoginUser = {
    username: string,
    password: string
}

type UserContent = {
    name: string,
    permissions: string[],
    isAdmin: boolean,
    token: string
}

export const useAuth = () => {

    const [user, setUser] = useState<UserContent | null>(null);
    const isAuthenticated = !!user;

    const login = ({ username, password }: LoginUser) => {
        if (username && password) {
            const response = {
                name: 'Warllei',
                permissions: ['all'],
                isAdmin: true,
                token: 'Token'
            }
            setUser(response);
        } else {
            setUser(null)
            throw new Error("Credenciais inválidas");
        }
    }

    const logout = () => {
        setUser(null);
    }

    return {
        user,
        isAuthenticated,
        login,
        logout
    }
}
