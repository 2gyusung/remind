export function GET() {
  console.log(
    "Next 서버에 요청했군요! 저는 지금 백엔드(API엔드포인트: http://localhost:3000/mynaver1)로 사용되고 있습니다"
  );

  // 백엔드 API로 브라우저에 JSON 데이터 보내기
  return new Response(JSON.stringify({ message: "요청에 성공하였습니다." }), {
    status: 200,
  });
}
