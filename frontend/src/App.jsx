import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App(props) {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
        setUser(user);
    }

    async function logout() {
        setUser(null);
    }

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Movie Reviews</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to={"/movies"}>Movies</Link>
                        </Nav.Link>
                        <Nav.Link>
                            {user ? (
                                <a onClick={logout}>Logout User</a>
                            ) : (
                                <Link to={"/login"}>Login</Link>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route
                    exact
                    path={"/"}
                    element={<MoviesList></MoviesList>}
                ></Route>
                <Route
                    exact
                    path={"/movies"}
                    element={<MoviesList></MoviesList>}
                ></Route>

                <Route
                    path="/movies/:id/review"
                    render={(props) => (
                        <AddReview {...props} user={user}></AddReview>
                    )}
                ></Route>
                <Route
                    path="/movies/:id"
                    element={<Movie {...props} user={user} />}
                    loader={({ params }) => params}
                ></Route>
                <Route
                    path="/login"
                    element={<Login login={login} />}
                    loader={({ props }) => console.log(props)}
                ></Route>
            </Routes>
        </div>
    );
}
export default App;
