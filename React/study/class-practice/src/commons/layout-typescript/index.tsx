"use client"

import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { usePathname } from "next/navigation";

const HIDDEN_HEADERS = [
  "/section12/12-01-library-icon",
  "/section12/12-03-library-star",
  // ...
  // ...
  // ...
];

interface ILayout {
  children: React.ReactNode
}

export default function Layout(props: ILayout) {
  const pathname = usePathname()
  console.log("=========");
  console.log(pathname)
  console.log("=========");

  const isHiddenHeader = HIDDEN_HEADERS.includes(pathname);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
        <div style={{ height: "500px", display: "flex" }}>
          <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
          <div style={{ width: "70%" }}>{props.children}</div>
        </div>
      <LayoutFooter />
    </>
  );
}
