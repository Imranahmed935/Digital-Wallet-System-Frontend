import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GuidedTour from "../GuidedTour";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useAllUsersQuery, useAllAgentsQuery, useAllTransactionsQuery } from "@/redux/features/admin/admin.api";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  const { data: userData } = useUserInfoQuery(undefined);
  const { isLoading: usersLoading } = useAllUsersQuery(undefined);
  const { isLoading: agentsLoading } = useAllAgentsQuery(undefined);
  const { isLoading: transactionsLoading } = useAllTransactionsQuery(undefined);

  const userEmail = userData?.data?.email;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {userEmail && (
        <GuidedTour
          userEmail={userEmail}
          usersLoaded={!usersLoading}
          agentsLoaded={!agentsLoading}
          transactionsLoaded={!transactionsLoading}
        />
      )}
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
