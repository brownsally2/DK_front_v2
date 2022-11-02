import MainBoardName from "./MainBoardName";
import MainWriteName from "./MainWriteName";
import { Link } from "react-router-dom";
const FreeBoard = () =>{
  return(
    <div className="board">
      <Link to="/board/자유" className="mainboardname">자유</Link>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
    </div>
  );
};
export default FreeBoard;