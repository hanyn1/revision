import React from 'react'
import DataVideo from '../DataBase/Video'
import 'bootstrap/dist/css/bootstrap.css';
import GameList from './GameList';
export default function Game() {
  return (
    <div >
        {
            DataVideo.map((gm)=>
            <div class="card" style={{width: '18rem'}} key={gm.id}>
  <img src={gm.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> {gm.name} </h5>
    <h5 class="card-title"> {gm.price} </h5>
  </div>
  <GameList gameName={gm.name} gameImage={gm.image}/>
  </div>)}
 </div>
  )
}
