import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, CalendarDays, Key } from "lucide-react";
import EditProfile from "@/components/EditProfile";
import { Skeleton } from "@/components/ui/skeleton";

const UserProfile = () => {
  const { data: user, isLoading, error } = useUserInfoQuery(undefined);

  // Skeleton for loading state
  if (isLoading) {
    return (
      <div className="min-h-screen p-6 flex flex-col items-center gap-4">
        <Skeleton className="w-full max-w-3xl h-32 rounded-lg" />
        <Skeleton className="w-28 h-28 rounded-full -mt-16" />
        <Skeleton className="w-48 h-8 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Skeleton key={idx} className="h-24 rounded-xl w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !user?.data) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load profile data!
      </p>
    );
  }

  const u = user.data;

  return (
    <div id="user-profile" className="min-h-screen p-6">
      <Card className="w-full max-w-3xl rounded overflow-hidden mx-auto">
        {/* Banner with Edit button */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32 relative">
          <div className="absolute top-4 right-4">
            <EditProfile />
          </div>
        </div>

        {/* Avatar */}
        <div className="-mt-16 flex justify-center">
          <Avatar className="w-28 h-28 border-4 border-white shadow-md">
            <AvatarImage src={u.avatar || "https://i.pravatar.cc/150"} alt={u.name} />
            <AvatarFallback>{u.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
        </div>

        {/* Name & Role */}
        <CardHeader className="flex flex-col items-center gap-2 mt-4">
          <CardTitle className="text-3xl font-bold text-gray-900">{u.name}</CardTitle>
          <Badge className="capitalize bg-blue-100 text-blue-800 px-3 py-1">{u.role}</Badge>
        </CardHeader>

        {/* Profile Info */}
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6 pb-6">
          <div className="flex items-center p-4 bg-white dark:bg-accent rounded-xl shadow-sm hover:shadow-md transition gap-3">
            <Mail className="h-6 w-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">Email</p>
              <p className="font-medium text-gray-900 dark:text-foreground">{u.email}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white dark:bg-accent dark:border-violet-600 rounded-xl shadow-sm hover:shadow-md transition gap-3">
            <Phone className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">Phone</p>
              <p className="font-medium text-gray-900 dark:text-foreground">{u.phone || "Not provided"}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white dark:bg-accent rounded-xl shadow-sm hover:shadow-md transition gap-3">
            <CalendarDays className="h-6 w-6 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">Member Since</p>
              <p className="font-medium text-gray-900 dark:text-foreground">{new Date(u.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Masked Password */}
          <div className="flex items-center p-4 bg-white dark:bg-accent rounded-xl shadow-sm hover:shadow-md transition gap-3">
            <Key className="h-6 w-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-foreground">Password</p>
              <p className="font-medium text-gray-900 dark:text-foreground">********</p>
              <button className="text-blue-500 text-sm mt-1 hover:underline">Change Password</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
