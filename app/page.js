import Link from "next/link";
import SingleData from "./Movie/SingleData";

const API_KEY=process.env.API_KEY

export default async function Home({searchParams}) {
  const genre=searchParams.genre || "fetchTrending"
  const res=await fetch(`https:/api.themoviedb.org/3/${
    genre==="fetchTopRated"? "movie/top_rated":genre==="fetchTrending"?"trending/all/week":"movie/now_playing"
  }?api_key=${API_KEY}&language=en-US&page=1`,
  { next:{ revalidate:10000
  }});

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

   const data=await res.json();
   const result=data.results;
  console.log(result, "those are resultss...")
  return (
    <main className="">
      result
      <div className=" xsm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto py-4">
      {result.map((data)=>{
        return(

            <Link href={'/Movie/'+data.id}><SingleData key={data.id} data={data}/></Link>

        )
      })

      }
      </div>
    </main>
  )
}
