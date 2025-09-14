import { useAllUsersQuery, useUpdateUserStatusMutation } from "@/redux/features/admin/admin.api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function AllUsers() {
  const { data: users, isLoading, error } = useAllUsersQuery(undefined);
  const [updateUserStatus] = useUpdateUserStatusMutation();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Failed to fetch users</p>;

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
          {users?.map((user: {
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
