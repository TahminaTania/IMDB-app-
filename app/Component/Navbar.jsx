import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <section className='py-10'>
        <div className='flex items-center justify-center gap-20 bg-slate-100 dark:bg-slate-600 py-5 font-bold dark:text-gray-200 text-xl'>
            <NavbarItem title="Trending" param="fetchTrending"/>
            <NavbarItem title="Now Playing" param="fetchNowPlaying"/>
            <NavbarItem title="Top Rated" param="fetchTopRated"/>
        </div>
    </section>
  )
}
