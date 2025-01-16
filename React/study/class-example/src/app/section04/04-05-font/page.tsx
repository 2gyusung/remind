import styles from "./styles.module.css";

export default function FontPage() {
  return (
    <>
      {/* 1. 글로벌폰트를 기본으로 보여주기 */}
      <div> font 를 보여줍니다.</div>

      {/* 2. 지정한 폰트를 보여주기 */}
      <div className={styles.폰트를보여주자}>font 를 보여줍니다.</div>
    </>
  );
}
