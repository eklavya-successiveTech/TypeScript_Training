import { ReactNode } from "react";

export interface CounterWithSteps{
    initialCount? : number; // ? -> means ist is optional
  step?: number;
  
}

export interface TimeNow{
    timeInterface:string; // date is a astring 
}
export const images: string[] = [
  "/images/education.jpeg",
  "/images/girl.jpg",
  "/images/image-1.jpeg",
  "/images/image-3.jpg",
  "/images/image-4.jpg",
  "/images/image-5.jpeg",
  "/images/image-7.jpeg",
  "/images/image-8.jpeg",
  "/images/image-9.jpeg",
  "/images/man.jpg",
];

export type Player = "X" | "O";
export type CellValue = Player | null;
export type Winner = Player | "Draw" | null;
export type Board = CellValue[];

// types/language.ts or types.ts
export interface LanguageContextType {
  lang: string;
  switchLanguage: (lang: string) => void;
}

export interface ChildrenProp {
  children: React.ReactNode;
}
export interface VoteState {
  Minecraft: number;
  SuperMario: number;
  PubG: number;
}

export interface Action {
  type: "Minecraft" | "SuperMario" | "PubG";
}


export interface AuthContextType {
  loggedIn: boolean;
  login: (username: string, password: string) => void;
}
export interface Product {
  id: number;
  name: string;
  price: number;

}

export interface VoteState {
  Minecraft: number;
  SuperMario: number;
  PubG: number;
}

export interface Action {
  type: "Minecraft" | "SuperMario" | "PubG";
}




export interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

// Resuable Button
export type ButtonColor = "primary" | "secondary" | "danger";

export interface ReusableButtonProps {
  children: ReactNode;
  colors?: ButtonColor;
  onClick: () => void;
}
export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AxiosUser {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface AxiosRetryButtonProps {
  initialData?: AxiosUser[];
}

export interface ChildProps {
  count: number;
  onIncrement: () => void;
  onReset: () => void;
}

export interface UserData {
  id: number;
  name: string;
  age: number;
  email: string;
};
export type Errors = {
  name?: string;
  email?: string;
};

export interface Employee {
  name: string;
  salary: number;
}

export interface FetchClientProps {
  initialData?: User[];
  initialError?: string | null;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
}

export type ProductThree = {
  id: string;
  name: string;
  description: string;
};

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: string[];
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}