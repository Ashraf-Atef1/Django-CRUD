import { Container } from "@mui/material";
import TableComponent from "./components/table/Table.component";
import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import Form from "./components/form/Form.component";
import useAuth from "./hooks/useAuth.hook";
import Login from "./components/login/Login";

export default function App() {
	const { isAuth } = useAuth();

	if (!isAuth) return <Login />;
	return (
		<Container maxWidth="lg" sx={{ mt: 4 }}>
			<Header />
			<Form />
			<TableComponent />
			<Footer />
		</Container>
	);
}
