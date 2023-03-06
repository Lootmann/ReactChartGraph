import React from "react";
import axios from "axios";
import Header from "./header";
import Rechart from "./Rechart";
import ReactChart from "./ReactChart";

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

      <div className="h-[calc(100vh-4rem)] flex gap-4 text-2xl bg-slate-600 p-4">
        <div className="recharts flex-1 border-2 border-slate-300 rounded-md p-2">
          <Rechart categories={categories} households={households} />
        </div>

        <div className="react-chartjs flex-1 border-2 border-slate-300 rounded-md p-2">
          <ReactChart categories={categories} households={households} />
        </div>
      </div>
    </div>
  );
}

export default App;
