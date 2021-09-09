import React from 'react'

const Form = () => {
    return (
        <form className="form-inline my-3 flex">
            <div className="relative">
                <input style={{width:'540px'}} type="text" id="simple-email" className="lg:w-7xl flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" placeholder="Your email" />
            </div>
            <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none">
                Search
            </button>
        </form>
    )
}

export default Form
