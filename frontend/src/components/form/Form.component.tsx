import { Box, Button, TextField } from "@mui/material";
import usePerson from "../../hooks/usePerson.hook";

const Form = () => {
	const { handleSubmit, filter, setFilter, setCurrentPerson, currentPerson } =
		usePerson();

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
			<TextField
				label="Filter"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				fullWidth
				margin="normal"
			/>

			<TextField
				label="Name"
				value={currentPerson.name || ""}
				onChange={(e) =>
					setCurrentPerson({ ...currentPerson, name: e.target.value })
				}
				fullWidth
				margin="normal"
				required
			/>

			<TextField
				label="Age"
				type="number"
				value={currentPerson.age || ""}
				onChange={(e) =>
					setCurrentPerson({ ...currentPerson, age: Number(e.target.value) })
				}
				fullWidth
				margin="normal"
				required
			/>

			<TextField
				label="City"
				value={currentPerson.city || ""}
				onChange={(e) =>
					setCurrentPerson({ ...currentPerson, city: e.target.value })
				}
				fullWidth
				margin="normal"
				required
			/>

			<TextField
				label="Email"
				type="email"
				value={currentPerson.email || ""}
				onChange={(e) =>
					setCurrentPerson({ ...currentPerson, email: e.target.value })
				}
				fullWidth
				margin="normal"
				required
			/>

			<TextField
				label="Phone"
				value={currentPerson.phone || ""}
				onChange={(e) =>
					setCurrentPerson({ ...currentPerson, phone: e.target.value })
				}
				fullWidth
				margin="normal"
				required
			/>

			<Box sx={{ mt: 2, gap: 2, display: "flex" }}>
				<Button type="submit" variant="contained" color="primary">
					{currentPerson.id ? "Update" : "Add"}
				</Button>
				{currentPerson.id && (
					<Button variant="outlined" onClick={() => setCurrentPerson({})}>
						Cancel Edit
					</Button>
				)}
			</Box>
		</Box>
	);
};

export default Form;
