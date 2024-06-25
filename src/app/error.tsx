'use client';

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-2xl pb-3">Something went wrong</h1>
      <p className="pb-6">Click the button below, to try again</p>
      <button onClick={() => reset()} className="text-smrelative items-center justify-center rounded-md p-2 text-amber-950 dark:text-slate-200 bg-amber-300 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-slate-950">Fetch again</button>
    </main>
  );
}

export default Error;
