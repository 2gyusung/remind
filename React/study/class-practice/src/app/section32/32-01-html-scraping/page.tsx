"use client";

export default function HtmlScrapingPage() {
  const onClickScrape = async () => {
    const result = await fetch(
      "http://localhost:3000/section32/32-01-html-scraping-target" // CORS: https://www.naver.com
    );
    const data = await result.text();
    console.log(data);
  };

  return <button onClick={onClickScrape}>긁어오기</button>;
}
