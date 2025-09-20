import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DailyUser {
  date: string; 
  count: number;
}

interface Props {
  data: DailyUser[];
}

const DailyUsers = ({ data }: Props) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const formattedData = sortedData.map((d) => {
    const dateObj = new Date(d.date + "T00:00:00"); 
    return {
      date: dateObj.toLocaleDateString("en-GB"),
      count: d.count,
    };
  });

  return (
    <div className="w-full md:w-3/4 mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-center">Daily New Users</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#7C3AED"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyUsers;
