import type Reward from "./reward";
import type User from "./user";

export default interface UserReward {
  id: number;

  userId: number;

  rewardId: number;

  user: User;

  reward: Reward;
}