import React from 'react';
import { Link } from "react-router-dom";
import { LinkItem1, LinkItem2 } from '../../../utils/local-data/NavItem';
import { FaBars } from 'react-icons/fa';

const NavMenu = () => {

    return (
        <nav>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center px-4">
                    <div className="lg:w-1/5">
                        <div className="rounded-t-lg cursor-pointer py-3 bg-gray-100 px-5 text-lg font-medium flex items-center">
                            Category <span className="ml-auto"><FaBars/></span>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="flex items-center">
                            <div className="hidden md:block mx-auto">
                                <div className="flex space-x-4">

                                    {LinkItem1.map(link =>
                                        <Link className="text-gray-800  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to={link.path}>
                                            {link.name}
                                        </Link>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 ml-auto">
                        <div className=" flex items-center">
                            <div className="hidden md:block">
                                <div className="flex space-x-2">

                                    {LinkItem2.map(link =>
                                        <Link className="text-gray-800  hover:text-gray-500 dark:hover:text-white pl-6 py-2 rounded-md text-md font-medium" to={link.path}>
                                            {link.name}
                                        </Link>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu;






