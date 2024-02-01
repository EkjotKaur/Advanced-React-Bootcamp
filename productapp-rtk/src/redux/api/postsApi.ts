import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// pre-fetching example
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (build) => ({
        listPosts: build.query<any[], number | void>({
            query: (page = 0) => `/posts?_start=${page}&_limit=5`
        })
    })
})

export const {useListPostsQuery, usePrefetch} = postsApi