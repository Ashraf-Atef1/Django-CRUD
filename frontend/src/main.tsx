import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { PersonProvider } from "./contexts/person.context.tsx";
import { AuthProvider } from "./contexts/Auth.context.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
	palette: {
		mode: "light",
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PersonProvider>
				<AuthProvider>
					<ToastContainer />
					<App />
				</AuthProvider>
			</PersonProvider>
		</ThemeProvider>
	</React.StrictMode>
);
