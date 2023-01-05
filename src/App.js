import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import Dog from './components/Dog';
import Navbar from './components/Navbar';
import { ColorRing } from 'react-loader-spinner';


const App = () => {

  let [dog, setDog] = useState([])
  const [isFetchingDog, setIsFetchingDog] = useState(false);
  const [filteredDog, setFilteredDog] = useState([])
  const [isSearching, setIsSearching] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  const getDog = () => {
    setIsFetchingDog(true);
    axios
    .get('https://morning-harbor-71338.herokuapp.com/api/dog')
      .then(
        (response) => {
          setDog(response.data)
          setIsFetchingDog(false);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.error(error)
        setIsFetchingDog(false);
      })
  };

  const handleCreate = (addPet) => {
    axios
      .post('https://morning-harbor-71338.herokuapp.com/api/dog', addPet)
      .then((response) => {
        console.log(response)
        getDog()
      })
  }

  const handleDelete = (event) => {
    axios
      .delete('https://morning-harbor-71338.herokuapp.com/api/dog/' + event.target.value)
      .then((response) => {
        getDog()
      })
  }
  
  const handleUpdate = (editDog) => {
    console.log(editDog)
    axios
      .put('https://morning-harbor-71338.herokuapp.com/api/dog/' + editDog.id, editDog)
      .then((response) => {
        getDog()
      })
  }
  
  const onSearchChange = (searchInput) => {
    const searchInputLower = searchInput.toLowerCase()
    if (searchInput.length > 0) {
      setIsSearching(true)
      const result = dog.filter((pet) => {
        return pet.name.toLowerCase().match(searchInputLower) || 
        pet.breed.toLowerCase().match(searchInputLower) || 
        pet.size.toLowerCase().match(searchInputLower) || 
        pet.gender.toLowerCase().match(searchInputLower) || 
        pet.description.toLowerCase().match(searchInputLower) || 
        pet.color.toLowerCase().match(searchInputLower)
      })
      setFilteredDog(result);
    } else {
      setIsSearching(false)
    }
  }

  const NoSearchResults = () => {
    return (
      <><p className="noResults">No Pets to Display</p></>
    )
  }

  const dogToDisplay = isSearching ? filteredDog : dog




  useEffect(() => {
    getDog()
  }, [])



  return (
    <>
  
  <Navbar handleCreate={handleCreate} onSearchChange={onSearchChange} currentUser={currentUser} setCurrentUser={setCurrentUser}  />
    <div className=' m-2 bg-light d-flex text-center container-fluid w-25 '>
    {/* <Add handleCreate={handleCreate} /> */}
    </div>
      <div className=" dog container-fluid w-100 row ">
        {dog.map((pet) => {
          return (
       
        })}
      </div>

      


    </>
  )
}

export default App

