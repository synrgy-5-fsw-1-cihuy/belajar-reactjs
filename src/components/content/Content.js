import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CARS_ENDPOINT_URL = 'http://localhost:8001/api/cars';

const Content = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars();
    }, []);

    const getAllCars = async () => {
        const cars = await axios.get(CARS_ENDPOINT_URL);
        setCars(cars.data.data);
    };

    const onFilterCars = async (event) => {
        const capacity = event.target.value;

        if (capacity === "") {
            getAllCars();
        } else {
            const filterCars = await axios.get(CARS_ENDPOINT_URL + '?capacity=' + capacity);
            setCars(filterCars.data.data);
        }
        
    };

    return (
        <div>
            <Container>
                <label>Filter by capacity</label>
                <input type="number" onChange={(event) => onFilterCars(event)} />
                <Row>
                    { cars.map((car) => {
                        return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={car.foto} />
                            <Card.Body>
                                <Card.Title>{car.name}</Card.Title>
                                <b>
                                    <p>Rp. {car.price}</p> / hari
                                </b>
                                <Card.Text>
                                    Capacity { car.capacity }
                                </Card.Text>

                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    })}
                    
                </Row>
            </Container>
        </div>
    );
};

export default Content;
