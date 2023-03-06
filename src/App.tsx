import React from "react";
import axios from "axios";
import Header from "./header";
import Rechart from "./Rechart";

// React Chart.JS
import BarChart from "./ReactChart/BarChart";

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
          <h2 className="text-2xl text-black">ReactChartJS2</h2>
          <div>
            <BarChart categories={categories} households={households} />
          </div>

          <div>
            <BarChart categories={categories} households={households} />
          </div>
        </div>

        <div className="recharts flex-1 border-2 border-slate-300 rounded-md p-2">
          <Rechart categories={categories} households={households} />
        </div>
      </div>
    </div>
  );
}

export default App;
