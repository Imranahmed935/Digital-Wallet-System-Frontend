/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useAgentTransactionsQuery } from "@/redux/features/agent/agent.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const AllTransactions = () => {
  const { data: user } = useUserInfoQuery(undefined);
  const agentId = user?.data?._id;

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const { data: transactions, isLoading, error } = useAgentTransactionsQuery(
    { id: agentId, page, limit, search, status, type },
    { skip: !agentId }
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agent Transactions</h1>

      {/* Filters */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded w-1/3"
        />

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded dark:bg-card"
        >
          <option value="">All Status</option>
          <option value="COMPLETED">Completed</option>
          <option value="PENDING">Pending</option>
          <option value="FAILED">Failed</option>
        </select>

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded dark:bg-card"
        >
          <option value="">All Types</option>
          <option value="CASH_IN">Cash In</option>
          <option value="CASH_OUT">Cash Out</option>
        </select>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading
              ? Array.from({ length: 10 }).map((_, idx) => (
                  <TableRow key={idx}>
                    <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                  </TableRow>
                ))
              : error
              ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4 text-red-500">
                    Failed to fetch transactions
                  </TableCell>
                </TableRow>
              )
              : transactions?.data?.length > 0
              ? transactions.data.map((tx: any) => (
                  <TableRow key={tx._id}>
                    <TableCell>{new Date(tx.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell className="capitalize">{tx.type}</TableCell>
                    <TableCell>৳ {tx.amount}</TableCell>
                    <TableCell>৳ {tx.commission}</TableCell>
                    <TableCell
                      className={
                        tx.status === "COMPLETED"
                          ? "text-green-600 font-medium"
                          : "text-red-600 font-medium"
                      }
                    >
                      {tx.status}
                    </TableCell>
                  </TableRow>
                ))
              : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No transactions found
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {transactions?.pagination && (
        <div className="flex gap-4 items-center mt-4 flex-wrap">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {transactions.pagination.page} of {transactions.pagination.totalPages}
          </span>
          <button
            disabled={page === transactions.pagination.totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllTransactions;

