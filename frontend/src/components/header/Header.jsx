import React, { Fragment } from 'react'
import NavMenu from './sub-components/NavMenu'
import SearchTop from './sub-components/SearchTop'
import TopHeader from './sub-components/TopHeader'

const Header = () => {
    return (
        <Fragment>
           <TopHeader/>
            <SearchTop/>
           <NavMenu/>
        </Fragment>
    )
}

export default Header
