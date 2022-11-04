import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../api/api';
import Board from "./Board";
const Center = (props) =>{
  const [boardInfo, setBoardInfo] = useState('');
    const [loading, setLoading] = useState(false);
    // const isLogin = window.localStorage.getItem("isLogin");
    // if(isLogin === "FALSE") window.location.replace("/")
  
    const onClickWrite = (val) => {
      console.log("상세 게시글로 이동 : " + val)
      window.localStorage.setItem("Detail", val);
      window.location.replace("/write");
    }
  
    useEffect(() => {  
      const boardData = async () => {
          setLoading(true);
          try {
              const response = await api.boardDetail(); // 전체 회원 조회
              setBoardInfo(response.data);
              console.log(response.data)
          } catch (e) {
              console.log(e);
          }
          try {

          } catch(e) {
            console.log(e);
          }
          setLoading(false);
      };
      boardData();
  }, []);
  return(
    <div className={props.position + "center"}>
      {boardInfo && boardInfo.map(({boardName, mainWrites}) => (
        <div className="board">
         <Link to="/board" className="mainboardname">{boardName}</Link>
         {mainWrites && mainWrites.map(({writeName, writeDate}) => (
          <Link to="/write" className="mainwritename">{writeName}<span>{writeDate}</span></Link>
         ))}
        </div>
      ))}
    </div>
  );
};
export default Center;