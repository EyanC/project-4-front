/////////////
// IMPORTS //
/////////////

import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';




import Edit from './Edit'
import '../App.css'


///////////////////
// POST FUNCTION //
///////////////////

const Pet = (props) => {
   
 

    



    //Function for Dropdown Menu on Post
    const dropdownFunction = () => {
        document.getElementById(`dropdown${props.pet.id}`).classList.toggle('show');
    }
    //Closes Dropdown Menu when user clicks outside of menu
    window.onclick = function (event) {
        if (!event.target.matches('.clickable-svg')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



    

    // Return HTML Elements
    return (
        <div className='post-container'>
            <div className='post-header'>

                <Edit pet={props.pet} handleUpdate={props.handleUpdate} handleDelete={props.handleDelete}/>

            </div>
            <img className='post-image' src={props.pet.image_url}/>
            <div className='post-info-container'>
                <h3 className='post-name'>{props.pet.name}</h3>
                <h5>Breed: {props.pet.breed}</h5>
                <h5>Age: {props.pet.age}</h5>
                <h5>Gender: {props.pet.gender}</h5>
                <h5>Color: {props.pet.color}</h5>
                <h5>Size: {props.pet.size}</h5>
                <h5 className='description-title'>Description</h5>
                <p className='description-list'>{props.pet.description}</p>
            </div>
            <div className='divider-line'></div>
            <div className='tags-container'>
            </div>
        </div>
    )
}

export default Pet;