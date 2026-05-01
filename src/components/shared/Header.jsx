import React from 'react';
import logo from '@/asset/logo.png'
import Image from 'next/image';
import { format } from "date-fns";
const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image src={logo} width={300} height={200} alt='Logo' className='mx-auto' />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE,MMMM dd,yyyy")} </p>

        </div>
    );
};

export default Header;