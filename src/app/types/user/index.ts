export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UpdateUserPayload {
  userId: string;
  data: Partial<User>;
}
