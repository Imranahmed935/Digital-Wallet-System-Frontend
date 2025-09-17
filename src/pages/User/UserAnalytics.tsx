/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "@/components/Modal";
import { useAllWalletQuery, useTransactionQuery } from "@/redux/features/user/user.api";
import { WithdrawModal } from "@/components/WithdrawModal";
import { SendModal } from "@/components/SendModal";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const UserAnalytics = () => {
  const [currentPage] = useState(1);
  const [limit] = useState(10);
  const [showBalance, setShowBalance] = useState(false);

  const { data, isLoading, error } = useAllWalletQuery(undefined);
  const { data: userData } = useUserInfoQuery(undefined);
  const { data: recentTransactions } = useTransactionQuery({
    page: currentPage,
    limit,
  });

  const walletBalance = data?.data.balance || 0;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showBalance) {
      timer = setTimeout(() => setShowBalance(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [showBalance]);

  if (isLoading) return <p>Loading wallet...</p>;
  if (error) return <p>Failed to load wallet</p>;

  return (
    <div className="min-h-screen bg-violet-50 p-4">
      {/* Balance Card */}
      <Card className="bg-gradient-to-r from-violet-500 to-violet-700 text-white rounded md:p-4 p-2">
        <CardContent className="flex items-center justify-between p-0 gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Avatar className="w-14 h-14 border-2 border-white flex-shrink-0">
              <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start min-w-0">
              <p className="text-base truncate">Account: {userData?.data.phone}</p>
              <div
                onClick={() => setShowBalance(!showBalance)}
                className="mt-1 cursor-pointer relative w-44 h-9 overflow-hidden bg-white rounded-full flex items-center shadow-sm flex-shrink-0"
              >
                {showBalance && (
                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-bold text-black flex items-center gap-1"
                  >
                    <span>৳ {walletBalance}</span>
                  </motion.p>
                )}

                <AnimatePresence>
                  {!showBalance && (
                    <motion.p
                      key="tap"
                      initial={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-violet-800"
                    >
                      Tap for balance
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <Card className="bg-violet-100 rounded-2xl shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-6">
            <ArrowDownCircle className="w-12 h-12 text-violet-500" />
            <span className="mt-3 text-base font-medium">
              <WithdrawModal />
            </span>
          </CardContent>
        </Card>

        <Card className="bg-violet-100 rounded-2xl shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-6">
            <ArrowUpCircle className="w-12 h-12 text-violet-500" />
            <div className="mt-3 text-base font-medium">
              <Modal />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-violet-100 rounded-2xl shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-6">
            <Wallet className="w-12 h-12 text-violet-500" />
            <span className="mt-3 text-base font-medium">
              <SendModal />
            </span>
          </CardContent>
        </Card>
      </div>

     
      <div className="mt-8">
  <h2 className="text-lg font-bold mb-3">Recent Transactions</h2>
  <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
    {recentTransactions?.data?.length > 0 ? (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Type</TableHead>
            <TableHead className="text-left">Status</TableHead>
            <TableHead className="text-left">Amount</TableHead>
            <TableHead className="text-left">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentTransactions.data.map((tx: any) => (
            <TableRow key={tx._id}>
              <TableCell className="capitalize text-left">{tx.type}</TableCell>
              <TableCell
                className={
                  tx.status === "COMPLETED"
                    ? "text-green-600 text-left"
                    : "text-red-600 text-left"
                }
              >
                {tx.status}
              </TableCell>
              <TableCell className="text-left">৳ {tx.amount}</TableCell>
              <TableCell className="text-left">
                {new Date(tx.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <p className="text-gray-500 text-sm">No recent transactions</p>
    )}
  </div>
</div>

    </div>
  );
};

export default UserAnalytics;
