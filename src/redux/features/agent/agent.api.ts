import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    agentTransactions: builder.query({
      query: (id) => ({
        url: `/commission/${id}`,
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
      invalidatesTags: ["cashIn"],
    }),
    cashOut: builder.mutation({
      query: (cashOutInfo) => ({
        url: "/cash-out",
        method: "POST",
        data: cashOutInfo,
      }),
      invalidatesTags: ["cashOut"],
    }),
  }),
});

export const { useCashInMutation,
     useCashOutMutation,
     useAgentTransactionsQuery
    } = adminApi;
