import { Link } from "react-router-dom";
const MainBoardName = (props) =>{
  return(
    <Link to="/board" className="mainboardname">{props.name}</Link>
  );
};
export default MainBoardName;