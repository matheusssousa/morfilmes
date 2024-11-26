import './style.css';
import { NavLink } from 'react-router';
import { createElement, useState } from 'react';
import { CopySimple, FilmSlate, MagnifyingGlass, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function Nav() {
    const [search, setSearch] = useState(false);
    const [name, setName] = useState('');

    const menus = [
        { name: 'Filmes', link: '/movies', icon: FilmSlate },
        { name: 'Séries', link: '/series', icon: CopySimple },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <nav className={`${search ? 'search-bar' : 'header'} content-nav`}>
            {!search && <div className='header-menu'>
                {menus.map((menu, index) => (
                    <>
                        <NavLink key={index} to={menu.link} className={({ isActive, isPending }) => isPending ? '' : isActive ? 'active' : 'pending'}>
                            {({ isActive, isPending }) => (
                                <>
                                    <span>{createElement(menu.icon, { size: 23, weight: isActive ? 'fill' : 'regular' })}</span>
                                    <p>{menu.name}</p>
                                    <span className='bar' />
                                </>
                            )}
                        </NavLink>
                        {index === 0 &&
                            <button type="button" onClick={() => setSearch(true)} className='flex flex-col items-center justify-center duration-200 transition-all hover:text-gray-500'>
                                <MagnifyingGlass size={23} />
                                Pesquisar
                            </button>
                        }
                    </>
                ))}
            </div>}
            {search &&
                <motion.form
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className='w-full h-full'
                    onSubmit={handleSearch}
                >
                    <label htmlFor='name' className='search-bar-content'>
                        <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder='Pesquisar' className='input-search' />
                        <button type="button" onClick={() => setSearch(false)} className='btn-search-cancel'><X size={23} /></button>
                        <button type="submit" className='btn-search'><MagnifyingGlass size={23} /></button>
                    </label>
                </motion.form>
            }
        </nav>
    )
}