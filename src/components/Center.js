import { Link } from "react-router-dom";
import FreeBoard from "./FreeBoard";
import RestaurantBoard from "./RestaurantBoard";
import QuestionBoard from "./QuestionBoard";
import EmploymentBoard from "./EmploymentBoard";
import ForestBoard from "./ForestBoard";
const Center = (props) =>{
  return(
    <div className={props.position + "center"}>
      <FreeBoard/>
      <RestaurantBoard/>
      <QuestionBoard/>
      <EmploymentBoard/>
      <ForestBoard/>
    </div>
  );
};
export default Center;