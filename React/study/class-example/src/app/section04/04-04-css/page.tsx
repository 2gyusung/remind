import styles from "./styles.module.css";

export default function CssPage() {
  return (
    <>
      {/* css-모듈방식(테일윈드 함께 가능) */}
      <button className={styles.버튼스타일}>버튼</button>
      <br />
      <div className={styles.네모상자스타일}>네모상자</div>
      <br />
      <div className={styles.네모상자스타일2}>네모상자</div>
      <br />

      {/* 테일윈드 방식 */}
      <div className="lg:철수의상자">클때는 초록색</div>
    </>
  );
}
