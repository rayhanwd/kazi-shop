import React from 'react'
import Form from './Form'
import IconGroup from './IconGroup';
import Logo from './Logo';
const SearchTop = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Logo />
                </div>
                <div className="col-md-7">
                    <Form />
                </div>
                <div className="col-md-2">
                    <IconGroup />
                </div>
            </div>
        </div>
    )
}

export default SearchTop
