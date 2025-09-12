import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMoney: builder.mutation({
      query: (Info) => ({
        url: "/add",
        method:"POST",
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
  }),
});
export const { useAddMoneyMutation, useAllWalletQuery } = userApi;
