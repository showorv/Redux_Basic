import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),
    tagTypes: ["task"],
    endpoints: (build)=> ({
        getTasks: build.query({
            query: ()=> "/tasks",
            providesTags: ["task"]
        }) ,
        createTasks: build.mutation({
            query: (data)=>({
                url: "/tasks",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["task"]
        }) ,
    })
})

export const {useGetTasksQuery, useCreateTasksMutation} = baseApi