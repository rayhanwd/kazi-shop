import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { AiOutlineBell } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const IconGroup = () => {
    return (
        <div className="flex items-center">
            <div className="ml-auto flex items-center space-x-4">
                <div className="flex items-center shadow-md px-2 h-8 w-8 rounded-full border-gray-200 border"><RiServiceLine /></div>
                <Link to="/cart/your_cart" className="flex items-center shadow-md px-2 h-8 w-8 rounded-full border-gray-200 border"><IoBagHandleOutline /></Link>
                <div className="flex items-center shadow-md px-2 h-8 w-8 rounded-full border-gray-200 border"><FiUser /></div>
                <div className="flex items-center shadow-md px-2 h-8 w-8 rounded-full border-gray-200 border"><AiOutlineBell /></div>
            </div>
        </div>
    )
}
export default IconGroup;
