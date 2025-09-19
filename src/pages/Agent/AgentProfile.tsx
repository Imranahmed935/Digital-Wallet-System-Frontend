import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, CalendarDays, Key } from "lucide-react";
import EditProfile from "@/components/EditProfile";
import { Skeleton } from "@/components/ui/skeleton";
import { ChangePassword } from "@/components/ChangePassword";

const AgentProfile = () => {
  const { data: user, isLoading, error } = useUserInfoQuery(undefined);
  const u = user?.data;

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load profile data!
      </p>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <Card className="w-full max-w-3xl rounded overflow-hidden mx-auto">
        {/* Banner with Edit button */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32 relative">
          {!isLoading && (
            <div className="absolute top-4 right-4">
              <EditProfile />
            </div>
          )}
        </div>

        {/* Avatar */}
        <div className="-mt-16 flex justify-center">
          {isLoading ? (
            <Skeleton className="w-28 h-28 rounded-full border-4 border-white shadow-md" />
          ) : (
            <Avatar className="w-28 h-28 border-4 border-white shadow-md">
              <AvatarImage src={u.avatar || "https://i.pravatar.cc/150"} alt={u.name} />
              <AvatarFallback>{u.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          )}
        </div>

        {/* Name & Role */}
        <CardHeader className="flex flex-col items-center gap-2 mt-4">
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-6 w-24 mt-1" />
            </>
          ) : (
            <>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-foreground">{u.name}</CardTitle>
              <Badge className="capitalize bg-blue-100 text-blue-800 px-3 py-1">{u.role}</Badge>
            </>
          )}
        </CardHeader>

        {/* Profile Info */}
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6 pb-6">
          {[
            { label: "Email", icon: <Mail className="h-6 w-6 text-blue-500" />, value: u?.email },
            { label: "Phone", icon: <Phone className="h-6 w-6 text-green-500" />, value: u?.phone || "Not provided" },
            { label: "Member Since", icon: <CalendarDays className="h-6 w-6 text-purple-500" />, value: u ? new Date(u.createdAt).toLocaleDateString() : "" },
            { label: "Password", icon: <Key className="h-6 w-6 text-red-500" />, value: "********" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 bg-white dark:bg-accent rounded-xl shadow-sm hover:shadow-md transition gap-3"
            >
              {isLoading ? (
                <Skeleton className="h-6 w-6 rounded-full" />
              ) : (
                item.icon
              )}
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-foreground">{item.label}</p>
                {isLoading ? (
                  <Skeleton className="h-4 w-32 mt-1" />
                ) : item.label === "Password" ? (
                  <>
                    <p className="font-medium text-gray-900 dark:text-muted-foreground">{item.value}</p>
                    <button className="text-blue-500 text-sm mt-1 hover:underline"><ChangePassword/></button>
                  </>
                ) : (
                  <p className="font-medium text-gray-900 dark:text-muted-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentProfile;


