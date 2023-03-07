import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { random_rgba, get_househols_by_categories } from "../utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: { size: 12 },
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Chart.js Pie Chart",
      font: { size: 22 },
      color: "Black",
    },
  },
};

function PieChart({ categories, households }: PropType) {
  function create_data() {
    const households_by_categories = get_househols_by_categories(
      households,
      categories,
      100
    );

    const colors = Array.from(Array(10), () => {
      return random_rgba();
    });

    const pie_data = {
      labels: households_by_categories.map((h) => {
        return h.category;
      }),
      datasets: [
        {
          data: households_by_categories.map((h) => {
            return h.amount;
          }),
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 0,
        },
      ],
    };

    return pie_data;
  }

  return (
    <div className="p-2 items-center border-2 border-slate-500 rounded-md">
      <Pie options={options} data={create_data()} height={320} width={640} />
    </div>
  );
}

export default PieChart;
