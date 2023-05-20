import { useEffect } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { getApiConfiguration } from './store/homeSlice';

import { fetchDataFromApi } from './utils/api';

import Home from './pages/home/Home';
import SearchDetails from './pages/searchDetails/Searchdetails';
import Explore from './pages/explore/Explore';
import Details from './pages/details/Details';
import Error404 from './pages/404/Error404';

import Header from './components/Header/Header';
import footer from './components/Footer/Footer';
import Footer from './components/Footer/Footer';

function App() {
  
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
    state.home
  );

  useEffect(()=>{
    apitesting();
  },[]);

  const apitesting = ()=>{
    fetchDataFromApi("/movie/popular").then((res)=>{
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/:mediatype/:id" element = {<Details/>}/>
        <Route path = "/search/:query" element = {<SearchDetails/>}/>
        <Route path = "/explore/:mediaType" element = {<Explore/>}/>
        <Route path = "*" element = {<Error404/>}/>
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
