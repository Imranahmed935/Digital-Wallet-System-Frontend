import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["allUsers"],
    }),

    updateUserStatus: builder.mutation({
      query: ({ id }) => ({
        url: `/block/${id}`,
        method: "POST",
        body: { userId: id },
      }),
      invalidatesTags: ["allUsers"],
    }),
  }),
});

export const { useAllUsersQuery, useUpdateUserStatusMutation } = adminApi;
