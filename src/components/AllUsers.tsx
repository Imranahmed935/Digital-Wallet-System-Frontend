import { useAllUsersQuery, useUpdateUserStatusMutation } from "@/redux/features/admin/admin.api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

export default function AllUsers() {
  const { data: users, isLoading, error } = useAllUsersQuery(undefined);
  const [updateUserStatus] = useUpdateUserStatusMutation();

  const handleToggleStatus = async (userId: string) => {
    try {
      const updatedUser = await updateUserStatus({ id: userId }).unwrap();
      toast.success(
        `User ${updatedUser?.user.isActive ? "unblocked" : "blocked"} successfully`
      );
    } catch (err) {
      toast.error("Failed to update user status");
      console.error(err);
    }
  };

  // Skeleton rows
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Users</h1>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading
            ? skeletonRows.map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-6 w-20 mx-auto" /></TableCell>
                </TableRow>
              ))
            : error
            ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-red-500">
                  Failed to fetch users
                </TableCell>
              </TableRow>
            )
            : users?.data.map((user: {
                _id: string;
                name: string;
                email: string;
                phone: string;
                isActive: boolean;
              }) => (
                <TableRow key={user._id}>
                  <TableCell className="text-left">{user.name}</TableCell>
                  <TableCell className="text-left">{user.email}</TableCell>
                  <TableCell className="text-left">{user.phone}</TableCell>
                  <TableCell className="text-left">{user.isActive ? "Active" : "Inactive"}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant={user.isActive ? "destructive" : "outline"}
                      onClick={() => handleToggleStatus(user._id)}
                    >
                      {user.isActive ? "Block" : "Unblock"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
