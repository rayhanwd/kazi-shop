import React from 'react';
import { Link } from "react-router-dom";
import { LinkItem1, LinkItem2 } from '../../../utils/local-data/NavItem';

const NavMenu = () => {

    return (
        <nav>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center p-4">
                    <div className="lg:w-1/6">
                        <h4 className="text-gray-700 text-md font-medium">
                            Category
                        </h4>
                    </div>
                    <div className="lg:w-1/2">
                        <div className=" flex items-center">
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
                    <div className="lg:w-1/3">
                        <div className=" flex items-center">
                            <div className="ml-auto hidden md:block">
                                <div className="flex space-x-4">

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






