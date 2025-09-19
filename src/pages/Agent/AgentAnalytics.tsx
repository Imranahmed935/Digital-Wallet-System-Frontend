
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgentAddMoneyModal } from "@/components/AgentAddMoneyModal";
import { AgentWithdrawModal } from "@/components/AgentWithDrawModal";
import { Card, CardContent } from "@/components/ui/card";
import { useAgentTransactionsQuery } from "@/redux/features/agent/agent.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { ArrowDownCircle, ArrowUpCircle, User, Wallet } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import GuidedTour from "@/components/GuidedTour";

const AgentAnalytics = () => {
  const { data: user, isLoading: userLoading } = useUserInfoQuery(undefined);
  const agentId = user?.data?._id;

  const { data: transactions, isLoading: txLoading } = useAgentTransactionsQuery(
    { id: agentId },
    { skip: !agentId }
  );
  console.log(transactions)
  const cashInTotal = transactions?.data
    ?.filter((tx: any) => tx.type === "CASH_IN" && tx.status === "COMPLETED")
    .reduce((sum: number, tx: any) => sum + tx.amount, 0);

  const cashOutTotal = transactions?.data
    ?.filter((tx: any) => tx.type === "CASH_OUT" && tx.status === "COMPLETED")
    .reduce((sum: number, tx: any) => sum + tx.amount, 0);

  const totalCommission = transactions?.data?.reduce(
    (sum: number, tx: any) => sum + (tx.commission || 0),
    0
  );

  const totalTransactions = transactions?.totalTransactions || 0;

  const loading = userLoading || txLoading;

  return (
    <div id="agent-analytics" className="min-h-screen p-4 sm:p-6 md:p-8 space-y-6">
      <GuidedTour/>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold dark:text-foreground text-gray-800">
          {loading ? <Skeleton className="h-8 w-48" /> : "Agent Dashboard"}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base dark:text-muted-foreground">
          {loading ? <Skeleton className="h-4 w-64" /> : "Overview of cash-in/out and recent activities"}
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[{
          label: "Cash In",
          icon: <ArrowDownCircle className="w-6 h-6 text-green-500" />,
          value: cashInTotal,
          currency: true,
        },{
          label: "Cash Out",
          icon: <ArrowUpCircle className="w-6 h-6 text-red-500" />,
          value: cashOutTotal,
          currency: true,
        },{
          label: "Transactions",
          icon: <Wallet className="w-6 h-6 text-blue-500" />,
          value: totalTransactions,
        },{
          label: "Commission",
          icon: <User className="w-6 h-6 text-yellow-500" />,
          value: totalCommission,
          currency: true,
        }].map((card, idx) => (
          <Card
            key={idx}
            className="bg-white dark:bg-card border-violet-600 shadow-md rounded-xl"
          >
            <CardContent className="flex items-center gap-3 p-4">
              {card.icon}
              <div>
                <p className="text-sm text-gray-500 dark:text-foreground">{card.label}</p>
                {loading ? (
                  <Skeleton className="h-6 w-20 mt-1" />
                ) : (
                  <p className="text-lg font-bold text-gray-800 dark:text-muted-foreground">
                    {card.currency ? `৳ ${card.value?.toLocaleString()}` : card.value}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[{
          icon: <ArrowDownCircle className="w-8 h-8 text-indigo-600 mb-2" />,
          component: <AgentAddMoneyModal />,
        },{
          icon: <ArrowUpCircle className="w-8 h-8 text-indigo-600 mb-2" />,
          component: <AgentWithdrawModal />,
        },{
          icon: <User className="w-8 h-8 text-indigo-600 mb-2" />,
          component: <p className="text-gray-800 font-medium dark:text-foreground">Profile Management</p>,
        }].map((action, idx) => (
          <Card
            key={idx}
            className="bg-indigo-50 dark:bg-card border-violet-600 shadow-md rounded-xl cursor-pointer hover:bg-indigo-100 transition"
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              {loading ? <Skeleton className="h-8 w-8 rounded-full mb-2" /> : action.icon}
              {loading ? <Skeleton className="h-4 w-32 mt-2" /> : action.component}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-card shadow-md rounded-xl p-4">
        <h2 className="text-lg font-semibold dark:text-foreground text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b border-gray-200">
                {["Date","User","Action","Amount","Status"].map((h) => (
                  <th key={h} className="py-2 px-3 dark:text-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {loading
                ? Array.from({ length: 5 }).map((_, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      {Array.from({ length: 5 }).map((__, i) => (
                        <td key={i} className="py-2 px-3">
                          <Skeleton className="h-4 w-full" />
                        </td>
                      ))}
                    </tr>
                  ))
                : transactions?.data?.slice(0, 5).map((tx: any) => (
                    <tr key={tx._id} className="">
                      <td className="py-2 px-3 dark:text-muted-foreground">
                        {new Date(tx.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-3 dark:text-muted-foreground">{tx.receiverPhone || "N/A"}</td>
                      <td className="py-2 px-3 capitalize dark:text-muted-foreground">{tx.type}</td>
                      <td className="py-2 px-3 dark:text-muted-foreground">৳ {tx.amount.toLocaleString()}</td>
                      <td className={`py-2 px-3 ${tx.status === "COMPLETED" ? "text-green-600" : "text-red-600"}`}>
                        {tx.status}
                      </td>
                    </tr>
                  ))
              }

              {!loading && transactions?.data?.length === 0 && (
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

