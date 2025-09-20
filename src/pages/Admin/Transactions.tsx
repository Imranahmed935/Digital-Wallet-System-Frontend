/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useAllTransactionsQuery } from "@/redux/features/admin/admin.api";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const Transactions = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    status: "",
    category: "",
    search: "",
    minAmount: "",
    maxAmount: "",
  });

  const { data, isLoading, error, refetch } = useAllTransactionsQuery(filters);
  const transactions = data?.data || [];
  const meta = data?.meta || { total: 0, page: 1, limit: 10, pages: 1 };

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= meta.pages) {
      setFilters({ ...filters, page: newPage });
    }
  };

  const skeletonRows = Array.from({ length: filters.limit });

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-lg md:text-xl font-bold mb-4">All Transactions</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={filters.search}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded text-sm w-full"
        />
        <input
          type="number"
          name="minAmount"
          placeholder="Min Amount"
          value={filters.minAmount}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded text-sm w-full"
        />
        <input
          type="number"
          name="maxAmount"
          placeholder="Max Amount"
          value={filters.maxAmount}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded text-sm w-full"
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="border dark:bg-card px-3 py-2 rounded text-sm w-full"
        >
          <option value="">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="COMPLETED">Completed</option>
          <option value="FAILED">Failed</option>
        </select>
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border px-3 py-2 dark:bg-card rounded text-sm w-full"
        >
          <option value="">All Categories</option>
          <option value="DEPOSIT">Deposit</option>
          <option value="WITHDRAW">Withdraw</option>
          <option value="CASH_IN">Cash In</option>
        </select>
        <Button
          variant="secondary"
          className="w-full bg-violet-600 text-white hover:text-black"
          onClick={() =>
            setFilters({
              page: 1,
              limit: 10,
              status: "",
              category: "",
              search: "",
              minAmount: "",
              maxAmount: "",
            })
          }
        >
          Reset
        </Button>
      </div>

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-sm md:text-base">
          <thead className="bg-gray-100 dark:bg-card">
            <tr>
              <th className="p-2 text-left border">Date</th>
              <th className="p-2 text-left border">Type</th>
              <th className="p-2 text-left border">Status</th>
              <th className="p-2 text-left border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? skeletonRows.map((_, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2"><Skeleton className="h-4 w-32" /></td>
                    <td className="p-2"><Skeleton className="h-4 w-20" /></td>
                    <td className="p-2"><Skeleton className="h-4 w-24" /></td>
                    <td className="p-2"><Skeleton className="h-4 w-16" /></td>
                  </tr>
                ))
              : error
              ? (
                <tr>
                  <td colSpan={4} className="text-center text-red-500">
                    Failed to load transactions
                  </td>
                </tr>
              )
              : transactions?.transactions.length === 0
              ? (
                <tr>
                  <td colSpan={4} className="text-center text-gray-500">
                    No transactions found
                  </td>
                </tr>
              )
              : transactions?.transactions.map((tx: any) => (
                  <tr key={tx._id} className="border-b hover:bg-gray-50">
                    <td className="p-2 text-left whitespace-nowrap">
                      {new Date(tx.createdAt).toLocaleString()}
                    </td>
                    <td className="p-2 text-left">{tx.type}</td>
                    <td
                      className={`p-2 text-left font-medium ${
                        tx.status === "COMPLETED"
                          ? "text-green-600"
                          : tx.status === "FAILED"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {tx.status}
                    </td>
                    <td className="p-2 text-left whitespace-nowrap">৳{tx.amount}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>

      {/* ShadCN Pagination */}
      {meta.pages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(meta.page - 1)}
                  className={meta.page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>

              {Array.from({ length: meta.pages }, (_, index) => index + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={meta.page === page}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(meta.page + 1)}
                  className={meta.page === meta.pages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Transactions;
