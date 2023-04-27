"use client";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavbarItem({title,param}) {
    const searchParams=useSearchParams()
    const genre=searchParams.get("genre");
  return (
    <div >
        <Link href={`/?genre=${param}`} className={`${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-blue-600"}`}>{title}</Link>
    </div>
  )
}
