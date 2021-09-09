import React from 'react'

const Form = () => {
    return (
        <form class="form-inline my-3">
                <input style={{width:'80%'}} className="form-control mr-sm-2" type="search" placeholder="Search for......" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

export default Form
