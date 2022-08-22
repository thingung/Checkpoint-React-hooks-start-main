import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false)

  // for some reason my on mount isn't working. 'all' can only be seen
  // after selecting 'cats' or 'dogs'
  React.useEffect(()=> {
    fetch('/api/pets')
    .then(response => {
      if(response.status === 500) setError(true)
     return response.json()
     })
    .then(data => setData(data))
    .finally(setLoading(false))
  }, []);

  return (
    <>
      <h1>Adoption Center</h1>
      <p>{loading ? "Loading":"Finished Loading"}</p>
      <p>{error ? "Status code 500":"No error!"}</p>
      <PetList pets={data} />
    </>
  )
}

export default Root;
