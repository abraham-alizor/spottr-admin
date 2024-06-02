interface Location {
  type: string;
  coordinates: [number, number];
}

export interface ProductTypes {
  rating: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  slug: string;
  description: string;
  images: string[];
  amount: number;
  currency: "NGN" | "USD";
  location: Location;
  published: boolean;
  address: string;
  userId: string;
  originEntityId: string;
  originProductId: string | null;
  lng: number;
  lat: number;
}

export interface ProductTypesResponse {
  data: {
    status: boolean;
    message: string;
    data: ProductTypes;
  };
}
