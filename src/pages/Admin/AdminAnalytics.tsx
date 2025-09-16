

import { Card, CardContent } from "@/components/ui/card";
import { useAllAgentsQuery, useAllTransactionsQuery, useAllUsersQuery } from "@/redux/features/admin/admin.api";
import { User, Users, Wallet, Settings } from "lucide-react";

const AdminAnalytics = () => {
  const {data:users} = useAllUsersQuery(undefined)
  const {data:agents} = useAllAgentsQuery(undefined)
  const {data:transactions} = useAllTransactionsQuery(undefined)
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Overview of users, agents, transactions, and system settings
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-white rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <User className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-lg font-bold text-gray-800">{users?.data?.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <Users className="w-6 h-6 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Total Agents</p>
              <p className="text-lg font-bold text-gray-800">{agents?.data?.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <Wallet className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Transactions</p>
              <p className="text-lg font-bold text-gray-800">{transactions?.meta.total}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white  rounded-xl">
          <CardContent className="flex items-center gap-3 p-4">
            <Settings className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Transaction Volume</p>
              <p className="text-lg font-bold text-gray-800">৳ 5,000,000</p>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  );
};

export default AdminAnalytics;
