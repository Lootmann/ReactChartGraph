export function random_rgba() {
  const rand_number = () => {
    return Math.floor(Math.random() * 255);
  };
  return `rgba(${rand_number()}, ${rand_number()}, ${rand_number()}, 0.8)`;
}

export function get_househols_by_categories(
  households: HouseholdType[],
  categories: CategoryType[],
  size = 100
) {
  const household_by_category: AggregateType[] = categories.map((category) => ({
    category: category.name,
    amount: 0,
  }));

  for (let i = 0; i < size; i++) {
    const random_household =
      households[Math.floor(Math.random() * households.length)];

    // NOTE: Need Refactor - O(100 * categories.length)
    if (random_household !== undefined) {
      household_by_category.forEach((h) => {
        if (h.category == random_household.category.name) {
          h.amount += random_household.amount;
        }
      });
    }
  }

  return household_by_category;
}

export function get_random_households(households: HouseholdType[], size = 15) {
  const random_idx = () => {
    return Math.floor(Math.random() * households.length);
  };
  const res: HouseholdType[] = [];

  for (let i = 0; i < size; ++i) {
    res.push(households[random_idx()]);
  }

  return res.sort((a, b) => {
    return (
      new Date(a.registered_at).getTime() - new Date(b.registered_at).getTime()
    );
  });
}
