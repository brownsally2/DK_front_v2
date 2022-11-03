import { Link } from "react-router-dom";
import Board from "./Board";
const Center = (props) =>{
  return(
    <div className={props.position + "center"}>
      <Board/>
    </div>
  );
};
export default Center;