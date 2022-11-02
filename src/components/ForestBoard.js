import MainBoardName from "./MainBoardName";
import MainWriteName from "./MainWriteName";
import { Link } from "react-router-dom";
const ForestBoard = () =>{
  return(
    <div className="board">
      <Link to="/board/성실회원" className="mainboardname">성실회원</Link>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
    </div>
  );
};
export default ForestBoard;