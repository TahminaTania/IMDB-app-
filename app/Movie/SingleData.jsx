import React from 'react'
import Link from 'next/link'
import { MdOutlineThumbUpOffAlt} from 'react-icons/md';
 
import Image from 'next/image';
export default function SingleData({data}) {
  return (
    <div className="cursor-pointer xsm:p-3 xsm:hover:shadow-slate-400 xsm:shadow-md rounded-lg xsm:border xsm:border-slate-400 xsm:m-2 transition-shadow duration-200 group">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        }`}
        width={500}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="image is not available"
      ></Image>
     
      <div className="p-2">
        <p className="line-clamp-2 text-md">{data.overview}</p>
        <h2 className="truncate text-lg font-bold py-2">
          {data.title || data.name}
        </h2>
        <p className="flex items-center pt-5">
          {data.release_date || data.first_air_date}
          <MdOutlineThumbUpOffAlt className="h-5 mr-1 ml-3" /> {data.vote_count}
        </p>

      </div>
     
  </div>
  )
}
