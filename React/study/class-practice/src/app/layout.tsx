import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/commons/layout";
import ApolloHeaderAndErrorSettingRefresh from "@/commons/settings/26-02-apollo-header-and-error-setting-refresh";

const 철수의폰트 = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--철수의폰트",
  weight: "100 900",
});
const 글로벌폰트 = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--글로벌폰트",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "철수의 App",
  description: "철수의 홈페이지 입니다.",
};

// 1. 구조분해할당 리팩토링 전
// export default function RootLayout(props) {
//   return (
//     <html lang="en">
//       <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}>
//         <div>==============레이아웃? 모든 페이지의 공통 조상=============</div>
//         <ApolloSetting>
//           <Layout>{props.children}</Layout>
//         </ApolloSetting>
//         <div>==============레이아웃? 모든 페이지의 공통 조상=============</div>
//       </body>
//     </html>
//   );
// }

// 2. 구조분해할당 리팩토링 후  =>  let { children } = props
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}>
        {/* 1) 모달페이지(페러렐라우팅) */}
        <div>{modal}</div>

        {/* 2) 메인페이지 */}
        <div>==============레이아웃? 모든 페이지의 공통 조상=============</div>
        {/* <ApolloSetting> */}
        <ApolloHeaderAndErrorSettingRefresh>
          <Layout>{children}</Layout>
        </ApolloHeaderAndErrorSettingRefresh>
        {/* </ApolloSetting> */}
        <div>==============레이아웃? 모든 페이지의 공통 조상=============</div>
      </body>
    </html>
  );
}

/*
  [ Next 실행 순서 ]

  1. 주소창에 주소입력
    => "http://localhost:3000/aaa"

  2. 입력된 주소와 일치하는 컴포넌트 찾기
    => "src/app/aaa/page.tsx" 에 입력된 컴포넌트(ex, 철수의컴포넌트)

  3. 해당 컴포넌트를 통째로 children에 props로 넣어서 실행하기
    => <RootLayout children={철수의컴포넌트} />
*/
