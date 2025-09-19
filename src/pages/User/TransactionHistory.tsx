/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useTransactionsQuery } from "@/redux/features/user/user.api";

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [typeFilter, setTypeFilter] = useState(""); // e.g., "CASH_IN", "CASH_OUT"
  const [dateRange, setDateRange] = useState<{ start?: string; end?: string }>({});

  const { data, isLoading, error } = useTransactionsQuery({
    page: currentPage,
    limit,
    type: typeFilter || undefined,
    startDate: dateRange.start,
    endDate: dateRange.end,
  });

  const transactions = data?.data || [];
  const totalPages = data?.meta?.pages || 1;

  // Skeleton rows while loading
  const skeletonRows = Array.from({ length: limit });

  return (
    <div id="all-transaction" className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-foreground mb-6">
        Transaction History
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded px-3 py-1 dark:bg-card dark:text-foreground"
        >
          <option value="">All Types</option>
          <option value="CASH_IN">Cash In</option>
          <option value="CASH_OUT">Cash Out</option>
        </select>

        <input
          type="date"
          value={dateRange.start || ""}
          onChange={(e) =>
            setDateRange((prev) => ({ ...prev, start: e.target.value }))
          }
          className="border rounded px-3 py-1 dark:bg-card dark:text-foreground"
        />

        <input
          type="date"
          value={dateRange.end || ""}
          onChange={(e) =>
            setDateRange((prev) => ({ ...prev, end: e.target.value }))
          }
          className="border rounded px-3 py-1 dark:bg-card dark:text-foreground"
        />
      </div>

      {/* Transaction Table */}
      {isLoading ? (
        <div className="grid gap-4">
          {skeletonRows.map((_, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-card rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-20" />
              </div>
              <div className="text-right space-y-2">
                <Skeleton className="h-4 w-16 mx-auto" />
                <Skeleton className="h-3 w-12 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p className="text-center mt-10 text-red-500">Something went wrong!</p>
      ) : transactions.length === 0 ? (
        <p className="text-center text-gray-500">No transactions found</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 dark:bg-card">
                <tr>
                  <th className="p-3 border-b">Type</th>
                  <th className="p-3 border-b">Status</th>
                  <th className="p-3 border-b">Amount</th>
                  <th className="p-3 border-b">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn: any) => (
                  <tr key={txn._id} className="hover:bg-gray-50 dark:hover:bg-card">
                    <td className="p-3 capitalize">{txn.type}</td>
                    <td
                      className={`p-3 ${
                        txn.status === "COMPLETED"
                          ? "text-green-600"
                          : txn.status === "Failed"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {txn.status}
                    </td>
                    <td className="p-3">৳ {txn.amount.toLocaleString()}</td>
                    <td className="p-3">{new Date(txn.createdAt).toLocaleString()}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
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
        </>
      )}
    </div>
  );
};

export default TransactionHistory;

