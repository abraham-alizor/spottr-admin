interface WalletData {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  slug: string;
  description: string;
  currency: string;
  logoUrl: string | null;
  status: string;
}

export interface WalletResponseProps {
  data: {
    status: boolean;
    message: string;
    data: WalletData;
  };
}
