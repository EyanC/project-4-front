import { useState } from 'react'

const Add = (props) => {

  let createPet = {
    name: '',
    breed: '',
    gender: '',
    color: '',
    size: '',
    age: '',
    description: '',
    image_url: ''
  }

  const [pet, setPet] = useState(createPet);
  const [showAlert, setShowAlert] = useState(false);
  const [iconColor, setIconColor] = useState('black');

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, onClose) => {
    e.preventDefault()
    props.handleCreate(pet)
    setShowAlert(false);
  }

  const toggleCreateAlert = (event) => {
    setShowAlert(!showAlert);
  }

  // Set Icon to Color Black
  const setIconBlack = (event) => {
    setIconColor('black');
  }

  // Set Icon to Color Gray
  const setIconGray = (event) => {
    setIconColor('gray');
  }


  return (
    <>
      <svg className='add-button' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={setIconGray} onMouseLeave={setIconBlack} onClick={toggleCreateAlert}>
        <path d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z" fill={iconColor} />
        <path fillRule="nonzero" clipRule="evenodd" d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z" fill={iconColor} />
      </svg>
      {showAlert ?
        <div className='overlay'>
          <div className='add-form-container'>
            <div className='add-form-header'>
              <h3>Create Dog</h3>
              <button onClick={toggleCreateAlert} className='close-add-button'>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <form className='add-form' onSubmit={handleSubmit} >
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" placeholder='what is your dogs name' onChange={handleChange} />

              <br />
              <br />
              <label htmlFor="breed">Breed: </label>
              <input type="text" name="breed" placeholder='what breed is your dog' onChange={handleChange} />

              <br />
              <br />
              <label htmlFor="gender">Gender: </label>
              <input type="text" name="gender" placeholder='add gender' onChange={handleChange} />

              <br />
              <br />
              <label htmlFor="color">Color: </label>
              <input type="text" name="color" placeholder='what color is your dog' onChange={handleChange} />

              <br />
              <br />
              <label htmlFor="size">Size: </label>
              <input type="text" name="size" placeholder='what size is your dog' onChange={handleChange} />

              <br />
              <br />
              <label htmlFor="age">Age: </label>
              <input type="number" name="age" placeholder='how old is your pet' onChange={handleChange} />

              <br />
              <br />
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" placeholder='please describre your doggo' onChange={handleChange} />

              <br />
              <br />
              <label htmlFor="image_url">Image: </label>
              <input type="text" name="image_url" placeholder='we want pictures' onChange={handleChange} />
              <br />
              <br />
              <input type="submit" />
            </form>
          </div>
        </div>
        :
        null}


    </>
  )
}

export default Add