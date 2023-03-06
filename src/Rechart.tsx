import React from "react";
import { render } from "react-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function Rechart({ categories, households }: PropType) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl">Recharts</h2>

      <div>
        {/* registered_at is string by formatted YYYY-MM-DD */}
        <BarChart
          width={600}
          height={300}
          margin={{ left: 30 }}
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
          <YAxis dataKey="amount" tick={{ fill: "black" }} />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default Rechart;
