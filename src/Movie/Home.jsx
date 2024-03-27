import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Cards from './Cards';


const Home = () => {
    const[data,setData]=useState([])
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=53547bb6b7d372fb839c099e472cdd6b&language=en-US%27`)
        .then(res=>res.json())
        .then(d=>{
            setData(d.results)
            setLoading(false);
            console.log(d.results);
        
        })
    },[])

    function handleSearch() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=53547bb6b7d372fb839c099e472cdd6b&language=en-US`)
            .then(res => res.json())
            .then(d => setSearch(d.results))
            .catch(error => console.error('Error searching movies:', error));
    }
    console.log(data)
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
    <Carousel>
                {data.map((i) => (
                        <div key={i.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${i.poster_path}`} alt={i.title} />
                            <p className="legend">
                                <h1>{i.title}</h1>
                                <p>{i.overview}</p>
                                <h3>{i.release_date}</h3>
                            </p>
                        </div>
                    ))}
            </Carousel>

   <section className='Carddiv'>
       <Cards data={data}></Cards>
   </section>
            {/* <Cards/> */}
    </div>
  )
}

export default Home