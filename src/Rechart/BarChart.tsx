import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

function CustomBarChart({ categories, households }: PropType) {
  const [data, setData] = React.useState<AggregateType[]>([]);

  function householdByCategory() {
    const household_by_category: AggregateType[] = categories.map(
      (category) => ({ category: category.name, amount: 0 })
    );

    for (let i = 0; i < 100; i++) {
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

  React.useEffect(() => {
    document.title = "ReChart";
    setData(householdByCategory());
  }, []);

  function get_random_colors() {
    return [
      "#C0392B",
      "#E74C3C",
      "#9B59B6",
      "#2980B9",
      "#1ABC9C",
      "#16A085",
      "#2ECC71",
      "#F1C40F",
      "#F39C12",
      "#E67E22",
      "#D35400",
    ];
  }

  return (
    <div className="flex flex-col gap-4 p-2 items-center border-2 border-slate-500 rounded-md">
      <h2 className="text-2xl">BarChart</h2>

      <BarChart
        width={600}
        height={300}
        margin={{ left: 10, right: 10 }}
        data={households
          .slice(0, 10)
          .sort(
            (a, b) =>
              new Date(a.registered_at).getTime() -
              new Date(b.registered_at).getTime()
          )}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="registered_at"
          height={60}
          padding={{ left: 0, right: 20 }}
          angle={45}
          dx={20}
          dy={20}
          minTickGap={-200}
          axisLine={false}
          fontSize={13}
          tick={{ fill: "black" }}
        />
        <YAxis dataKey="amount" tick={{ fill: "black", fontSize: 15 }} />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default CustomBarChart;
