import axios from "axios";
const HEADER = 'application/json';
// const HEADER = {"Content-type" : "application/json; charset-UTF-8"};
const BASE_URL = "http://localhost:8100/DK_back/";

const api = {
  userLogin: async function(nickname, pwd) {
    const loginObj = {
      nickname: nickname,
      pwd: pwd
    }
    return await axios.post(BASE_URL+ "LoginServlet", loginObj, HEADER);
  },
  // 게시판에 있는 글 조회
  boardDetail: async function() {
    const boardObj = {
      cmd : "BoardInfo"
    }
    return await axios.post(BASE_URL + "BoardServlet", boardObj, HEADER );
  },
  writeList : async function(boardName, pageNum) {
    const writeListObj = {
      cmd : "WriteList",
      boardName : boardName,
      pageNum: pageNum
    };
    return await axios.post(BASE_URL + "WriteServlet", writeListObj, HEADER);
  }
};
export default api;