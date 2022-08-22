import React from 'react';

function SinglePet(props) {

  const [available, setAvailable] = React.useState(true);
  return (
    <div className={`single-pet${available ? "":" adopted"}`}>
      <p>{props.pet.name}</p>
      <p>{props.pet.description}</p>
      <small>{props.pet.species}</small>
      <br/>
      <button onClick={()=>setAvailable(!available)}>Toggle Status</button>
      <p>{available ? "Available for adoption":"Adopted!"}</p>

    </div>
  );
}

export default SinglePet;
