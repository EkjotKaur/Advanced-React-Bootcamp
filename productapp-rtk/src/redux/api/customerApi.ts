import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Customer } from '../../model/Customer'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234' }),
  tagTypes: ['Customers'],
  endpoints: (builder) => ({
    customers: builder.query<Customer[], void>({
        query: () => '/customers',
        providesTags: ['Customers']
    }),
    customer: builder.query<Customer, string>({
        query:(id) => `/customers/${id}`
    }),
    addCustomer: builder.mutation<void,Customer>({
        query: customer => ({
            url: '/customers',
            method: 'post',
            body: customer
        }),
        invalidatesTags: ['Customers']
    })
  }),
})

export const {useCustomersQuery, useCustomerQuery, useAddCustomerMutation} = customerApi;