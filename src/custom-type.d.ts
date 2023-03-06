type CategoryType = {
  id: number;
  name: string;
};

type HouseholdType = {
  id: number;
  amount: number;
  memo: string;
  category: CategoryType;
};

type PropType = {
  categories: CategoryType[];
  households: HouseholdType[];
};
