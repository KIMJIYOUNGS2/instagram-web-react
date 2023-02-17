import styled from "styled-components";
import coco from "../images/coco.jpg";

const ProfileHeader = styled.div`
  margin: 0 auto;
  width: 300px;
  text-align: center;
  display: flex;
  width: 50vw;
  // justify-content: center;
  // align-items: center;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ProfileImg = styled.img`
  margin-left: 50px;
  margin-right: 80px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #2c2c2c;
`;

const ProfileInfo = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FollowBtn = styled.button`
  cursor: pointer;
  margin: 20px;
`;

function Profile() {
  return (
    <div>
      <ProfileHeader>
        <ProfileImg src={coco}></ProfileImg>
        <ProfileInfo>
          <Row>
            <div>username</div>
            <FollowBtn>팔로우</FollowBtn>
          </Row>
          <Row>
            <div>10 followers</div>
            <div>10 follwing</div>
          </Row>
        </ProfileInfo>
      </ProfileHeader>
    </div>
  );
}

export default Profile;
