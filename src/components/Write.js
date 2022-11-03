import axios from "axios"
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import goodIcon from "../resource/kirby_icon6.png";
import commentIcon from "../resource/kirby_icon7.png";
import api from "../api/api";

const Write = () =>{
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [ref, inView] = useInView();
  const boardName = useParams();
  const boardId = boardName.boardId;
  console.log(boardName.boardId); 
  const pageNum = String(page);

  const getItems = useCallback(async () => {
    setLoading(true)
      try {
        const response = await api.writeList(boardId, pageNum);
        
        console.log(response.data);
      } catch(e) {
        console.log(e);
      };
    setLoading(false)
  }, [page]);

  useEffect(() => {
    setLoading(true)
    const boardData = async () => {
      try {
        const response = await api.writeList(boardId, pageNum);
        setItems(response.data);
        console.log(response.data);
      } catch(e) {
        console.log(e);
      };
    }
    boardData();
    setLoading(false)
  }, [page])

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(page+1)
    }
  }, [inView, loading])

  return(
    <div className="list">
      {items.map((item,idx) => (
        <div key={idx}>
          {item.length -1 === idx ? (
            <div className="write" ref={ref}>
                  <Link to="#">
                  <h2 className="wname">{item.writeName}</h2>
                  <p className="wcontent" />
                    {item.writeContents}
                  <time>{item.writeDate}</time>
                  <h3 className="nickname">{item.nickName}</h3>
                  <ul className="status">
                    <li className="good">
                      <img src={goodIcon} alt="좋아요"/>
                      <span>{item.countGood}</span>
                    </li>
                    <li className="comment">
                      <img src={commentIcon} alt="댓글수"/>
                      <span>{item.countComment}</span>
                    </li>
                  </ul>
                </Link>
            </div>
          ) : (
            <div className="write">
               <Link to="#">
                  <h2 className="wname">{item.writeName}</h2>
                  <p className="wcontent" />
                    {item.writeContents}
                  <time>{item.writeDate}</time>
                  <h3 className="nickname">{item.nickName}</h3>
                  <ul className="status">
                    <li className="good">
                      <img src={goodIcon} alt="좋아요"/>
                      <span>{item.countGood}</span>
                    </li>
                    <li className="comment">
                      <img src={commentIcon} alt="댓글수"/>
                      <span>{item.countComment}</span>
                    </li>
                  </ul>
                </Link>
            </div>
          )}
        </div>
      ))}
    </div>



  );
};
export default Write;