import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   agentTransactions: builder.query({
  query: ({ id, page = 1, limit = 10, search = "", status = "", type = "" }) => ({
    url: `/commission/${id}?page=${page}&limit=${limit}&search=${search}&status=${status}&type=${type}`,
    method: "GET",
  }),
  providesTags: ["agentTransaction"],
}),


    cashIn: builder.mutation({
      query: (cashInfo) => ({
        url: "/cash-in",
        method: "POST",
        data: cashInfo,
      }),
      invalidatesTags: ["agentTransaction"],
    }),
    cashOut: builder.mutation({
      query: (cashOutInfo) => ({
        url: "/cash-out",
        method: "POST",
        data: cashOutInfo,
      }),
      invalidatesTags: ["agentTransaction"],
    }),
  }),
});

export const { useCashInMutation,
     useCashOutMutation,
     useAgentTransactionsQuery
    } = adminApi;
