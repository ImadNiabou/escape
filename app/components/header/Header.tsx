import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo-1.svg'
import { SearchBar } from './SearchBar'
import Navbar from './Navbar'


const Header = ({placeholder}:{ placeholder?: string }) => {
  return (
    <header className='sticky p-5 top-0 z-50 bg-white shadow-md'>
        <div className='container relative grid grid-cols-3 items-center mx-auto'>
        <Link href="/" className='
        relative flex items-center h-10 my-auto'>
            <Image src={Logo} alt='logo' width={200} height={100}
            objectFit='contain'
            className='w-auto h-auto'
            />
        </Link>
        <SearchBar placeholder={placeholder}/>
        <Navbar/>
        </div>
    </header>
  )
}

export default Header