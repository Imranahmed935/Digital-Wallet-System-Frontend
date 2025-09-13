
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function EditProfile() {
  const { data } = useUserInfoQuery(undefined);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

 
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setEmail(data.email || "");
      setPhone(data.phone || "");
    }
  }, [data]);

  const handleSave = () => {
    const updatedProfile = { name, email, phone };
    console.log(updatedProfile); 
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-4 sm:max-w-lg p-6">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="text-lg font-semibold">Edit Profile</DialogTitle>
        </DialogHeader>

        <DialogDescription className="sr-only">
          Make changes to your profile here.
        </DialogDescription>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
            />
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex justify-end gap-2 mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
