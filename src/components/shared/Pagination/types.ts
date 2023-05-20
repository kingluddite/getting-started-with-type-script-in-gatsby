export interface PaginationProps {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  skip: number;
  base: string;
  visible: boolean;
}
