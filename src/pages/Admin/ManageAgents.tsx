import { useAllAgentsQuery, useAgentStatusMutation } from "@/redux/features/admin/admin.api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

export default function ManageAgents() {
  const { data: agents, isLoading, error } = useAllAgentsQuery(undefined);
  const [updateAgentStatus] = useAgentStatusMutation();

  const handleToggleStatus = async (id: string) => {
    try {
      const updatedAgent = await updateAgentStatus({ id }).unwrap();
      toast.success(
        `Agent is now ${updatedAgent?.agent.isActive ? "approved" : "suspended"}`
      );
    } catch (err) {
      toast.error("Failed to update agent status");
      console.error(err);
    }
  };

  // Skeleton rows for loading
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Agents</h1>

      <Table className="border">
        <TableHeader>
          <TableRow>
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
                  Failed to fetch agents
                </TableCell>
              </TableRow>
            )
            : agents?.data.agents.map((agent: { _id: string; name: string; email: string; phone: string; isActive: boolean }) => (
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
              ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
