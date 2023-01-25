import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { Link, useParams } from "react-router-dom";

// importing bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import Media from "react-bootstrap/Media";

const Movie = (props) => {
    let params = useParams();

    const [movie, setMovie] = useState({
        id: null,
        title: "",
        rated: "",
        reviews: [],
    });

    const getMovie = (id) => {
        MovieDataService.get(id)
            .then((response) => {
                console.log(response.data);
                setMovie(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getMovie(params.id);
        console.log(params.id);
    }, [params.id]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src={movie.poster + "/100px250"} fluid />
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header as="h5">{movie.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>{movie.plot}</Card.Text>
                                {props.user && (
                                    <Link
                                        to={
                                            "/movies/" +
                                            props.match.params.id +
                                            "/review"
                                        }
                                    >
                                        Add Review
                                    </Link>
                                )}
                            </Card.Body>
                        </Card>
                        <br></br>
                        <h2>Reviews</h2>
                        <br></br>
                        {movie.reviews.map((review, index) => {
                            return (
                                <Card key={index}>
                                    <Card.Body>
                                        <h5>
                                            {review.name +
                                                "reviwed on" +
                                                review.date}
                                        </h5>
                                        <p>{review.review}</p>
                                        {props.user &&
                                            props.user.id ===
                                                review.user.id && (
                                                <Row>
                                                    <Col>
                                                        <Link
                                                            to={{
                                                                pathname:
                                                                    "/movies/" +
                                                                    params.id +
                                                                    "/review",
                                                                state: {
                                                                    currentReview:
                                                                        review,
                                                                },
                                                            }}
                                                        >Edit</Link>
                                                    </Col>
                                                    <Button variant="link">Delete</Button>
                                                </Row>
                                            )}
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Movie;
