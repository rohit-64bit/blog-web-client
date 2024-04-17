import React from 'react'
import { routes } from '../constants/Header'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@nextui-org/react'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-36 bg-black'>

            <div className='aspect-square w-12 bg-white rounded-full'>
            </div>

            <div className='flex gap-8 items-center'>

                {
                    routes.map((route, i) => {
                        return (
                            <NavLink key={i}
                                to={route.path}
                                className={({ isActive }) => (isActive ? 'text-white text-xl duration-300' : 'opacity-70 text-white text-xl duration-300')}>
                                {route.name}
                            </NavLink>
                        )
                    })
                }

                <Avatar className='ml-10' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

            </div>

        </header>
    )
}

export default Header