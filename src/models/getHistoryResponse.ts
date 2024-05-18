export interface HistoryResponse {
  message: string;
  data: {
    histories: History[];
  };
}

export interface History {
  createdAt: string;
  foodTitle: string;
  imageUrl: string;
}
