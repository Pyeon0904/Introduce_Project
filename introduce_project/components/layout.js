// 공통 레이아웃 작업

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return(
    <>
      <Header />
      <h1>레이아웃</h1>
    {/* 외부에서 들어오는 요소를 넣어줄 때에는 {} 중괄호 사용 */}
      <div>{children}</div>
      <Footer />
    </>
  )
}