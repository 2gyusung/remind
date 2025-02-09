-- 01. 마당서점의 고객이 요구하는 다음 질문에 대해 SQL문을 작성하시오.

-- (1) 도서번호가 1인 도서의 이름
-- 이 쿼리는 'Book' 테이블에서 도서번호가 1인 도서의 이름을 조회합니다.
SELECT name 
FROM Book 
WHERE bookid = 1;

-- (2) 가격이 20,000원 이상인 도서의 이름
-- 이 쿼리는 'Book' 테이블에서 가격이 20,000원 이상인 도서의 이름을 조회합니다.
SELECT name 
FROM Book 
WHERE price >= 20000;

-- (3) 박지성의 총 구매액
SELECT SUM(saleprice) AS total_purchase 
FROM Orders 
WHERE custid = (SELECT custid FROM Customer WHERE name = '박지성');

-- (4) 박지성이 구매한 도서의 수
SELECT COUNT(*) AS book_count 
FROM Orders 
WHERE custid = (SELECT custid FROM Customer WHERE name = '박지성');

-- (5) 박지성이 구매한 도서의 출판사 수


-- (6) 박지성이 구매한 도서의 이름, 가격, 정가와 판매가격의 차이


-- (7) 박지성이 구매하지 않은 도서의 이름
SELECT name 
FROM Book 
WHERE bookid NOT IN (
    SELECT bookid 
    FROM Orders 
    WHERE custid = (SELECT custid FROM Customer WHERE name = '박지성')
);

-- 02. 마당서점의 운영자와 경영자가 요구하는 다음 질문에 대해 SQL문을 작성하시오.

-- (1) 마당서점 도서의 총 개수
SELECT COUNT(*) AS total_books 
FROM Book;

-- (2) 마당서점에 도서를 출고하는 출판사의 총 개수
SELECT COUNT(DISTINCT publisher) AS total_publishers 
FROM Book;

-- (3) 모든 고객의 이름, 주소
SELECT name, address 
FROM Customer;

-- (4) 2014년 7월 4일 ~ 7월 7일 사이에 주문받은 도서의 주문번호
SELECT orderid 
FROM Orders 
WHERE orderdate BETWEEN '2014-07-04' AND '2014-07-07';

-- (5) 2014년 7월 4일 ~ 7월 7일 사이에 주문받은 도서를 제외한 도서의 주문번호
SELECT orderid 
FROM Orders 
WHERE orderdate NOT BETWEEN '2014-07-04' AND '2014-07-07';

-- (6) 성이 '김'씨인 고객의 이름과 주소
SELECT name, address 
FROM Customer 
WHERE name LIKE '김%';

-- (7) 성이 '김'씨이고, 이름이 '이'로 끝나는 고객의 이름과 주소
SELECT name, address 
FROM Customer 
WHERE name LIKE '김%' AND name LIKE '%이';

-- (8) 주문하지 않은 고객의 이름(부속질의 사용)
SELECT name 
FROM Customer 
WHERE custid NOT IN (SELECT custid FROM Orders);

-- (9) 주문 금액의 총액과 주문의 평균 금액
SELECT SUM(saleprice) AS total_amount, AVG(saleprice) AS average_amount 
FROM Orders;

-- (10) 고객의 이름과 고객별 구매액


-- (11) 고객의 이름과 고객이 구매한 도서목록


-- (12) 도서의 가격(Book 테이블)과 판매가격(Orders 테이블)의 차이가 가장 많은 주문


-- (13) 도서의 판매액 평균보다 자신의 구매액 평균이 더 높은 고객의 이름


-- 03. 마당서점 심화 질문

-- (1) 박지성이 구매한 도서의 출판사와 같은 출판사에서 도서를 구매한 고객의 이름


-- (2) 두 개 이상의 서로 다른 출판사에서 도서를 구매한 고객의 이름


-- (3) 전체 고객의 30% 이상이 구매한 도서

