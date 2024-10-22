// Type for creating a new animal
interface CreateAnimalPayload {
    name: string;
    type: string;
    breed: string;
    birthDate: string; // Format: YYYY-MM-DD
    parent?: string; // Optional
    gender: string;
    farm: string;
    milkProductions: any[]; // Adjust as per the actual structure
    healthRecords: any[]; // Adjust as per the actual structure
    breedingHistory: any[]; // Adjust as per the actual structure
  }