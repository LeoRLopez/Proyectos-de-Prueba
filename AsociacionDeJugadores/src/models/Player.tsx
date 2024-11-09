export interface Player {
    id: string;
    name: string;
    age: number;
    gender: 'Male' | 'Female';
    contact: {
      email: string;
      phone: string;
    };
    teamId: string;
  }
  