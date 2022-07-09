import React, {useState} from 'react';

const Form = (props) => {
    const [ firstName, setFirstName ] = useState(props.firstName);
    const [ lastName, setLastName ] = useState(props.lastName);
    const [ emailAddress, setEmailAddress ] = useState(props.emailAddress);
    const [ password, setPassword ] = useState(props.password);
    const [ confirmPassword, setConfirmPassword ] = useState(props.confirmPassword);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, emailAddress, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setPassword("");
        setConfirmPassword("");
    };

    return(
        <form onSubmit = { createUser }>
        <div id="first-name">
        <label> First Name: </label>
        <input type = "text" value = { firstName } onChange = { (e) => setFirstName ( e.target.value ) } />
        </div>
        <div id="last-name">
        <label> Last Name: </label>
        <input type = "text" value = { lastName } onChange = { (e) => setLastName ( e.target.value ) } />
        </div>
        <div id ="email-address">
        <label> Email Address: </label>
        <input type = "text" value = { emailAddress } onChange = { (e) => setEmailAddress ( e.target.value ) } />
        </div>
        <div id="password">
        <label> Password: </label>
        <input type = "text" value = { password } onChange = { (e) => setPassword ( e.target.value ) } />
        </div>
        <div id="confirm-password">
        <label> Confirm Password: </label>
        <input type = "text" value = { confirmPassword } onChange = { (e) => setConfirmPassword ( e.target.value ) } />
        </div>
        <div id="user-info">
        <p className="live-data">Your Form Data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email Address: {emailAddress}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </div>
        </form>
    );
};

export default Form;


