import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';
const get_pet_data = async () =>  {
  const {data} = await axios.get('/api/pets');
  return data;
}
const Root = () => {
  const data = get_pet_data();

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={data} />
    </>
  )
}

export default Root;
