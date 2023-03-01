import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(글제목.map((a, i) => 0));
  let [날짜, 날짜변경] = useState(글제목.map((a, i) => new Date().toLocaleString()));
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  useEffect(() => { 따봉변경([0, ...따봉]); 날짜변경([new Date().toLocaleString(), ...날짜]); }, [글제목]);
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      {글제목.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4 onClick={() => { setModal(true); settitle(i) }}>
              {글제목[i]}
              <span onClick={(e) => { e.stopPropagation(); let copy = [...따봉]; copy[i]++; 따봉변경(copy) }}>
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>{날짜[i]}</p>
            <button onClick={() => { 글제목변경(글제목.filter(el => el !== 글제목[i])) }}>삭제</button>
          </div>
        )
      })}
      <input onChange={(e => { 입력값변경(e.target.value); })} />
      <button onClick={() => { if (입력값) 글제목변경([입력값, ...글제목]) }} >글 발행</button>
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
