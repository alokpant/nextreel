'use client';

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { PageParams } from "@/app/types";

export default function SearchBox() {
  // console.log('searchParams', searchParams)
  // const searchTerm = searchParams?.params?.searchTerm || ''
  const [search, setSearch] = useState('');
  const router = useRouter();
  console.log('router', router)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`)
  }
  return <form className="max-w-sm m-auto flex justify-stretch p-3 items-center"
    onSubmit={handleSubmit}
  >
    <input type="text"
      placeholder='Search keywords...'
      className="w-full h-8 px-3 rounded-none text-xs focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-slate-950 rounded-tl-md rounded-bl-md"
      onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
    />
    <button
      type="submit"
      disabled={!search}
      className="h-100 justify-self-stretch rounded-none text-xs hover:bg-amber-400 dark:hover:bg-slate-950 bg-slate-200 disabled:hover:bg-slate-200 disabled:cursor-auto disabled:opacity-50 disabled:dark:hover:bg-slate-700 dark:bg-slate-700 relative items-center justify-center rounded-tr-md rounded-br-md py-2 px-3 text-slate-950 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white dark:focus:ring-slate-800">
      <IoSearch className="h-4"/>
    </button>
  </form>;
}