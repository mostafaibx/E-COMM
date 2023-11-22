export type direction = "left" | "right";

export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface ProductData {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

export interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  address?: string;
}
export interface LoginData {
  email: string;
  password: string;
}

export type AuthError = {
  usernameError: string;
  emailError: string;
  passwordError: string;
};

export interface userDetails {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}
