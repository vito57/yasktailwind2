"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { usePathname } from 'next/navigation';

const forcedThemeRoutes: Record<string, string> = {
  '/works/drugcode': 'dark',
  '/works/bootsyduotone': 'dark',
  '/works/poehali': 'dark',
  '/works/bowlerslink': 'dark',
  '/works/pobeda': 'dark',
  '/works/riveo': 'dark',
  '/works/restevents': 'dark',
  '/works/taytega': 'dark',
  '/works/miractal': 'dark',
};
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const pathname = usePathname();
  const isForcedThemeRoute = pathname in forcedThemeRoutes;
  return <NextThemesProvider
    {...(isForcedThemeRoute && { forcedTheme: forcedThemeRoutes[pathname] })}
    {...props}>
    {children}
  </NextThemesProvider>
}