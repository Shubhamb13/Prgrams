import { useState, useEffect } from 'react';
import './Task.scss'; // Import your SCSS file

const Task = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data.results)) {
          setPlanets((prevPlanets) => [...prevPlanets, ...data.results]);
          setNextPage(data.next);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData('https://swapi.dev/api/planets/?format=json');
  }, []);

  const fetchResidents = async (residentUrls) => {
    const residents = await Promise.all(
      residentUrls.map(async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      })
    );
    return residents;
  };

  const handleShowResidents = async (residentUrls) => {
    const residents = await fetchResidents(residentUrls);
    alert(`Residents: ${residents.map((resident) => resident.name).join(', ')}`);
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchMorePlanets(nextPage);
    }
  };

  const fetchMorePlanets = (url) => {
    fetchData(url);
  };

  return (
    <div className="task-container">
      {planets.map((planet) => (
        <div key={planet.name} className="card">
          <p><b>Name:</b> {planet.name}</p>
          <p><b>Climate:</b> {planet.climate}</p>
          <p><b>Population:</b> {planet.population}</p>
          <p><b>Terrain:</b> {planet.terrain}</p>
          <button onClick={() => handleShowResidents(planet.residents)}>Show Residents</button>
        </div>
      ))}
      {nextPage && (
        <div className="pagination">
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      )}
    </div>
  );
};

export default Task;
