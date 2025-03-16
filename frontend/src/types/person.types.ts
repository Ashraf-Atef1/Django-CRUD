export interface IPerson {
	id?: number;
	name: string;
	age: number;
	city: string;
	email: string;
	phone: string;
	created_at?: string;
	updated_at?: string;
}

export interface IPersonContextType {
	currentPerson: Partial<IPerson>;
	setCurrentPerson: (person: Partial<IPerson>) => void;
	persons: IPerson[];
	setPersons: (persons: IPerson[]) => void;
	filter: string;
	setFilter: (filter: string) => void;
}
