import MainBoardName from "./MainBoardName";
import MainWriteName from "./MainWriteName";
import { Link } from "react-router-dom";
const EmploymentBoard = () =>{
  return(
    <div className="board">
      <Link to="/board/취업진로" className="mainboardname">취업진로</Link>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
    </div>
  );
};
export default EmploymentBoard;