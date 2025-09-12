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
    withdraw:builder.mutation({
        query:(info)=>({
            url:"/withdraw",
            method:"POST",
            data:info
        }),
        invalidatesTags: ["Wallet"],
    })
  }),
  
});
export const { useAddMoneyMutation, useAllWalletQuery, useWithdrawMutation } = userApi;
