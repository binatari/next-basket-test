export interface withChild {
  children: React.ReactNode;
}

export interface paginatedResponse<D> {
  products: D[];
  total: number;
  skip: number;
  limit: number;
}
