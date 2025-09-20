/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface DailyAgent {
  date: string;
  count: number;
}

interface Props {
  data: DailyAgent[];
}

const CustomBarShape = (props: any) => {
  const { x, y, width, height, fill } = props;
  return (
    <path
      d={`M${x},${y + height} 
         L${x},${y} 
         Q${x + width / 2},${y - 10} ${x + width},${y} 
         L${x + width},${y + height} Z`}
      fill={fill}
      stroke={fill}
    />
  );
};

const DailyAgents = ({ data }: Props) => {
  const formattedData = data?.map((d) => ({
    date: new Date(d.date).toLocaleDateString("en-GB"), 
    count: d.count,
  }));

  const colors = ["#7C3AED", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="w-full md:w-3/4 mx-auto p-4 bg-white dark:bg-card rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">
        Daily New Agents
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={formattedData}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar
            dataKey="count"
            shape={<CustomBarShape />}
            label={{ position: "top" }}
          >
            {formattedData?.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyAgents;
