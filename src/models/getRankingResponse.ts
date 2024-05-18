export interface UserRankResponse {
  message: string;
  data: {
    myRank: UserRank;
    rank: UserRank[];
  };
}

export interface UserRank {
  userId: number;
  username?: string;
  nickname?: string;
  foodIslandCount: number;
  streak?: number;
  rank?: number;
}

export interface RankingListProps {
  rank: UserRank[];
}
