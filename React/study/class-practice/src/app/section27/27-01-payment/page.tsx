"use client";

import * as PortOne from "@portone/browser-sdk/v2";

export default function PaymentPage() {
  const onClickPayment = async () => {
    try {
      const rsp = await PortOne.requestPayment({
        storeId: "store-abc39db7-8ee1-4898-919e-0af603a68317",
        paymentId: "testm1rk96al2",
        orderName: "마우스",
        totalAmount: 100,
        currency: "CURRENCY_KRW",
        channelKey: "channel-key-1dc10cea-ec89-471d-aedf-f4bd68993f33",
        payMethod: "EASY_PAY",
        customer: {
          fullName: "홍길동",
          phoneNumber: "010-4242-4242",
          email: "gildong@gmail.com",
          address: {
            country: "COUNTRY_KR",
            addressLine1: "신사동",
            addressLine2: "codecamp",
            city: "강남구",
            province: "서울특별시",
          },
          zipcode: "01181",
        },
        redirectUrl: "http://localhost:3000/section27/27-01-payment-detail",
      });
      // 결제 성공 시 로직,
      console.log(rsp);

      // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
      // createPointTransactionOfLoading
    } catch (error) {
      // 결제 실패 시 로직,
      console.error(error);
    }
  };

  return <button onClick={onClickPayment}>결제하기</button>;
}
