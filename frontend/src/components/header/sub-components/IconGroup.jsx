import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { AiOutlineBell } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';


const IconGroup = () => {
    return (
        <div className="flex items-center">
            <div className="ml-auto flex items-baseline space-x-4">
                <div className="px-2"><RiServiceLine /></div>
                <div className="px-2"><IoBagHandleOutline /></div>
                <div className="px-2"><FiUser /></div>
                <div className="pl-2"><AiOutlineBell /></div>
            </div>
        </div>
    )
}
export default IconGroup;
