import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/icon/Logo";
import { Modal } from "@/components/Modal";
import { useAllWalletQuery } from "@/redux/features/user/user.api";

const UserAnalytics = () => {
  const [showBalance, setShowBalance] = useState(false);
  const { data, isLoading, error } = useAllWalletQuery(undefined);


  const walletBalance = data?.balance || 0;

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
      <Card className="bg-gradient-to-r from-violet-500 to-violet-700 text-white rounded md:p-4 p-2">
        <CardContent className="flex items-center justify-between p-0 gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Avatar className="w-14 h-14 border-2 border-white flex-shrink-0">
              <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start min-w-0">
              <p className="text-base truncate">Account: 01734890714</p>
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

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer py-2 rounded-lg flex-shrink-0 text-violet-800">
              <Wallet className="w-6 h-6 text-violet-600" />
              <span className="font-medium">Transaction</span>
            </div>
            <Logo />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <Card className="bg-violet-100 rounded-2xl shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-6">
            <ArrowDownCircle className="w-12 h-12 text-violet-500" />
            <span className="mt-3 text-base font-medium">Withdraw Money</span>
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
            <span className="mt-3 text-base font-medium">Send Money</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserAnalytics;
