import { Card, CardContent } from "@/components/ui/card";
import {
  useAllAgentsQuery,
  useAllTransactionsQuery,
  useAllUsersQuery,
} from "@/redux/features/admin/admin.api";
import { User, Users, Wallet, Settings } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import GuidedTour from "@/components/GuidedTour";
import DailyTransactionChart from "@/components/DailyTransactionsChart";
import DailyUsers from "@/components/DailyUsers";

const AdminAnalytics = () => {
  const { data: users, isLoading: usersLoading } = useAllUsersQuery(undefined);
  const { data: agents, isLoading: agentsLoading } =
    useAllAgentsQuery(undefined);
  const { data: transactions, isLoading: transactionsLoading } =
    useAllTransactionsQuery(undefined);
  const dailyData = transactions?.data.dailyTransactions;
   const dailyUser = users?.data.dailyUsers;
  const loading = usersLoading || agentsLoading || transactionsLoading;

  return (
    <div
      id="admin-analytics"
      className="min-h-screen p-4 sm:p-6 md:p-8 space-y-6"
    >
      <GuidedTour />
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        {loading ? (
          <Skeleton className="h-8 w-64 rounded" />
        ) : (
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-foreground">
            Admin Dashboard
          </h1>
        )}

        {loading ? (
          <Skeleton className="h-4 w-48 rounded" />
        ) : (
          <p className="text-gray-600 text-sm sm:text-base dark:text-muted-foreground">
            Overview of users, agents, transactions, and system settings
          </p>
        )}
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Users */}
        <Card className="bg-white dark:bg-card border-violet-600 rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <User className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">
                Total Users
              </p>
              {loading ? (
                <Skeleton className="h-6 w-16 mt-1 rounded" />
              ) : (
                <p className="text-lg font-bold text-gray-800 dark:text-muted-foreground text-center">
                  {users?.data.users.length}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Total Agents */}
        <Card className="bg-white rounded-xl dark:bg-card border-violet-600">
          <CardContent className="flex items-center gap-3 p-4">
            <Users className="w-6 h-6 text-green-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">
                Total Agents
              </p>
              {loading ? (
                <Skeleton className="h-6 w-16 mt-1 rounded" />
              ) : (
                <p className="text-lg font-bold text-gray-800 dark:text-muted-foreground text-center">
                  {agents?.data?.length}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Transactions */}
        <Card className="bg-white rounded-xl dark:bg-card border-violet-600">
          <CardContent className="flex items-center gap-3 p-4">
            <Wallet className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">
                Transactions
              </p>
              {loading ? (
                <Skeleton className="h-6 w-16 mt-1 rounded" />
              ) : (
                <p className="text-lg font-bold text-gray-800 dark:text-muted-foreground text-center">
                  {transactions?.meta?.total}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Transaction Volume */}
        <Card className="bg-white rounded-xl dark:bg-card border-violet-600">
          <CardContent className="flex items-center gap-3 p-4">
            <Settings className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">
                Transaction Volume
              </p>
              {loading ? (
                <Skeleton className="h-6 w-20 mt-1 rounded" />
              ) : (
                <p className="text-lg font-bold text-gray-800 dark:text-muted-foreground">
                  ৳ 5,000,000
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <DailyTransactionChart data={dailyData} />
      </div>
      <div>
        <DailyUsers data={dailyUser}/>
      </div>
    </div>
  );
};

export default AdminAnalytics;
