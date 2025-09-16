import { AgentAddMoneyModal } from "@/components/AgentAddMoneyModal";
import { AgentWithdrawModal } from "@/components/AgentWithDrawModal";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, User, Wallet } from "lucide-react";

const AgentAnalytics = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Agent Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Overview of cash-in/out and recent activities
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Cash In */}
        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <ArrowDownCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Cash In</p>
              <p className="text-lg font-bold text-gray-800">৳ 50,000</p>
            </div>
          </CardContent>
        </Card>

        {/* Cash Out */}
        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <ArrowUpCircle className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Cash Out</p>
              <p className="text-lg font-bold text-gray-800">৳ 30,000</p>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Handled */}
        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <Wallet className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Transactions</p>
              <p className="text-lg font-bold text-gray-800">120</p>
            </div>
          </CardContent>
        </Card>

        {/* Commission (Optional) */}
        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <User className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Commission</p>
              <p className="text-lg font-bold text-gray-800">৳ 5,000</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="bg-indigo-50 shadow-md rounded-xl cursor-pointer hover:bg-indigo-100 transition">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <ArrowDownCircle className="w-8 h-8 text-indigo-600 mb-2" />
            <AgentAddMoneyModal/>
          </CardContent>
        </Card>

        <Card className="bg-indigo-50 shadow-md rounded-xl cursor-pointer hover:bg-indigo-100 transition">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <ArrowUpCircle className="w-8 h-8 text-indigo-600 mb-2" />
             <AgentWithdrawModal/>
          </CardContent>
        </Card>

        <Card className="bg-indigo-50 shadow-md rounded-xl cursor-pointer hover:bg-indigo-100 transition">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <User className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-gray-800 font-medium">Profile Management</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b border-gray-200">
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">User</th>
                <th className="py-2 px-3">Action</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3">2025-09-12</td>
                <td className="py-2 px-3">01734890714</td>
                <td className="py-2 px-3">Cash In</td>
                <td className="py-2 px-3">৳ 2,000</td>
                <td className="py-2 px-3 text-green-600">Success</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3">2025-09-11</td>
                <td className="py-2 px-3">01712345678</td>
                <td className="py-2 px-3">Withdraw</td>
                <td className="py-2 px-3">৳ 1,500</td>
                <td className="py-2 px-3 text-red-600">Failed</td>
              </tr>
              {/* Add more rows dynamically from backend */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentAnalytics;
