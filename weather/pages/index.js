import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState } from 'react'


export  default function Home() {

  const [state, setstate] = useState({}) ;
  // const   res = await fetch("") ;
  const call= ()=> {
    console.log("startaaaaaaaaaa");
    const headers = {
      "Content-Type": "application/json",
     
    };
    const url ="http://api.openweathermap.org/data/2.5/weather?q=sousse&appid=779c8cc6cd5824790efd65eeda1aaa17"
    axios.get(url, { headers }).then(response => {
      console.log(response.data);
      console.log(typeof(JSON.stringify(response.data)));

      setstate(JSON.parse(response.data)) ;
    });
    console.log("finshhhhhhhhhhh");

  }
 
  return (
    <div> 
      heloooo   
      <button onClick={call}> butonn</button>
      <p>{state}</p>
    </div>
  )
}
