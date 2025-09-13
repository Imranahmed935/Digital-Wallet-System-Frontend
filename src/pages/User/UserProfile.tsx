import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import EditProfile from "@/components/EditProfile";

const UserProfile = () => {
  const { data, isLoading, error } = useUserInfoQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load profile data!
      </p>
    );
  }

  const user = data;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl border border-gray-200">
        <CardHeader className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              {user?.name}
            </CardTitle>
            <Badge
              variant="secondary"
              className="mt-2 capitalize bg-blue-100 text-blue-700"
            >
              {user?.role}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">{user?.email}</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-gray-800">
                {user?.phone || "Not provided"}
              </p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="font-medium text-gray-800">
                {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-medium text-gray-800">{user?._id}</p>
            </div>
          </div>
        </CardContent>
        <EditProfile/>
      </Card>
      
    </div>
  );
};

export default UserProfile;
