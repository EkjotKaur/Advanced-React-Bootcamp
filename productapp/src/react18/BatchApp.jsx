import { useEffect, useState } from "react";

export default function BatchApp() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0);

    function getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => {
            res.json().then(data => {
                setLoading(false); // state update
                setUsers(data); // state update
                setTotal(data.length); // state update
            })
        })
    }
    // componentDidMount
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <div onClick={getUsers}>Refresh</div>
            {
                console.log(`Rendering with values Loading: ${loading} 
                and users : ${users.length > 0? "loaded": "fetching"}
                and total : ${total}`)
            }
            {loading ? <div>Loading...</div> : <UserList users={users} />}
            <div>
                total users: {total}
            </div>
        </div>
    )
}

function UserList({users}) {
    return (
        <table>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}