import Link from "next/link";
import SingleData from "./Movie/SingleData";
function Result({result}) {
  return (
    <div className=" xsm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto py-4">
        {result.map((data)=>{
        return(

            <Link href={'/Movie/'+data.id}><SingleData key={data.id} data={data}/></Link>

        )
      })

      }
  </div>
  )
}

export default Result