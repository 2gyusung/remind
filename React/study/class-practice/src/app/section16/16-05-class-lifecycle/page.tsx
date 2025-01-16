"use client";

import { Component } from "react";
import Link from "next/link";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!!");
  }

  componentWillUnmount() {
    console.log("사라지기 전에 실행!!");
    // 예) 채팅방 나가기, 불필요한 타이머 삭제 등 청소하기
  }

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>

        {/* 해결방법2) 로직상의 this 연결(.bind) */}
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>

        <Link href={"/"}>나가기!!</Link>
      </>
    );
  }
}
