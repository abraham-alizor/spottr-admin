import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Barcharts({
  data,
  height,
  width,
}: {
  data: any;
  height: number;
  width: number;
}) {
  return (
    <div>
      <BarChart data={data} height={height} width={width}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />

        <Tooltip />
        <Legend />
        <Bar barSize={20} dataKey='value' fill='#274B89' />
      </BarChart>
    </div>
  );
}

export default Barcharts;
