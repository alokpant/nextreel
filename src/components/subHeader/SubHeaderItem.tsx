'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export enum ApiParam {
  TOP_TRENDING = 'trending',
  TOP_RATED = 'rated'
}

interface SubHeaderItemProps {
  title: string
  apiParam: ApiParam
}

export function SubHeaderItem ( { title, apiParam }:  SubHeaderItemProps) {
  const genre = useSearchParams().get('genre');
  const backgroundColor = (genre === apiParam ? 'bg-amber-300 dark:bg-slate-900' : 'hover:bg-amber-400 dark:hover:bg-slate-950 bg-slate-200 dark:bg-slate-800')

  return <Link href={`\?genre=${apiParam}`} className={`text-smrelative items-center justify-center rounded-md p-2 text-amber-950 dark:text-slate-200 ${backgroundColor} text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-slate-950`}>{title}</Link>;
}