export interface Player {
    id: string;
    name: string;
    surname: string;
    document: string;
    age: number;
    birth: string;
    gender: 'Masculino' | 'Femenino';
    contact: {
      email: string;
      phone: string;
    };
    city: string;
    province: string;
    team: string;
    isDelegate: boolean;
    category: string;
  }
  