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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32 relative">
          <div className="absolute top-4 right-4">
            <EditProfile  />
          </div>
        </div>

        {/* Avatar */}
        <div className="-mt-16 flex justify-center">
          <Avatar className="h-32 w-32 ring-4 ring-white shadow-lg">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
        </div>

        {/* Name & Role */}
        <CardHeader className="flex flex-col items-center gap-2 mt-4">
          <CardTitle className="text-3xl font-bold text-gray-900">{user?.name}</CardTitle>
          <Badge className="capitalize bg-blue-100 text-blue-800 px-3 py-1">{user?.role}</Badge>
        </CardHeader>

        {/* Profile Info */}
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-6 pb-6">
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">{user?.email}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-800">{user?.phone || "Not provided"}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500">Member Since</p>
            <p className="font-medium text-gray-800">{new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-500">User ID</p>
            <p className="font-medium text-gray-800">{user?._id}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
