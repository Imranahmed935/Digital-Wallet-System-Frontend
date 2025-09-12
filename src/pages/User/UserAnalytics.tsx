import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/icon/Logo";

const UserAnalytics = () => {
  const [showBalance, setShowBalance] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showBalance) {
      timer = setTimeout(() => setShowBalance(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [showBalance]);

  return (
<div className="min-h-screen bg-gray-50 ">
  <Card className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded md:p-4 p-2">
  <CardContent className="flex items-center justify-between p-0 gap-2 flex-wrap">
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white flex-shrink-0">
        <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start min-w-0">
        <p className="text-xs sm:text-sm md:text-base truncate">
          Account: 01734890714
        </p>
        <div
          onClick={() => setShowBalance(!showBalance)}
          className="mt-1 cursor-pointer relative w-32 sm:w-36 md:w-44 h-7 sm:h-8 md:h-9 overflow-hidden bg-white rounded-full flex items-center shadow-sm flex-shrink-0"
        >
          {showBalance && (
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg font-bold flex items-center gap-1 text-black"
            >
              <span>৳</span> 12,500
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
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg text-gray-600"
              >
                ৳ Tap for balance
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>

    {/* Right Side: Transaction + Logo */}
    <div className="flex items-center gap-4 md:gap-4">
      <div className="flex items-center gap-1 sm:gap-2 cursor-pointer py-1 sm:py-2 rounded-lg flex-shrink-0">
        <Wallet className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 " />
        <span className="md:text-base font-medium text-black">
          Transaction
        </span>
      </div>
      <div className=" flex-shrink-0">
        <Logo />
      </div>
    </div>
  </CardContent>
</Card>

{/* Quick Actions */}
<div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 mt-3 sm:mt-4 md:mt-6 mx-0">
  <Card className="bg-pink-50 rounded-2xl shadow-sm mx-0">
    <CardContent className="flex flex-col items-center justify-center py-2 sm:py-5 md:py-8">
      <ArrowDownCircle className="w-5 h-5 sm:w-8 sm:h-10 md:w-12 md:h-12 text-pink-500" />
      <span className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base font-medium">
        Add Money
      </span>
    </CardContent>
  </Card>

  <Card className="bg-pink-50 rounded-2xl shadow-sm mx-0">
    <CardContent className="flex flex-col items-center justify-center py-2 sm:py-5 md:py-8">
      <ArrowUpCircle className="w-5 h-5 sm:w-8 sm:h-10 md:w-12 md:h-12 text-pink-500" />
      <span className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base font-medium">
        Send Money
      </span>
    </CardContent>
  </Card>

  <Card className="bg-pink-50 rounded-2xl shadow-sm mx-0">
    <CardContent className="flex flex-col items-center justify-center py-2 sm:py-5 md:py-8">
      <Wallet className="w-5 h-5 sm:w-8 sm:h-10 md:w-12 md:h-12 text-pink-500" />
      <span className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base font-medium">
        Withdraw
      </span>
    </CardContent>
  </Card>
</div>
</div>

  );
};

export default UserAnalytics;
