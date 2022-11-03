import { Link } from "react-router-dom";
import defaultProfileImg from "../resource/kriby_study2.png";
import rankIcon1 from "../resource/kirby_icon1.png";
import { useState, useEffect } from "react";
import api from "../api/api";

const ProfileCard = ()=>{
  const userNickname = window.localStorage.getItem("userNickname");

  const [memberInfo, setMemberInfo] = useState('');
  const getNickname = window.localStorage.getItem("userNickname");

  useEffect(() => {    
    const memberData = async () => {
        try {
            const response = await api.memberInfo(getNickname);
            setMemberInfo(response.data);
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    };
    memberData();
  }, []);

  return(
    <div className="profilecard">
      <div className="profileimg">
        <img src={defaultProfileImg} alt="기본 프로필 이미지(공부하는 커비)"/>
      </div>
      <p>{userNickname}</p>
      <p>
        {memberInfo && memberInfo.map(member => (
          <div key={member.nickname}>
              <p>{member.grade}</p>
          </div>
          ))}
      </p>                    
      <p><Link to="/memberinfo">내 정보</Link><Link to="#">로그아웃</Link></p>
    </div>
  );
};

export default ProfileCard;