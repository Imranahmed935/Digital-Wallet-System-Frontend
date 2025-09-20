import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface DailyTransaction {
  date: string;
  count: number;
  totalAmount: number;
}

interface Props {
  data: DailyTransaction[];
}
const DailyTransactionChart: React.FC<Props> = ({ data }) => {
  const formattedData = data?.map((item) => ({
    ...item,
    date: new Date(item.date).toLocaleDateString("en-GB"), 
  }));

  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg shadow dark:bg-card">
      <h2 className="text-lg font-bold mb-4">Daily Transactions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Bar yAxisId="left" dataKey="count" fill="#7c3aed" name="Transaction Count" />
          <Bar yAxisId="right" dataKey="totalAmount" fill="#4f46e5" name="Total Amount (৳)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyTransactionChart;
