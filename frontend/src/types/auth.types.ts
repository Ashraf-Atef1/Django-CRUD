export interface IAuthContextType {
	token: string | null;
	setToken: (token: string | null) => void;
}
