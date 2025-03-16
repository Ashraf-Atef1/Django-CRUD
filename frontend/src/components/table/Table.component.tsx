import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import usePerson from "../../hooks/usePerson.hook";

const TableComponent = () => {
	const { persons, setCurrentPerson, handleDelete } = usePerson();
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Age</TableCell>
						<TableCell>City</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{persons.map((person) => (
						<TableRow
							key={person.id}
							hover
							onClick={() => setCurrentPerson(person)}
							sx={{ cursor: "pointer" }}
						>
							<TableCell>{person.name}</TableCell>
							<TableCell>{person.age}</TableCell>
							<TableCell>{person.city}</TableCell>
							<TableCell>{person.email}</TableCell>
							<TableCell>{person.phone}</TableCell>
							<TableCell>
								<Button
									color="error"
									onClick={(e) => {
										e.stopPropagation();
										handleDelete(person?.id);
									}}
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default TableComponent;
