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
    allAgents: builder.query({
      query: () => ({
        url: "/agents",
        method: "GET",
      }),
      providesTags: ["allAgents"],
    }),

    updateUserStatus: builder.mutation({
      query: ({ id }) => ({
        url: `/block/${id}`,
        method: "POST",
        body: { userId: id },
      }),
      invalidatesTags: ["allUsers"],
    }),
    agentStatus: builder.mutation({
      query: ({ id }) => ({
        url: `/agent/status/${id}`,
        method: "POST",
        body: { agentId:id},
      }),
      invalidatesTags: ["allAgents"],
    }),
  }),
});

export const { useAllUsersQuery, useAllAgentsQuery,useAgentStatusMutation, useUpdateUserStatusMutation } = adminApi;
