"use client";

import { ThemeProvider } from "next-themes";

interface ProviderProps {
	children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen select-none transition-colors duration-300">
				{children}
			</div>
		</ThemeProvider>
	);
}
