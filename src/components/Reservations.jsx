

import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { format, parseISO } from 'date-fns'
import ReservationForm from "./ReservationForm";

const Reservations = () => {

  
    const [reservations, setReservations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const fetchReservations = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation')
            if (response.ok) {
                let data = await response.json()
                console.log(data)
               
                setReservations(data)
                setIsLoading(false)
                setIsError(false)
            } else {
               
                console.log('an error happened in the fetch!')
               
                setIsLoading(false)
                setIsError(true)
            }
        } catch (error) {
            
            console.log(error)
           
            setIsLoading(false)
            setIsError(true)
        }
    }

    const zee = () => {
        let array = ['Strive']
        return array
    }
    useEffect(() => {
        console.log('this is componentDidMount!')
     
        fetchReservations()
        console.log(zee())
    }, [])

  

    console.log('this is the render!')

    return (
        <Container>
            <Row className="my-4 justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <h3>RESERVATIONS</h3>
                    {
                        isError && (
                            <Alert variant="danger">
                                Aww snap, we got an error! :(
                            </Alert>
                        )
                    }
                    {
                        isLoading && <Spinner animation="border" variant="success" />
                    }
                    <ListGroup>
                       
                        {
                            reservations.length === 0 && !isLoading
                                ? <ListGroup.Item>NO RESERVATIONS SAVED!</ListGroup.Item>
                                : reservations.map(r => (
                                    <ListGroup.Item key={r._id}>{r.name}
                                        {' '} for {' ' + r.numberOfPeople + ' '}
                                      
                                        - {format(parseISO(r.dateTime), 'MMMM do yyyy | HH:mm')}</ListGroup.Item>
                                ))
                        }
                    </ListGroup>
                </Col>
            </Row>
            <Row className="my-4 justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <ReservationForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Reservations

