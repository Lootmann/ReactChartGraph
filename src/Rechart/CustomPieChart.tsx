import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import { random_rgba, get_househols_by_categories } from "../utils";

function CustomPieChart({ categories, households }: PropType) {
  const [data, setData] = React.useState<AggregateType[]>([]);

  React.useEffect(() => {
    setData(get_househols_by_categories(households, categories, 100));
  }, []);

  function get_random_colors() {
    const colors = [];
    for (let i = 0; i < 10; ++i) colors.push(random_rgba());
    return colors;
  }

  return (
    <div>
      <div className="h-full flex flex-col gap-4 p-2 items-center border-2 border-slate-500 rounded-md">
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
