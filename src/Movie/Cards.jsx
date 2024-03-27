import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cards = ({ data }) => {
  const navigate = useNavigate();
  
  return (
    <div className='Cards'>
      {
      data.map((movie) =>  {
            return (
                <Card style={{ width: '18rem' }} key={movie.id}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title>{movie.title || movie.name}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                  <Button variant="primary" onClick={() => navigate('/specific', { state: { movie } })}>Read More</Button>
                </Card.Body>
              </Card>
            )
        }
       
      )}
    </div>
  );
};

export default Cards;
