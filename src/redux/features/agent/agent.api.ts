import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // allUsers: builder.query({
    //   query: () => ({
    //     url: "/users",
    //     method: "GET",
    //   }),
    //   providesTags: ["allUsers"],
    // }),

    cashIn: builder.mutation({
      query: (cashInfo) => ({
        url:"/cash-in",
        method: "POST",
        data:cashInfo
      }),
      invalidatesTags: ["cashIn"],
    }),
    cashOut: builder.mutation({
      query: (cashOutInfo) => ({
        url:"/cash-out",
        method: "POST",
        data:cashOutInfo
      }),
      invalidatesTags: ["cashOut"],
    }),
  }),
});

export const {
useCashInMutation,
useCashOutMutation
} = adminApi;
