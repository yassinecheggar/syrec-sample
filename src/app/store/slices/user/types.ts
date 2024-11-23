import { BaseState } from "@/types/store";
import { User } from "@/types/user";

export interface UserState extends BaseState<User> {
  preferences: Record<string, unknown>;
}
