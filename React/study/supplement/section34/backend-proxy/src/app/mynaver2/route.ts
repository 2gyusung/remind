export async function GET() {
  console.log(
    "Next 서버에 요청했군요! 저는 지금 백엔드(API엔드포인트: http://localhost:3000/mynaver2)로 사용되고 있습니다"
  );

  // Next 서버에서 대신(proxy) 네이버에 요청하고 응답 받아서 돌려주기 => CORS 문제 해결
  const result = await fetch("https://www.naver.com");
  const data = await result.text();

  // 백엔드 API로 브라우저에 HTML 데이터 보내기
  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
