'use client'

import { NavbarProps } from '@/type'
import Image from 'next/image'
import { memo } from 'react'
import ActiveUsers from './users/ActiveUsers'
import Logo from '@/public/assets/draw-ui-logo.png'

const Navbar = ({ activeElement }: NavbarProps) => {
    return (
        <nav className='flex select-none items-center justify-between gap-4 bg-primary-black px-5'>
            <Image src={Logo} alt='draw-ui' width={50} height={50} />
            <ActiveUsers />
        </nav>
    )
}

export default memo(Navbar, (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement)