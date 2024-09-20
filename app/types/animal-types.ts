export interface Animal {
    _id: string;
    name: string;
    type: string;
    breed: string;
    birthDate: string;
    gender: string;
    farm: string | null;
    milkProductions: any[]; // Replace 'any' with a specific type if known
    healthRecords: any[];   // Replace 'any' with a specific type if known
    breedingHistory: any[]; // Replace 'any' with a specific type if known
    createdBy: User | null;
    updatedBy: UpdatedBy[];
    __v: number;
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
};

type User = {
    _id: string;
    firstName: string;
    lastName: string;
    middleName: string;
};

type UpdatedBy = {
    user: User | null;
    reason: string;
    _id: string;
    updatedAt: string;
};

export interface ApiResponse {
    message: string;
    status: number;
    data: {
        animals: Animal[];
    };
};

export interface UseAnimalsReturnType {
    fetchAnimalData: () => Promise<void>;
    animalsData: ApiResponse | null;
    loading: boolean;
    error: string | null;
}