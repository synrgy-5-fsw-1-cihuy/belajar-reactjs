import axios from "axios";
import { useEffect, useState } from "react";

const POST_ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/posts';
const CAR_ENDPOINT_URL = 'http://localhost:8001/api/cars';

const User = () => {
    const [cars, setCars] = useState([]);
    const [file, setFile] = useState('');

    async function getAllCars() {
        const cars = await axios.get(CAR_ENDPOINT_URL, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
            }
        });

        console.log("Cars :", cars.data.data);

        setCars(cars.data.data);
    };

    async function createNewPost() {
        const payload = {
            title: 'Joo',
            body: 'Ganteng',
            userId: 1,
        };

        const createdPost = await axios.post(POST_ENDPOINT_URL, payload);

        console.log(createdPost.data);
    };

    async function createNewCarWithFile() {
        const formData = new FormData();
        formData.append('name', 'Avanza');
        formData.append('size', 'medium');
        formData.append('price', '100000');
        formData.append('foto', file);

        const carCreated = await axios.post(CAR_ENDPOINT_URL, formData);

        console.log(carCreated.data);
    };

    const onChangeUploadedFiles = (event) => {
        const file = event.target.files[0];
        setFile(file);
    } 

    useEffect(() => {
        getAllCars();
    }, []);

    return (
        <div>
            <button className="btn btn-primary" onClick={() => createNewPost()}>Add Posts</button>
            <input type="file" name="file" onChange={(event) => onChangeUploadedFiles(event)} />
            <button className="btn btn-primary" onClick={() => createNewCarWithFile()}>Add Posts</button>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                {cars.map((value, index) => {
                    return (
                        <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.price}</td>
                                <td>{value.size}</td>
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
