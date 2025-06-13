import { CairoOption, num } from "starknet";

export interface Market {
  name: string;
  category: string;
  deadline: string;
  description: string;
  is_active: boolean;
  is_settled: boolean;
  outcomes: Outcome[];
  winning_outcome: CairoOption<Outcome>;
  money_in_pool: number;
  image: string;
  market_id: number;
}

export interface MultiOutcomeMarket {
  name: string;
  deadline: string;
  description: string;
  is_active: boolean;
  is_settled: boolean;
  outcomes: Outcome[];
  winning_outcome: CairoOption<Outcome>;
  money_in_pool: number;
  image: string;
  market_id: number;
  no_of_outcomes:number;
}

export interface FPMMMarket {
  deadline: string;
  is_active: boolean;
  is_settled: boolean;
  num_outcomes: number;
}

export interface FPMMMarketInfo {
  active: boolean;
  created_at: string;
  deadline: string;
  description: string;
  icon: string;
  market_id: number;
  category: string;
  outcomes: FPMMOutcome[];
  question: string;
  settled: boolean;
  fight_image?: string;
}

export interface Outcome {
  name: string;
  bought_shares: string;
}

export interface FPMMOutcome {
  name: string;
  num_shares_in_pool: number;
  winner: boolean;
}

export interface UserPosition {
  amount: number;
  has_claimed: boolean;
}
export interface UserBet {
  outcome: Outcome;
  position: UserPosition;
}
