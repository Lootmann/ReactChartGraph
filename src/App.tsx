import React from "react";
import axios from "axios";
import Header from "./header";

// Rechart
import CustomBarChart from "./Rechart/CustomBarChart";
import CustomPieChart from "./Rechart/CustomPieChart";

// React Chart.JS
import BarChart from "./ReactChartJS/BarChart";
import PieChart from "./ReactChartJS/PieChart";

const BASE_URL = "http://localhost:3000";

function App() {
  const [categories, setCategories] = React.useState<CategoryType[]>([]);
  const [households, setHouseholds] = React.useState<HouseholdType[]>([]);

  React.useEffect(() => {
    axios.get(BASE_URL + "/categories").then((resp) => {
      setCategories(resp.data);
    });

    axios.get(BASE_URL + "/households").then((resp) => {
      setHouseholds(resp.data);
    });
  }, []);

  return (
    <div className="h-screen bg-slate-800 text-slate-100">
      <Header />

      <div className="h-[calc(100vh-4rem)] flex gap-4 bg-slate-600 p-4">
        <div className="flex flex-col items-center flex-1 border-2 border-slate-300 rounded-md p-2">
          <div className="flex flex-col items-center gap-4 pt-2">
            <h1 className="text-3xl text-black">ReactChartJS</h1>
            {households.length !== 0 && (
              <BarChart
                categories={categories.slice()}
                households={households.slice()}
              />
            )}
            {households.length !== 0 && (
              <PieChart
                categories={categories.slice()}
                households={households.slice()}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center flex-1 border-2 border-slate-300 rounded-md p-2">
          <div className="flex flex-col items-center flex-1 gap-4 pt-2">
            <h1 className="text-3xl text-black">Recharts</h1>
            {households.length !== 0 && (
              <CustomBarChart
                categories={categories.slice()}
                households={households.slice()}
              />
            )}
            {households.length !== 0 && (
              <CustomPieChart
                categories={categories.slice()}
                households={households.slice()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
