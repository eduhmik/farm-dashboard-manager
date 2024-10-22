export interface Animal {
    _id: string;
    name: string;
    type: string;
    breed: string;
    birthDate: string;
    gender: string;
    farm: Farm | null;
    milkProductions: any[]; // Replace 'any' with a specific type if known
    healthRecords: any[];   // Replace 'any' with a specific type if known
    breedingHistory: any[]; // Replace 'any' with a specific type if known
    createdBy: User | null | string;
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

type Farm = {
    _id: string;
    name: string;
    location: string;
    animals: any[]; // Can be typed specifically if needed
    inventory: any[]; // Can be typed specifically if needed
    users: any[]; // Can be typed specifically if needed
    createdBy: string;
    updatedBy: UpdatedBy[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    isDeleted: boolean;
}

export interface AnimalsResponse {
    message: string;
    status: number;
    data: {
        animals: Animal[];
    };
};

export interface AnimalResponse {
    message: string;
    status: number;
    data: Animal;
};