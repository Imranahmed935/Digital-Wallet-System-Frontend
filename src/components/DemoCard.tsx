import { Button } from "./ui/button";

function DemoCard({
  role,
  email,
  password,
  onClick,
}: {
  role: string;
  email: string;
  password: string;
  onClick: () => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm">
      <div>
        <p className="font-semibold">{role}</p>
        <p className="font-mono text-xs">{email}</p>
        <p className="font-mono text-xs">{password}</p>
      </div>
      <Button size="sm" variant="outline" onClick={onClick}>
        Use
      </Button>
    </div>
  );
}
export default  DemoCard