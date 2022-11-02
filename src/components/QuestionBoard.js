import MainBoardName from "./MainBoardName";
import MainWriteName from "./MainWriteName";
import { Link } from "react-router-dom";
const QuestionBoard = () =>{
  return(
    <div className="board">
      <Link to="/board/질문" className="mainboardname">질문</Link>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
    </div>
  );
};
export default QuestionBoard;