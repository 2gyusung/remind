import "./App.css";
import React, { useState } from "react";
import addImage from "./assets/add_image.png";

function App() {
  // 입력값 저장하는 상태 설정하기
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  // 입력값 문제가 있을 경우 보여줄 에러메시지 설정
  const [nameError, setNameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentError, setContentError] = useState("")

  // 변경값 확인하여 상태 저장
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeContent = (event) => {
    setContent(event.target.value)
  }

  const onClickSingup = () => {
    let hasError = false;

    if(name.trim() === ""){
      setNameError("필수입력사항입니다")
    }else {
      setNameError("")
    }
    // 비밀번호 검증
    if(password.length === 0) {
      setPasswordError("필수입력사항입니다")
    }
    else {
      setPasswordError("")
    }
    // 제목검증하기
    if(title.trim() === ""){
      setTitleError("필수입력사항입니다")
      hasError = true;
    }else {
      setTitleError("")
    }
            // 4. 내용 검증하기
            if (content.trim() === "") {
              setContentError("필수입력 사항입니다.");
              hasError = true;
            } else {
              setContentError("");
            }
            // 5. 성공알람 보여주기
            if (hasError === false) {
              alert("게시글 등록이 가능한 상태입니다!");
            }
  }
 
  return (
    <div class="layout">
    <div class="enroll-subject">
      <div class="enroll-subject-text">게시물 등록</div>
    </div>
    <div class="enroll-row-container">
      <div class="enroll-row-section">
        <div class="enroll-row-flex">
          <div class="flex-half">
            <div class="enroll-form-title">
              <div>작성자 </div>
              <div class="enroll-required-indicator"> *</div>
            </div>
            <input
              type="text"
              placeholder="작성자 명을 입력해 주세요."
              class="enroll-input"
              onChange={onChangeName}
            />
            <div className='error-msg'>{nameError}</div>
          </div>
          <div class="flex-half">
            <div class="enroll-form-title">
              <div>비밀번호</div>
              <div class="enroll-required-indicator"> *</div>
            </div>
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              class="enroll-input"
              onChange={onChangeName}
            />
            <div className='error-msg'>{passwordError}</div>
          </div>
        </div>
      </div>

      <div class="enroll-border"></div>

      <div class="enroll-row-section">
        <div class="enroll-form-title">
          <div>제목</div>

          <div class="enroll-required-indicator"> *</div>
        </div>
        <input
          type="text"
          class="enroll-input"
          placeholder="제목을 입력해 주세요."
          onChange={onChangeTitle}
        />
        <div className='error-msg'>{titleError}</div>
      </div>
      <div class="enroll-border"></div>
      <div class="enroll-row-section">
        <div class="enroll-form-title">
          <div>내용</div>
          <div class="enroll-required-indicator"> *</div>
        </div>
        <textarea
          placeholder="내용을 입력해 주세요."
          class="enroll-input enroll-textarea"
          onChange={onChangeContent}
        ></textarea>
    <div className='error-msg'>{contentError}</div>
      </div>
      <div class="enroll-row-section">
        <div class="enroll-form-title">
          <div>주소</div>
        </div>
        <div class="enroll-address-firstrow">
          <input text="number" class="zipcode-input" placeholder="12345" />
          <button class="zipcode-search-button">우편번호 검색</button>
        </div>

        <input
          placeholder="주소를 입력해주세요."
          class="enroll-input"
          type="text"
        />
        <input placeholder="상세주소" class="enroll-input" type="text" />
      </div>
      {/* border */}
      <div class="enroll-border"></div>
      <div class="enroll-row-section">
        <div class="enroll-form-title">
          <div>유튜브 링크</div>
        </div>
        <input class="enroll-input" placeholder="링크를 입력해 주세요." />
      </div>

      {/* border */}
      <div class="enroll-border"></div>

      <div class="enroll-row-section">
        <div>사진 첨부</div>
        <div class="picture-enroll-row">
          <img src={addImage} alt='사진'/>
          <img src={addImage}  alt='사진'/>
          <img src={addImage} alt='사진'/>
        </div>
      </div>
    </div>
    <div class="enroll-button-container">
      <button class="enroll-cancel-button">취소</button>
      <button class="enroll-submit-button" onClick={onClickSingup}>등록하기</button>
    </div>
  </div>
  );
}

export default App;
