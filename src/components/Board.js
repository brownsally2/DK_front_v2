import { useState, useEffect } from 'react';
import api from '../api/api';
import MainBoardName from "./MainBoardName";
import MainWriteName from "./MainWriteName";
const Board = () =>{
  const [boardInfo, setBoardInfo] = useState('');
  //   const [loading, setLoading] = useState(false);
    // const isLogin = window.localStorage.getItem("isLogin");
    // if(isLogin === "FALSE") window.location.replace("/")
  
    const onClickWrite = (val) => {
      console.log("상세 게시글로 이동 : " + val)
      window.localStorage.setItem("Detail", val);
      window.location.replace("/write");
    }
  
    useEffect(() => {  
      const boardData = async () => {
          // setLoading(true);
          try {
              const response = await api.boardDetail(); // 전체 회원 조회
              setBoardInfo(response.data);
              console.log(response.data)
          } catch (e) {
              console.log(e);
          }
          // setLoading(false);
      };
      boardData();
  }, []);
  return(
    <div className="board">
          {boardInfo && boardInfo.map(board => (
      <MainBoardName to="#" className="mainboardname" key={board.boardNum} name={board.boardName}></MainBoardName> 
    ))}
      <MainWriteName/>

    </div>
  );
};
export default Board;