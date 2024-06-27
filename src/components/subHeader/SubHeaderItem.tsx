'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const ApiParam = {
  TOP_TRENDING: 'trending',
  TOP_RATED: 'rated',
} as const;

export type ApiParamType = typeof ApiParam[keyof typeof ApiParam];

interface SubHeaderItemProps {
  title: string
  apiParam: ApiParamType
}

export function SubHeaderItem ( { title, apiParam }:  SubHeaderItemProps) {
  const genre = useSearchParams().get('genre') || ApiParam.TOP_TRENDING;
  console.log(genre === apiParam)
  const backgroundColor = (genre === apiParam ? 'bg-amber-300 dark:bg-slate-900' : 'hover:bg-amber-400 dark:hover:bg-slate-950 bg-slate-200 dark:bg-slate-800')

  return <Link href={`\?genre=${apiParam}`} className={`text-sm relative items-center justify-center rounded-md p-2 text-slate-950 dark:text-slate-200 ${backgroundColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-slate-950`}>{title}</Link>;
}