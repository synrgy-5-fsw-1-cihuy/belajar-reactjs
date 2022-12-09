import axios from "axios";
import { useEffect, useState } from "react";

const USER_ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/users';
const POST_ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/posts';

const User = () => {
    const [users, setUsers] = useState([]);

    async function getAllUsers() {
        const users = await axios.get(USER_ENDPOINT_URL);
        console.log("Users :", users.data);

        setUsers(users.data);
    };

    async function createNewPost() {
        const payload = {
            title: 'Joo',
            body: 'Ganteng',
            userId: 1,
        };

        const createdPost = await axios.post(POST_ENDPOINT_URL, payload);

        console.log(createdPost.data);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <button className="btn btn-primary" onClick={() => createNewPost()}>Add Posts</button>
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
