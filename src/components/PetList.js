import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const all_pets = props.pets;
  const [pets, setPets] = React.useState(all_pets);
  const [view, setView] = React.useState("all");

  // For some reason, my program would cause an error when I tried 
  // {{e) => setView(e.target.value)}
  // It would say TypeError: e is not defined
  // Do you know why that would be?
  function handleChange (e) {
    const new_view = e.target.value
    setView(new_view);
    if (new_view === 'all') {
      setPets(all_pets);
    } else {
      const new_pet_list = []; 
      for(let i = 0; i < all_pets.length; ++i) {
        const pet = all_pets[i];
        if(pet.species === new_view) new_pet_list.push(pet);
      }
      setPets(new_pet_list);
    }

  };

  return (
    <>
      <div className="dropdown-list">

        <form>
          <label>Select Pet View: </label>
          <select
            value={view}
            onChange={handleChange}
          >
            <option value="all">all</option>
            <option value="cat">cats</option>
            <option value="dog">dogs</option>
          </select>
        </form>
      </div>
      <div className="pet-list">
          {pets.map((pet, idx) => <SinglePet pet={pet} key={idx}/> )}
      </div>
    </>
  )
}

export default PetList;
