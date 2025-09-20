import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, CalendarDays, Lock } from "lucide-react";
import EditAdminProfile from "@/components/EditAdminProfile";
import { Skeleton } from "@/components/ui/skeleton";
import { ChangePassword } from "@/components/ChangePassword";
 // ✅ import your ChangePassword form

const Profile = () => {
  const { data, isLoading, error } = useUserInfoQuery(undefined);

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load profile data!
      </p>
    );
  }

  const user = data?.data;

  return (
    <div className="min-h-screen p-6">
      <Card className="w-full max-w-3xl rounded overflow-hidden mx-auto">
        {/* Banner with Edit button */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32 relative">
          <div className="absolute top-4 right-4">
            {!isLoading && <EditAdminProfile />}
          </div>
        </div>

        {/* Avatar */}
        <div className="-mt-16 flex justify-center">
          {isLoading ? (
            <Skeleton className="w-28 h-28 rounded-full" />
          ) : (
            <Avatar className="w-28 h-28 border-4 border-white shadow-md">
              <AvatarImage
                src={user?.avatar || "https://i.pravatar.cc/150"}
                alt={user?.name}
              />
              <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          )}
        </div>

        {/* Name & Role */}
        <CardHeader className="flex flex-col items-center gap-2 mt-4">
          {isLoading ? (
            <Skeleton className="h-6 w-48 rounded" />
          ) : (
            <CardTitle className="text-3xl font-bold dark:text-foreground text-gray-900">
              {user?.name}
            </CardTitle>
          )}
          {isLoading ? (
            <Skeleton className="h-4 w-24 rounded mt-1" />
          ) : (
            <Badge className="capitalize bg-blue-100 text-blue-800 px-3 py-1">
              {user?.role || "User"}
            </Badge>
          )}
        </CardHeader>

        {/* Profile Info */}
        <CardContent className="md:flex justify-around mt-4 gap-4 flex-wrap">
          {[
            { icon: Mail, label: "Email", value: user?.email },
            { icon: Phone, label: "Phone", value: user?.phone || "Not provided" },
            {
              icon: CalendarDays,
              label: "Member Since",
              value: user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A",
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition gap-3 flex-1"
            >
              <info.icon className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-foreground">
                  {info.label}
                </p>
                {isLoading ? (
                  <Skeleton className="h-4 w-32 mt-1 rounded" />
                ) : (
                  <p className="font-medium text-gray-900 dark:text-muted-foreground">
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </CardContent>

        {/* Change Password Section */}
        <CardContent className="mt-6 border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700 font-medium dark:text-foreground">
              <Lock className="h-5 w-5 text-blue-500" />
              Change Password
            </div>
            {!isLoading && <ChangePassword />} 
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
