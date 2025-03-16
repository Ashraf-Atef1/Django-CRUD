import axios from "axios";
import { config } from "./config";

const api = axios.create({
	baseURL: config.MAIN_API_URL,
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			const refreshToken = localStorage.getItem("refreshToken");
			if (refreshToken) {
				const response = await axios.post("/token/refresh/", {
					refresh: refreshToken,
				});
				localStorage.setItem("token", response.data.access);
				originalRequest.headers[
					"Authorization"
				] = `Bearer ${response.data.access}`;
				return api(originalRequest);
			}
		}
		return Promise.reject(error);
	}
);

export default api;
