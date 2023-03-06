import React from "react";
import CustomBarChart from "./Rechart/BarChart";
import CustomPieChart from "./Rechart/CustomPieChart";

function Rechart({ categories, households }: PropType) {
  return (
    <div className="flex flex-col items-center gap-4 pt-2">
      <h1 className="text-3xl text-black">Recharts</h1>
      <CustomBarChart categories={categories} households={households} />
      <CustomPieChart categories={categories} households={households} />
    </div>
  );
}

export default Rechart;
