import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(글제목.map((a, i) => 0));
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      {글제목.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4 onClick={() => {
              // setModal(!modal)
              setModal(true)
              settitle(i)
            }}>{글제목[i]}<span onClick={() => {
              let copy = [...따봉];
              copy[i]++;
              따봉변경(copy)
            }}>👍</span>{따봉[i]}</h4>
            <p>2월 18일 발행</p>
          </div>
        )
      })}
      {
        modal ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null
      }
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={
        () => {
          let copy = [...props.글제목];
          copy[0] = '여자 코트 추천';
          props.글제목변경(copy)
        }
      }>글제목변경</button>
    </div>
  )
}

export default App;
