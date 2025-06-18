export interface InsertContact {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface Contact extends InsertContact {
  id: number;
  createdAt: Date;
}