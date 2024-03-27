import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Specific = () => {
    const location = useLocation();
    const specificMovie = location.state.movie;
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        
        const apiKey = "53547bb6b7d372fb839c099e472cdd6b";
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${specificMovie.title} trailer&key=${apiKey}`)
            .then(res => res.json())
            .then(d => {
                if (d.items && d.items.length > 0) {
                    setTrailer(`https://www.youtube.com/watch?v=${d.items[0].id.videoId}`);
                }
            })
            .catch(error => console.error('Error fetching trailer:', error));
    }, [specificMovie.title]);

    return (
        <div className='Specific'>
            <h1>{specificMovie.title}</h1>
            <p>{specificMovie.overview}</p>
            {trailer && (
                <ReactPlayer
                    url={trailer}
                    width='100%'
                    height='100%'
                    controls={true}
                />
            )}
        </div>
    );
};

export default Specific;
