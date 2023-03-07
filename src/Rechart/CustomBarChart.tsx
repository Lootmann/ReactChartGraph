import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

function CustomBarChart({ categories, households }: PropType) {
  return (
    <div className="h-1/2 flex flex-col gap-4 p-2 items-center border-2 border-slate-500 rounded-md">
      <h2 className="text-2xl">BarChart</h2>

      <ResponsiveContainer width={600} height="80%">
        <BarChart
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
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart;
