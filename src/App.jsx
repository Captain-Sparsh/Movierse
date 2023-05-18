import { useEffect } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

import { getApiConfiguration } from './store/homeSlice';

import { fetchDataFromApi } from './utils/api';

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
    <>
      <div>HELLO</div>
      <h1>{url?.total_pages}</h1>
    </>
  )
}

export default App
