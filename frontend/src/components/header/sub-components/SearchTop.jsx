import React from 'react'
import Form from './Form'
import IconGroup from './IconGroup';
import Logo from './Logo';
const SearchTop = () => {
  return (
    <div className="container mx-auto">
      <div className="flex bg-white flex-wrap items-center justify-between p-4">
        <div className="lg:w-1/5">
          <Logo />
        </div>
        <div className="lg:w-1/2">
          <Form />
        </div>
        <div className="lg:w-1/5">
          <IconGroup />
        </div>
      </div>
    </div>
  )
}

export default SearchTop
