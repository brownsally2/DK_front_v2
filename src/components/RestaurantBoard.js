import MainBoardName from "./MainBoardName";
import MainWriteName from "./MainWriteName";
import { Link } from "react-router-dom";
const RestaurantBoard = () =>{
  return(
    <div className="board">
      <Link to="/board/맛집추천" className="mainboardname">맛집추천</Link>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
      <MainWriteName/>
    </div>
  );
};
export default RestaurantBoard;