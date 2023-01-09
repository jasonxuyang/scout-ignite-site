import { useEffect, useState } from "react";
import { BREAKPOINT } from "./types";

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<BREAKPOINT | null>(null);

  const validateBreakpoint = () => {
    if (window.matchMedia(`(max-width: ${BREAKPOINT.MOBILE}px)`).matches)
      setBreakpoint(BREAKPOINT.MOBILE);
    else setBreakpoint(BREAKPOINT.DESKTOP);
  };

  useEffect(() => {
    window.addEventListener("resize", validateBreakpoint);
    return () => {
      window.removeEventListener("resize", validateBreakpoint);
    };
  });

  return breakpoint;
}
