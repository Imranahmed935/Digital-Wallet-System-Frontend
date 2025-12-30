/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "@/components/Modal";
import { useAllWalletQuery, useTransactionsQuery,  } from "@/redux/features/user/user.api";
import { WithdrawModal } from "@/components/WithdrawModal";
import { SendModal } from "@/components/SendModal";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import GuidedTour from "@/components/GuidedTour";

const UserAnalytics = () => {
  const [currentPage] = useState(1);
  const [limit] = useState(10);
  const [showBalance, setShowBalance] = useState(false);

  const { data, isLoading: walletLoading,} = useAllWalletQuery(undefined);
  const { data: userData, isLoading: userLoading } = useUserInfoQuery(undefined);
  const { data: recentTransactions, isLoading: txLoading } = useTransactionsQuery({
    page: currentPage,
    limit,
  });


  const loading = walletLoading || userLoading || txLoading;
  const walletBalance = data?.data.balance || 0;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showBalance) {
      timer = setTimeout(() => setShowBalance(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [showBalance]);

  return (
    <div id="user-analytics" className="min-h-screen p-4">
     
      {/* Balance Card */}
      <Card className="bg-gradient-to-r from-violet-500 to-violet-700 text-white rounded md:p-4 p-2">
        <CardContent className="flex items-center justify-between p-0 gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {loading ? (
              <Skeleton className="w-14 h-14 rounded-full" />
            ) : (
              <Avatar className="w-14 h-14 border-2 border-white flex-shrink-0">
                <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}

            <div className="flex flex-col items-start min-w-0">
              {loading ? (
                <>
                  <Skeleton className="h-4 w-36 mb-1" />
                  <Skeleton className="h-8 w-44" />
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[ArrowDownCircle, ArrowUpCircle, Wallet].map((Icon, idx) => (
          <Card
            key={idx}
            className="bg-violet-100 w-full rounded-2xl shadow-sm dark:bg-card dark:border-violet-600"
          >
            <CardContent className="flex flex-col items-center justify-center py-6">
              {loading ? (
                <Skeleton className="w-12 h-12 rounded-full mb-3" />
              ) : (
                <Icon className="w-12 h-12 text-violet-500" />
              )}

              {loading ? (
                <Skeleton className="h-4 w-10 mt-2" />
              ) : idx === 0 ? (
                <WithdrawModal />
              ) : idx === 1 ? (
                <Modal />
              ) : (
                <SendModal />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-3">Recent Transactions</h2>
        <div className="bg-white dark:bg-card rounded-lg shadow p-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {["Type", "Status", "Amount", "Date"].map((h) => (
                  <TableHead key={h}>{h}</TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading
                ? Array.from({ length: 5 }).map((_, rowIdx) => (
                    <TableRow key={rowIdx}>
                      {Array.from({ length: 4 }).map((__, colIdx) => (
                        <TableCell key={colIdx}>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                : recentTransactions?.data?.length > 0
                ? recentTransactions.data.map((tx: any) => (
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
                  ))
                : (
                  <tr>
                    <td colSpan={4} className="text-center py-4 text-gray-500">
                      No recent transactions
                    </td>
                  </tr>
                )}
            </TableBody>
          </Table>
        </div>
      </div>
       <GuidedTour/>
    </div>
  );
};

export default UserAnalytics;

