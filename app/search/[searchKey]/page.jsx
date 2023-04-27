
import Result from '@/app/Result';
import React from 'react'
const API_KEY=process.env.API_KEY
export default async function searchedPage({params}) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchKey}&language=en-US&include_adult=false`
      );
    if (!res.ok) {
        throw new Error("Failed to fetch data"); 
      }
    const data=await res.json();
    const result= data.results
  return (
    <div>
        {result && result.length===0 &&(
            <h1 className='text-center pt-6 text-3xl'>No data Found</h1>
        )}
        {result && <Result result={result}/>}

    </div>
  )
}
