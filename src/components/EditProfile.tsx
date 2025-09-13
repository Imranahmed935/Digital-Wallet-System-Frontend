/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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

export default function EditProfile({ user, onSave }: any) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  const handleSave = () => {
    const updatedProfile = { name, email, phone, avatar };
    onSave(updatedProfile); // send updated data to parent or API
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
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

          <div>
            <Label htmlFor="avatar">Avatar URL</Label>
            <Input
              id="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="Enter avatar URL"
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
