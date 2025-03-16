import { useContext, useEffect } from "react";
import { PersonContext } from "../contexts/person.context";
import { toast } from "react-toastify";
import api from "../api";

const usePerson = () => {
	const {
		persons,
		setPersons,
		currentPerson,
		setCurrentPerson,
		filter,
		setFilter,
	} = useContext(PersonContext);

	useEffect(() => {
		fetchPersons();
	}, [filter]);

	const handleDelete = async (id?: number) => {
		if (!id) return;
		try {
			await api.delete(`persons/${id}/`);
			toast.success("Person deleted successfully");
			await fetchPersons();
		} catch {
			toast.error("Error deleting person");
		}
	};

	const fetchPersons = async () => {
		try {
			const response = await api.get("persons/", {
				params: { filter },
			});
			setPersons(response.data.results);
		} catch {
			toast.error("Error fetching persons");
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (currentPerson.id) {
				await api.put(`persons/${currentPerson.id}/`, currentPerson);
				toast.success("Person updated successfully");
			} else {
				await api.post("persons/", currentPerson);
				toast.success("Person added successfully");
			}
			setCurrentPerson({});
			await fetchPersons();
		} catch {
			toast.error(`Error saving person: email or phone already exists`);
		}
	};
	return {
		persons,
		setPersons,
		currentPerson,
		setCurrentPerson,
		filter,
		setFilter,
		fetchPersons,
		handleDelete,
		handleSubmit,
	};
};

export default usePerson;
