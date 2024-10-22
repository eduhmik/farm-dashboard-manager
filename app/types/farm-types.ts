// Type for a user who created or updated the farm
interface User {
    _id: string;
    firstName: string;
    lastName: string;
    middleName?: string; // Optional, in case middleName is not always present
  }
  
  // Type for farm updates
  interface FarmUpdate {
    user: User;
    reason: string;
    _id: string;
    updatedAt: string;
  }
  
  // Type for a farm
  interface Farm {
    _id: string;
    name: string;
    location: string;
    animals: any[]; // Assuming animals array will contain other types
    inventory: any[]; // Assuming inventory array will contain other types
    users: any[]; // Assuming users array will contain other types
    createdBy: User;
    updatedBy: FarmUpdate[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    isDeleted: boolean;
  }
  
  // Type for the response from the API
  export interface FarmResponse {
    message: string;
    status: number;
    data: {
      farms: Farm[];
    };
  }
  