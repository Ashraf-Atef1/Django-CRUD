import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/Auth.context";
import { toast } from "react-toastify";
import api from "../api";

const useAuth = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { token, setToken } = useContext(AuthContext);

	useEffect(() => {
		if (token) {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			localStorage.setItem("token", token);
		} else {
			delete api.defaults.headers.common["Authorization"];
			localStorage.removeItem("token");
		}
	}, [token]);
	const login = async (username: string, password: string) => {
		const response = await api.post("token/", {
			username,
			password,
		});
		setToken(response.data.access);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login(username, password);
			toast.success("Logged in successfully");
		} catch {
			toast.error("Login failed");
		}
	};
	const logout = () => setToken(null);
	const isAuth = !!token;

	return {
		login,
		logout,
		handleSubmit,
		isAuth,
		username,
		setUsername,
		password,
		setPassword,
	};
};
export default useAuth;
