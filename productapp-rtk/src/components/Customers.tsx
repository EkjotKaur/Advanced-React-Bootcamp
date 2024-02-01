import React from 'react'
import { useAddCustomerMutation, useCustomersQuery } from '../redux/api/customerApi';

export default function Customers() {
    // isLoading --> first time
    // isFetching ==> every time fetch happens --> even from cache
    const { data, error, isLoading, isFetching, isSuccess } = useCustomersQuery();
    return (
        <div>
            {isLoading && <h1>loading...</h1>}
            {isFetching && <h1>fetching...</h1>}
            {error && <h1>Boom :-( </h1>}
            {isSuccess && (
                <div>
                    {data?.map(customer => <h4 key={customer.id}>{customer.firstName}</h4>)}
                </div>
            )}
            <AddCustomer />
        </div>
    )
}


const AddCustomer = () => {
    const [addCustomer] = useAddCustomerMutation();
    // const {refetch} = useCustomersQuery();
    const customer = {
        firstName: 'Peter'
    }

    const addHandler = async () => {
        await addCustomer(customer);
        // refetch(); // API call
    }

    return <button type='button' onClick={addHandler}>Add</button>
}