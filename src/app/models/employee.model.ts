export interface Employee {
    id: number;
    name: string;
    profile: string;
    gender: string;
    department: string[];
    salary: string | number;
    startDate: {
        day: string;
        month: string;
        year: string;
    };
    notes: string;
}