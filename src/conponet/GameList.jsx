import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
export default function GameList(props) {
  return (
    <div>
      <div class="card mb-3" style={{width: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.gameImage} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.gameName}</h5>
       
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
