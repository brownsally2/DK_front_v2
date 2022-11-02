import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../api/api';
import BoardName from "./BoardName";
import NewWrite from "./NewWrite";
import Write from "./Write";

const BoardCenter = () =>{
  const boardName = useParams();
  const boardId = boardName.boardId;
  console.log(boardName.boardId); 


  const [boardDetail, setBoardDetail] = useState("");

  useEffect(() => {
    const boardData = async () => {
      try {
        const response = await api.boardDetail(boardId);
        setBoardDetail(response.data);
        console.log(response.data);//// 배열
      } catch(e) {
          console.log(e);
      }
    };
    boardData();
  },[])


  return(
    <div className="boardcenter">
      {boardDetail&&boardDetail.map(board => (
      <BoardName key={board.boardName} name={board.boardName} />))}
      <NewWrite/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
    </div>
  );
};
export default BoardCenter;

