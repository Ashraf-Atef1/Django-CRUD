import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth.hook";

const Footer = () => {
	const { logout } = useAuth();
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					People Management
				</Typography>
				<Button color="inherit" onClick={logout}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
