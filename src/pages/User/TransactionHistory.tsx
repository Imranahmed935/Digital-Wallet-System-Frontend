/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTransactionQuery } from "@/redux/features/user/user.api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const { data, isLoading, error } = useTransactionQuery({
    page: currentPage,
    limit,
  });

  
  const transactions = data?.data || [];
  const totalPages = data?.meta?.pages;

  if (isLoading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Something went wrong!</p>
    );

  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-3xl dark:text-foreground font-bold text-gray-800 mb-6">
        Transaction History
      </h1>

      {transactions.length === 0 && (
        <p className="text-center text-gray-500">No transactions found</p>
      )}

      <div className="grid gap-4">
        {transactions.map((txn: any) => (
          <div
            key={txn._id}
            className="bg-white dark:bg-card rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition-shadow"
          >
            <div>
              <p className="font-semibold text-gray-800 text-left dark:text-foreground">{txn.type}</p>
              <p className="text-gray-500 text-left text-sm dark:text-muted-foreground">
                {new Date(txn.createdAt).toLocaleString()}
              </p>
              {txn.meta?.description && (
                <p className="text-gray-400 text-sm text-left dark:text-muted-foreground">{txn.meta.description}</p>
              )}
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">৳ {txn.amount}</p>
              <p
                className={`text-sm font-medium ${
                  txn.status === "COMPLETED"
                    ? "text-green-600"
                    : txn.status === "Failed"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {txn.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
