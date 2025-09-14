import { useAllAgentsQuery, useAgentStatusMutation } from "@/redux/features/admin/admin.api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ManageAgents() {
  const { data: agents, isLoading, error } = useAllAgentsQuery(undefined);
  const [updateAgentStatus] = useAgentStatusMutation();

  if (isLoading) return <p>Loading agents...</p>;
  if (error) return <p>Failed to fetch agents</p>;

  const handleToggleStatus = async (id: string) => {
    try {
      const updatedAgent = await updateAgentStatus({id}).unwrap();
      toast.success(`Agent is now ${updatedAgent?.agent.isActive ? "approved" : "suspended"}`);
    } catch (err) {
      toast.error("Failed to update agent status");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Agents</h1>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead >Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {agents?.map((agent: { _id: string; name: string; email: string; phone: string; isActive: boolean }) => (
            <TableRow key={agent._id}>
              <TableCell className="text-left">{agent.name}</TableCell>
              <TableCell className="text-left">{agent.email}</TableCell>
              <TableCell className="text-left">{agent.phone}</TableCell>
              <TableCell className="text-left">{agent.isActive ? "Approved" : "Suspended"}</TableCell>
              <TableCell className="text-right">
                <Button
                  size="sm"
                  variant={agent.isActive ? "destructive" : "outline"}
                  onClick={() => handleToggleStatus(agent._id)}
                >
                  {agent.isActive ? "Suspend" : "Approve"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
