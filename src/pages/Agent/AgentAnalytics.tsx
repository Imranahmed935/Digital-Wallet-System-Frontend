/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgentAddMoneyModal } from "@/components/AgentAddMoneyModal";
import { AgentWithdrawModal } from "@/components/AgentWithDrawModal";
import { Card, CardContent } from "@/components/ui/card";
import { useAgentTransactionsQuery } from "@/redux/features/agent/agent.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { ArrowDownCircle, ArrowUpCircle, User, Wallet } from "lucide-react";

const AgentAnalytics = () => {
  const { data: user } = useUserInfoQuery(undefined);
  const agentId = user?.data?._id;

  const { data: transactions } = useAgentTransactionsQuery(
    { id: agentId,},
    { skip: !agentId }
  );

  const cashInTotal = transactions?.data
    .filter((tx: any) => tx.type === "CASH_IN" && tx.status === "COMPLETED")
    .reduce((sum: number, tx: any) => sum + tx.amount, 0);

  const cashOutTotal = transactions?.data
    .filter((tx: any) => tx.type === "CASH_OUT" && tx.status === "COMPLETED")
    .reduce((sum: number, tx: any) => sum + tx.amount, 0);

  const totalCommission = transactions?.data?.reduce(
    (sum: number, tx: any) => sum + (tx.commission || 0),
    0
  );

  const totalTransactions = transactions?.totalTransactions || 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Agent Dashboard
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Overview of cash-in/out and recent activities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <ArrowDownCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Cash In</p>
              <p className="text-lg font-bold text-gray-800">
                ৳ {cashInTotal?.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <ArrowUpCircle className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Cash Out</p>
              <p className="text-lg font-bold text-gray-800">
                ৳ {cashOutTotal?.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <Wallet className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Transactions</p>
              <p className="text-lg font-bold text-gray-800">
                {totalTransactions}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <User className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Commission</p>
              <p className="text-lg font-bold text-gray-800">
                ৳ {totalCommission?.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="bg-indigo-50 shadow-md rounded-xl cursor-pointer hover:bg-indigo-100 transition">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <ArrowDownCircle className="w-8 h-8 text-indigo-600 mb-2" />
            <AgentAddMoneyModal />
          </CardContent>
        </Card>

        <Card className="bg-indigo-50 shadow-md rounded-xl cursor-pointer hover:bg-indigo-100 transition">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <ArrowUpCircle className="w-8 h-8 text-indigo-600 mb-2" />
            <AgentWithdrawModal />
          </CardContent>
        </Card>

        <Card className="bg-indigo-50 shadow-md rounded-xl cursor-pointer hover:bg-indigo-100 transition">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <User className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="text-gray-800 font-medium">Profile Management</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
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
              {transactions?.data?.slice(0, 5).map((tx: any) => (
                <tr key={tx._id} className="border-b border-gray-100">
                  <td className="py-2 px-3">
                    {new Date(tx.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-3">{tx.receiverPhone || "N/A"}</td>
                  <td className="py-2 px-3 capitalize">{tx.type}</td>
                  <td className="py-2 px-3">৳ {tx.amount.toLocaleString()}</td>
                  <td
                    className={`py-2 px-3 ${
                      tx.status === "COMPLETED"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))}

              {transactions?.data?.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No recent activity
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentAnalytics;
