interface CategoriesDataProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  slug: string;
  description: string;
  displayImage: boolean;
  parentId: string;
  isFree: boolean;
  isSubcategory: boolean;
}

export interface CategoriesResponseProps {
  status: boolean;
  message: string;
  data: CategoriesDataProps[];
}
