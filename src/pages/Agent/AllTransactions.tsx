/* eslint-disable @typescript-eslint/no-explicit-any */
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

const AllTransactions = () => {
  const { data: user } = useUserInfoQuery(undefined);
  const agentId = user?.data?._id;

  const { data:transactions, isLoading, error } = useAgentTransactionsQuery(agentId, {
    skip: !agentId,
  });
console.log(transactions)
  if (isLoading) return <p>Loading transactions...</p>;
  if (error) return <p className="text-red-500">Failed to fetch transactions</p>;



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agent Transactions</h1>
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
            {transactions?.data.length > 0 ? (
              transactions?.data.map((tx: any) => (
                <TableRow key={tx._id}>
                  <TableCell>
                    {new Date(tx.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="capitalize">{tx.type}</TableCell>
                  <TableCell>${tx.amount}</TableCell>
                  <TableCell>${tx.commission}</TableCell>
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
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllTransactions;
