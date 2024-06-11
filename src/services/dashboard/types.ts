interface Category {
  categoriesId: string;
  name: string;
  slug: string;
  categorycount: string;
}

interface Interest {
  name: string;
  displayImage: string;
  description: string;
  id: string;
  slug: string;
}

interface Location {
  country: string | null;
  city: string | null;
  address: string;
}

interface Data {
  totalUsers: number;
  totalCorporateAccount: number;
  totalAds: number;
  totalCheckIns: number;
  totalReferrals: number;
  percentageOfNewUsersInThePast24hrs: string;
  totalVendors: string;
  topCategories: Category[];
  topInterests: Interest[];
  topLocations: Location[];
}

export interface DashboardResponse {
  data: { status: boolean; message: string; data: Data };
}
