export interface Task {
  hasExpired: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  title: string;
  description: string;
  rewardFee: number;
  currency: string;
  type: string;
  duration: number;
  maxParticipants: number;
  status: string;
  approved: boolean;
  completed: boolean;
  createdById: string;
  productId: string;
  transactionId: string;
  acceptedAnswer: string | null;
  participants: string[];
  product: string;
  createdBy: string;
  transaction: string;
  expiryDate: string;
  slotsLeft: number;
}

interface Pagination {
  hasPrevious: boolean;
  prevPage: number;
  hasNext: boolean;
  next: number;
  currentPage: number;
  pageSize: number;
  lastPage: number;
  total: number;
}

export interface TaskApiResponse {
  data: {
    status: boolean;
    message: string;
    data: Task[];
    pagination: Pagination;
  };
}
