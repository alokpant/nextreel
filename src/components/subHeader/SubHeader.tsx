'use client'

import { ApiParam, SubHeaderItem } from "./SubHeaderItem";

export function SubHeader() {
  return <section className="bg-slate-200 dark:bg-slate-800">
    <div className="max-w-6xl m-auto flex p-3 gap-5">
      <SubHeaderItem title="Trending" apiParam={ApiParam.TOP_TRENDING} />
      <SubHeaderItem title="Top rated" apiParam={ApiParam.TOP_RATED} />
    </div>
  </section>;
}