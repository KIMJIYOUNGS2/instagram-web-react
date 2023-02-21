import styled from "styled-components";
import coco from "../images/coco.jpg";
import coco2 from "../images/coco2.jpg";
import coco3 from "../images/coco3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ProfileImg = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 80px;
  background-color: #2c2c2c;
`;

const ProfileInfo = styled.div``;

const Username = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const FollowBtn = styled.button`
  cursor: pointer;
`;

const Contents = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;

const Icons = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

function Profile() {
  return (
    <div>
      <ProfileHeader>
        <ProfileImg src={coco} />
        <ProfileInfo>
          <Row>
            <Username>닉네임 들어갈 자리</Username>
            <FollowBtn>팔로우</FollowBtn>
          </Row>
          <Row>
            <div>3</div>
            <div>followers</div>
            <div>10</div>
            <div>following</div>
          </Row>
          <Row>
            <div>소개글</div>
          </Row>
        </ProfileInfo>
      </ProfileHeader>

      <Contents>
        <Feed bg={coco}>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              456
            </Icon>
          </Icons>
        </Feed>
        <Feed bg={coco2}>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              456
            </Icon>
          </Icons>
        </Feed>
        <Feed bg={coco3}>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              456
            </Icon>
          </Icons>
        </Feed>
      </Contents>
    </div>
  );
}

export default Profile;
