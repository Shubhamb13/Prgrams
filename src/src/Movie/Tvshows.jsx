import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Tvshows = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/tv?&api_key=53547bb6b7d372fb839c099e472cdd6b&language=en-US')
            .then(res => res.json())
            .then(d => {
                setData(d.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching trending movies:', error);
                setLoading(false);
            });
    }, []);

    function handleSearch() {
        fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=53547bb6b7d372fb839c099e472cdd6b&language=en-US`)
            .then(res => res.json())
            .then(d => setData(d.results))
            .catch(error => console.error('Error searching movies:', error));
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/tvshows">TVSHOWS</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>Link</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

{
                <Carousel>
                    {data.map((i) => (
                        <div key={i.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${i.poster_path}`} alt={i.title}  />
                            <p className="legend">
                                <h1>{i.title}</h1>
                                <p>{i.overview}</p>
                                <h3>{i.release_date}</h3>
                            </p>
                        </div>
                    ))}
                </Carousel>
            }
        </div>
    );
};

export default Tvshows;
