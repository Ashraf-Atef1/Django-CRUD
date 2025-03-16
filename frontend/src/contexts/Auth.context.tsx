import { createContext, useState } from "react";
import { IAuthContextType } from "../types/auth.types";

export const AuthContext = createContext<IAuthContextType>({
	token: null,
	setToken: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("token")
	);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};
