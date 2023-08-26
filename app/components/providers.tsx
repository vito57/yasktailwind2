"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
