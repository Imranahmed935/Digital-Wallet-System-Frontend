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
    transaction: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/transactions/me?page=${page}&limit=${limit}`,
        method: "GET",
      }),
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
  useTransactionQuery,
  useSendMutation,
  useAllWalletQuery,
  useWithdrawMutation,
  useUpdateProfileMutation
} = userApi;
