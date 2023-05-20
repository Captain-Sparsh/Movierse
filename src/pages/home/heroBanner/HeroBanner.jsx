import React, { useState,useEffect } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {

    const [background,setBackground] = useState("");
    const [query,setQuery] = useState("");

    const {data,loading} = useFetch("/movie/popular");

    const navigate = useNavigate();

    useEffect(()=>{
        const bg = data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        setBackground(bg);
    },[data]);

    
    const searchQuery = (event)=>{
        if(event.key ==="Enter" && query.length>0){
            navigate(`/search/${query}`);
        }
    }
    
  return (
    <div className='heroBanner'>
      <div className="wrapper">
        <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subtitle">
                So many movies and shows to watch and so less time..
                Explore Now
            </span>
            <div className="input">
                <input
                 type='text' 
                 placeholder='Search for a movie..'
                 onChange={(e)=>setQuery(e.target.value)}
                 onKeyUp={searchQuery}
                 />
                <button>Search</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner
