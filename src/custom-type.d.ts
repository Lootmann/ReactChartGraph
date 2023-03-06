type CategoryType = {
  id: number;
  name: string;
};

type HouseholdType = {
  id: number;
  amount: number;
  memo: string;
  registered_at: Date;
  category: CategoryType;
};

type PropType = {
  categories: CategoryType[];
  households: HouseholdType[];
};

type AggregateType = {
  category: string;
  amount: number;
};
