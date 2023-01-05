import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Login = (props) => {
    const [toggleLogin, setToggleLogin] = useState(true)
    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [toggleLogout, setToggleLogout] = useState(false)
    
    // const [currentUser, setCurrentUser] = useState({})
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleCreateUser = (event) => {
        event.preventDefault()
        event.currentTarget.reset()
        let userObj = {
            email,
            password,
        }
        setEmail('')
        setPassword('')
        axios.post('https://morning-harbor-71338.herokuapp.com/api/useraccount', userObj).then((response) => {
            if(response.data.email){
                console.log(response);
                setToggleError(false)
                setErrorMessage('')
                props.setCurrentUser(response.data)
                handleToggleLogout()
                props.toggleShowLogin()

            } else {
                setErrorMessage(response.data)
                setToggleError(true)
            }
        })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        event.currentTarget.reset()
        let userObj = {
            email: email,
            password: password
        }
        setEmail('')
        setPassword('')
        axios.put(`https://morning-harbor-71338.herokuapp.com/api/useraccount/login`, userObj).then((response) => {
            if(response.data){
                console.log(response);
                setToggleError(false)
                setErrorMessage('')
                props.setCurrentUser(response.data)
                handleToggleLogout()
                props.toggleShowLogin()
                
            } else {
                console.log(response);
                setToggleError(true)
                setErrorMessage(response.data)
            }
        })
    }
    
    const handleLogout = () => {
        props.setCurrentUser({})
        handleToggleLogout()
    }
    
    const handleToggleForm = () => {
        setToggleError(false)
        if(toggleLogin === true) {
            setToggleLogin(false)
        } else {
            setToggleLogin(true)
        }
    }
    
    const handleToggleLogout = () => {
        if(toggleLogout) {
            setToggleLogout(false)
        } else {
            setToggleLogout(true)
        }
    }



    return (
        
        <div className='overlay'>
            <div className="add-form-container">
                <div className="add-form-header">
                    <h3>Already Registered? Login Here:</h3>
                    
                </div>
                    <form onSubmit={handleLogin} className='add-form'>
                        <label htmlFor="em">Email: </label>
                        <input type='text' placeholder='Email' name='em' className='add-input' onChange={(event)=> {setEmail(event.target.value)}}/>
                        <label htmlFor="pass">Password: </label>
                        <input type='password' name='pass' placeholder='Password' className='add-input' onChange={(event)=> {setPassword(event.target.value)}}/>
                        {toggleError ?
                        <h5 className='errorMsg'>{errorMessage}</h5>
                        :
                        null
                        }
                        {/* <Link to = {'/show'}>
                            <input type='submit' value='Login'  className='submitBtn btn btn-outline-primary add-submit-button'/>
                        </Link> */}

                        <a href='/show' value='Login'  className='submitBtn btn btn-outline-primary add-submit-button'>Login</a>
                        
                    </form>
                    {/* New User Registers here */}
                    <h3>New User? Register Here:</h3>
                        <form onSubmit={handleCreateUser} className='add-form'>
                        <label htmlFor="new-em">Email: </label>
                        <input name='new-em' type='text' placeholder='Email' className='add-input' onChange={(event)=> {setEmail(event.target.value)}}/>
                        <label htmlFor="new-pass">Password: </label>
                        <input name='new-pass' type='password' placeholder='Password' className='add-input' onChange={(event)=> {setPassword(event.target.value)}}/>
                        {toggleError ?
                            <h5 className='errorMsg'>{errorMessage}</h5>
                            :
                            null
                        }
                        
                        <a href='/show' value='Register'  className='submitBtn btn btn-outline-primary add-submit-button'>Register</a>
                    </form>
                
            

                </div>
        </div>
        
        
        )
    }
    
export default Login