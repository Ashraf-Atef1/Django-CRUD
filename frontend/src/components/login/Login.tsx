import { Button, TextField, Box, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth.hook";

const Login = () => {
	const { handleSubmit, username, password, setUsername, setPassword } =
		useAuth();

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{ maxWidth: 400, mx: "auto", mt: 4 }}
		>
			<Typography variant="h5" gutterBottom>
				Login
			</Typography>

			<TextField
				label="Username"
				fullWidth
				margin="normal"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<TextField
				label="Password"
				type="password"
				fullWidth
				margin="normal"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Box display="flex" gap={1}>
				<Typography color="textPrimary">username:</Typography>
				<Typography variant="body1" color="error">
					admin
				</Typography>
			</Box>
			<Box display="flex" gap={1}>
				<Typography color="textPrimary">password:</Typography>
				<Typography variant="body1" color="error">
					ashraf123
				</Typography>
			</Box>
			<Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
				Login
			</Button>
		</Box>
	);
};

export default Login;
