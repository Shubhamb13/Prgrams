import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'


const Meals = () => {
    const location = useLocation();
    const data = location.state.item;
    // const navigate = useNavigate();

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
            .then(res => res.json())
            .then(d => setDatas(d.meals));
    }, [data.idMeal]);

    return (
        <div>
            <section className='spcsec' style={{ display: 'flex' }}>
                <div className='right'>
                    <img src={data.strMealThumb} width={'50%'} alt="" />
                </div>
                <div className='left'>
                    <h1>{data.strMeal}</h1>
                </div>
            </section>
            {datas.map(item => (
                <aside key={item.idMeal}>
                    <p>{item.strCategory}</p>
                    <p>{item.strInstructions}</p> <br />
                    <p><b><h3>Ingrediants:</h3></b></p>
                    <ol>
                        <li>-{item.strIngredient1}</li>
                        <li>-{item.strIngredient2}</li>
                        <li>-{item.strIngredient3}</li>
                        <li>-{item.strIngredient4}</li>
                    </ol>
                    <p>{item.strIngredip}</p>
                    <ReactPlayer url={item.strYoutube} height={'600px'} width={'100%'}/>
                </aside>
            ))}
        </div>
    );
};

export default Meals;
