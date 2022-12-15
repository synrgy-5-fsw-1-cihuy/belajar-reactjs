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
    const [filterCarParams, setFilterCar] = useState({
        capacity: '',
        booking_date: '',
        booking_time: ''
    });

    useEffect(() => {
        getAllCars();
    }, []);

    const getAllCars = async () => {
        const cars = await axios.get(CARS_ENDPOINT_URL);
        setCars(cars.data.data);
    };

    const onFilterCarCapacityParam = async (event) => {
        setFilterCar((prevState) => ({
            ...prevState,
            capacity: event.target.value
        }));
    };

    const onFilterCarBookingDateParam = async(event) => {
        setFilterCar((prevState) => ({
            ...prevState,
            booking_date: event.target.value
        }));
    };

    const onFilterCarBookingTimeParam = async(event) => {
        setFilterCar((prevState) => ({
            ...prevState,
            booking_time: event.target.value
        }));
    };

    const onEventSubmitFilter = (event) => {
        const bookingDatesTime = filterCarParams.booking_date +'T'+ filterCarParams.booking_time + ':00Z';
        const bookingDateParsed = Date.parse(bookingDatesTime);

        onShowFilterCars(filterCarParams);

        event.preventDefault();
    };

    const onShowFilterCars = async (filter) => {
        if (filter.capacity != null) {
            const cars = await axios.get(CARS_ENDPOINT_URL + '?capacity=' + filter.capacity);
            setCars(cars.data.data);
        };
    };

    return (
        <div>
            <Container>
                <form onSubmit={(event) => onEventSubmitFilter(event)}>
                    <div>
                        <label>Filter by capacity</label>
                        <input type="number" onChange={(event) => onFilterCarCapacityParam(event)} />
                    </div>
                    <div>
                        <label>Filter by Date</label>
                        <input type="date" onChange={(event) => onFilterCarBookingDateParam(event)} />
                    </div>
                    <div>
                        <label>Filter by Time</label>
                        <select onChange={(event) => onFilterCarBookingTimeParam(event)}>
                            <option>Select waktu</option>
                            <option value="08:00">08.00</option>
                            <option value="09:00">09.00</option>
                            <option value="10:00">10.00</option>
                            <option value="11:00">11.00</option>
                            <option value="12:00">12.00</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                <Row>
                    { cars.map((car, index) => {
                        return <Col>
                        <Card key={index} style={{ width: '18rem' }}>
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
