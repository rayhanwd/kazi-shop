import React from 'react';

const BCard = () => {
    return (
        <div className="overflow-hidden w-1/2 md:w-1/3 lg:w-1/3 flex justify-center items-center">
            <div className="w-full p-4">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg ">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="https://flone.reactdemo.hasthemes.com/assets/img/blog/blog-1.jpg" className="max-h-40 w-full object-cover" />
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                New Mac is here !
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>


    )
}

export default BCard;
