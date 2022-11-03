import axios from "axios";
import MemberInfo from "../components/MemberInfo";
const HEADER = 'application/json';
// const HEADER = {"Content-type" : "application/json; charset-UTF-8"};
const BASE_URL = "http://localhost:8100/mini_board/";

const api = {
  //로그인 기능
  userLogin: async function(nickname, pwd) {
    const loginObj = {
      nickname: nickname,
      pwd: pwd
    }
    return await axios.post(BASE_URL+ "LoginServlet", loginObj, HEADER);
  },

  //회원정보 조회
  memberInfo: async function(nickname) {
    const regCmd = {
        cmd : "MemberInfo",
        nickname : nickname
    }
    return await axios.post(BASE_URL + "MemberServlet", regCmd, HEADER);
  },

  //회원탈퇴
  memberDelete: async function(pwd) {
    const regCheck = {
    pwd: pwd
    }
    return await axios.post(BASE_URL + "MemberDeleteServlet", regCheck, HEADER);
  },

  //회원정보수정
  memberUpdate: async function(value, type, nickname) {
    const updateObj = {
      value : value,
      type : type, 
      nickname : nickname
    }
    return await axios.post(BASE_URL + "MemberUpdateServlet", updateObj, HEADER);
  }
}

export default api;