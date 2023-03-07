import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const bar_options = {
  responsive: true,

  // Graph Top label options
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: { size: 23 },
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
      font: { size: 21 },
      color: "Black",
    },
  },

  maintainAspectRatio: false,

  // Graph Left, Bottom Axes label
  scales: {
    x: {
      ticks: {
        color: "black",
        font: { size: 13 },
      },
      grid: { color: "white" },
    },

    y: {
      ticks: {
        color: "black",
        font: { size: 16 },
      },
      grid: { color: "white" },
    },
  },
};

function random_rgba() {
  const rand_number = () => {
    return Math.floor(Math.random() * 255);
  };
  return `rgba(${rand_number()}, ${rand_number()}, ${rand_number()}, 0.8)`;
}

function get_random_households(households: HouseholdType[]) {
  const random_idx = () => {
    return Math.floor(Math.random() * households.length);
  };
  const res: HouseholdType[] = [];

  for (let i = 0; i < 15; ++i) {
    res.push(households[random_idx()]);
  }

  return res.sort((a, b) => {
    return (
      new Date(a.registered_at).getTime() - new Date(b.registered_at).getTime()
    );
  });
}

function BarChart({ categories, households }: PropType) {
  function create_bardata() {
    const random_households = get_random_households(households);

    const labels = random_households.map((household) => {
      return household.registered_at.toString();
    });

    const data = {
      labels,
      datasets: [
        {
          label: "Amount",
          data: labels.map((_, idx) => random_households[idx].amount),
          backgroundColor: random_rgba(),
        },
      ],
    };
    return data;
  }

  return (
    <div className="flex flex-col gap-4 p-2 items-center border-2 border-slate-500 rounded-md">
      <Bar
        height={350}
        width={640}
        options={bar_options}
        data={create_bardata()}
      />
    </div>
  );
}

export default BarChart;
