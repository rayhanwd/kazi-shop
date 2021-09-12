import React from 'react';
import { RiSmartphoneLine, RiCustomerService2Line, RiMailOpenLine } from 'react-icons/ri';
const TopHeader = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div className="flex p-4 pt-2">
                    <div className="sm:w-1/1 md:w-1/2 lg:w-1/2 flex items-center">
                        <div className="flex items-center"><RiMailOpenLine /> <span className="ml-3 text-md font-medium">support.kazishop.bd.com</span></div>
                        <div className="flex items-center ml-5"><RiSmartphoneLine /><span className="ml-3 text-md font-medium">+(880)19275346</span></div>
                    </div>
                    <div className="sm:w-1/1 md:w-1/2 lg:w-1/1 flex items-center">
                        <div className="flex items-center ml-auto"><RiCustomerService2Line /><span className="ml-3 text-md font-medium">Customer service</span></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopHeader


