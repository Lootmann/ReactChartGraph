/**
 * some times dont load this component ... D:
 */
import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

function CustomPieChart({ categories, households }: PropType) {
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
    <div>
      <div className="flex flex-col gap-4 p-2 items-center border-2 border-slate-500 rounded-md">
        <h2 className="text-2xl">Pie Chart</h2>

        <PieChart width={600} height={300}>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            fontSize={20}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {data[index].category} ({value})
                </text>
              );
            }}
          >
            {/* set PieCell color */}
            {get_random_colors().map((color, index) => (
              <Cell key={index} fill={color}>
                <Label value="hoge" />
              </Cell>
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default CustomPieChart;
