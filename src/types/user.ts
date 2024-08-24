import type userReward from "./userReward";

export default interface User {
  userId: number;

  userName: string;

  userPassword: string;

  userFirstName: string;

  userLastName: string;

  userPoints: number;

  userReward: userReward[];
}