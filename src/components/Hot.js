import { Link } from "react-router-dom";
const Hot = () =>{
  return(
    <div className="hot">
      <Link to="/board" className="hotboardname">좋아요 많은 게시글, 최근 댓글 달린 게시글</Link>
      <Link to="#" className="hotwritename">인기 게시글 1</Link>
      <Link to="#" className="hotwritename">인기 게시글 2</Link>
      <Link to="#" className="hotwritename">인기 게시글 3</Link>
      <Link to="#" className="hotwritename">인기 게시글 4</Link>
      <Link to="#" className="hotwritename">인기 게시글 5</Link>
    </div>
  );
};
export default Hot;