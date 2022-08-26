export interface LoginType {
  name: string;
  email: string;
  password: string;
  isSubmitting: boolean;
  errorMessage: boolean;
}

export type Login = LoginType[];

export type LoginArray = {
  login: Array<LoginType>;
};

