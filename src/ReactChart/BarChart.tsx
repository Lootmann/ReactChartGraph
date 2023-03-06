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
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },

  maintainAspectRatio: false,
  scales: {
    yAxes: {
      grid: {
        color: "black",
      },
      ticks: {
        color: "black",
      },
    },
    xAxes: {
      grid: {
        color: "black",
      },
      ticks: {
        color: "black",
      },
    },
  },
};

function BarChart({ categories, households }: PropType) {
  React.useEffect(() => {
    document.title = "React Chart JS";
  }, []);

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

  /*************************
   * Bar Data
   *************************/
  function get_random_color() {
    const rand_number = () => {
      return Math.floor(Math.random() * 255);
    };
    return `rgba(${rand_number()}, ${rand_number()}, ${rand_number()}, 0.7)`;
  }

  function get_bardata() {
    const labels = categories.map((category) => {
      return category.name;
    });

    const data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => Math.floor(Math.random() * 500) + 100),
          backgroundColor: get_random_color(),
        },
      ],
    };
    return data;
  }

  return (
    <div className="">
      <Bar
        height={400}
        width={200}
        options={bar_options}
        data={get_bardata()}
      />
    </div>
  );
}

export default BarChart;
