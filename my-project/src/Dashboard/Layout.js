import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div class='bg-[#f8fafc] h-[100vh]' >
            <nav class="bg-[#1976d2] border-r-[5px] border-gray-200 dark:bg-gray-800 dark:border-gray-700 border-b-[5px]">
                    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div class="relative flex h-16 items-center justify-between">

                        </div>
                    </div>
                </nav>

                <div className='flex,bg-[#f1f4f8]'>

                    <aside id="default-sidebar" class="fixed left-0 z-40 w-[15rem] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#f1f4f8]" aria-label="Sidenav">
                        <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r-[2px] border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-[#f1f4f8]">

                           
                        </div>

                    </aside>

                </div>

                


            </div>

        </>
    );
};

export default Layout;