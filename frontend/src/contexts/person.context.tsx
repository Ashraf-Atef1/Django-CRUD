import React, { createContext, useState } from "react";
import { IPerson, IPersonContextType } from "../types/person.types";

export const PersonContext = createContext<IPersonContextType>({
	currentPerson: {},
	setCurrentPerson: () => {},
	persons: [],
	setPersons: () => {},
	filter: "",
	setFilter: () => {},
});

export const PersonProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentPerson, setCurrentPerson] = useState<Partial<IPerson>>({});
	const [persons, setPersons] = useState<IPerson[]>([]);
	const [filter, setFilter] = useState("");

	return (
		<PersonContext.Provider
			value={{
				currentPerson,
				setCurrentPerson,
				persons,
				setPersons,
				filter,
				setFilter,
			}}
		>
			{children}
		</PersonContext.Provider>
	);
};
