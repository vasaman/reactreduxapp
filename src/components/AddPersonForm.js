import React, { useState } from 'react';
import { connect } from 'react-redux';
import addPerson from '../actions';
function AddPersonForm(props) {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
    }
    function handleSubmit(e) {
        if (person !== "") {
            props.addPerson(person);
            setPerson('');
        }
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="add new contact"
                onChange={handleChange}
                value={person}
            >
            </input>
            <button type="submit">add</button>
        </form>
    );

}

const mapDispatchToProps = {
    addPerson
}

export default connect(null,mapDispatchToProps)(AddPersonForm)
