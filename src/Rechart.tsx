import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  PieChart,
} from "recharts";

/**
 * type CategoryType = {
 *   id: number;
 *   name: string;
 * };
 *
 * type HouseholdType = {
 *   id: number;
 *   amount: number;
 *   memo: string;
 *   registered_at: Date;
 *   category: CategoryType;
 * };
 */
function Rechart({ categories, households }: PropType) {
  React.useEffect(() => {
    document.title = "ReChart";
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 pt-2">
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

      <div className="flex flex-col gap-4 p-2 items-center border-2 border-slate-500 rounded-md">
        <h2 className="text-2xl">Pie Chart</h2>

        {/* TODO: show all households by category  */}
        <PieChart width={600} height={300}></PieChart>
      </div>
    </div>
  );
}

export default Rechart;
