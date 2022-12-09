import axios from "axios";
import { useEffect, useState } from "react";

const USER_ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/users';

const User = () => {
    const [users, setUsers] = useState([]);

    async function getAllUsers() {
        const users = await axios.get(USER_ENDPOINT_URL);
        console.log("Users :", users.data);

        setUsers(users.data);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((value, index) => {
                    return (
                        <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.phone}</td>
                            </tr>
                        </>
                    )
                })}
                </tbody>
            </table>
            
        </div>
    );
};

export default User;
