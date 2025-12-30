import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMoney: builder.mutation({
      query: (Info) => ({
        url: "/add",
        method: "POST",
        data: Info,
      }),
      invalidatesTags: ["Wallet"],
    }),
    allWallet: builder.query({
      query: () => ({
        url: "/wallet",
        method: "GET",
      }),
      providesTags: ["Wallet"],
    }),
    
     Transactions: builder.query({
      query: ({ page = 1, limit = 10, type, startDate, endDate }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (type) params.append("type", type);
        if (startDate) params.append("startDate", startDate);
        if (endDate) params.append("endDate", endDate);

        return {
          url: `/transactions/me?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["transactions"],
    }),

    withdraw: builder.mutation({
      query: (info) => ({
        url: "/withdraw",
        method: "POST",
        data: info,
      }),
      invalidatesTags: ["Wallet"],
    }),
    send: builder.mutation({
      query: (info) => ({
        url: "/send",
        method: "POST",
        data: info,
      }),
      invalidatesTags: ["Wallet"],
    }),
    updateProfile: builder.mutation({
      query: (profile) => ({
        url: "/profile",
        method: "PATCH",
        data: profile,
      }),
      invalidatesTags: ["UserInfo"], 
    }),
  }),
});
export const {
  useAddMoneyMutation,
  useTransactionsQuery,
  useSendMutation,
  useAllWalletQuery,
  useWithdrawMutation,
  useUpdateProfileMutation
} = userApi;
