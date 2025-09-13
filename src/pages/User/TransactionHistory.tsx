/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTransactionQuery } from "@/redux/features/user/user.api";

const TransactionHistory = () => {
  const { data, isLoading, error } = useTransactionQuery(undefined);

  if (isLoading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Something went wrong!
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Transaction History
      </h1>

      {data?.length === 0 && (
        <p className="text-center text-gray-500">No transactions found</p>
      )}

      <div className="grid gap-4">
        {data?.map((txn: any) => (
          <div
            key={txn._id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition-shadow"
          >
            <div>
              <p className="font-semibold text-gray-800">{txn.type}</p>
              <p className="text-gray-500 text-sm">
                {new Date(txn.createdAt).toLocaleString()}
              </p>
              {txn.meta?.description && (
                <p className="text-gray-400 text-sm">{txn.meta.description}</p>
              )}
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">৳ {txn.amount}</p>
              <p
                className={`text-sm font-medium ${
                  txn.status === "COMPLETED"
                    ? "text-green-600"
                    : txn.status === "PENDING"
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
    </div>
  );
};

export default TransactionHistory;
