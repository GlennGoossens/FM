"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderComponent, { HeaderProps } from "./header.component";
import { loadNavigationData } from "@/content/navigation-loader";

export default function HeaderWrapper(props: HeaderProps) {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<any[]>([]);
  
  // Fetch navigation data once when component mounts
  useEffect(() => {
    const fetchNavigation = async () => {
      const navData = await loadNavigationData();
      setNavigation(navData);
    };
    fetchNavigation();
  }, []);

  return <HeaderComponent {...props} currentPath={pathname} navigation={navigation} />;
}
