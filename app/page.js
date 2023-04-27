import Link from "next/link";
import SingleData from "./Movie/SingleData";

const API_KEY=process.env.API_KEY

export default async function Home({searchParams}) {
  const genre=searchParams.genre || "fetchTrending"
  const res=await fetch(`https:/api.themoviedb.org/3/${
    genre==="fetchTopRated"? "movie/top_rated":"trending/all/week"
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
      <div>
      {result.map((data)=>{
        return(
          <div key={data.id} >
            <Link href={'/Movie/'+data.id}><SingleData  data={data}/></Link>
          </div>
        )
      })

      }
      </div>
    </main>
  )
}
