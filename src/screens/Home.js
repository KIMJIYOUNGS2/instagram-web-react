// import Header from "components/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import coco from "../images/coco.jpg";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import Comments from "components/Comments";
import { Link } from "react-router-dom";

// component 구성 먼저 잡기
const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // width: 90vw;
  max-width: 100vw;
  height: 90%;
  border: 1px solid black;
  margin: 20px 0px 20px 20px;
`;
const FeedHeader = styled.div`
  display: flex;
  flex-direction: row;
  position: static;
  top: 20px;
  left: 30px;
  padding: 15px;
  // border: 3px solid rgb(219, 219, 219);
  width: 100%;
  height: auto;
`;
const UserPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserName = styled.span`
  margin-left: 10px;
  font-weight: 600;
  display: flex;
  // justify-content: center;
  align-items: center;
  // margin: 5px;
`;

const FeedPhoto = styled.img`
  width: 100%;
  max-width: 100%;
  // display: flex;
  // align-items: center;
  // border: 1px solid black;
  // height: 70vh;
`;

const FeedActionContainer = styled.div`
  padding: 12px 15px;
`;
const FeedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 20px;
  }
`;

const FeedAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Likes = styled.span`
  font-weight: 600;
  margin-top: 15px;
  display: block;
`;

function Home() {
  return (
    <FeedContainer>
      <FeedHeader>
        <Link to="/profile">
          <UserPhoto>
            <FontAwesomeIcon size="2x" icon={faCircleUser} />
          </UserPhoto>
        </Link>
        <UserName>집사</UserName>
      </FeedHeader>
      <FeedPhoto src={coco} />
      {/* <FeedPhoto src="https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png" /> */}

      <FeedActionContainer>
        <FeedWrapper>
          <div>
            <FeedAction>
              <FontAwesomeIcon
                style={{ color: true ? "tomato" : "inherit" }}
                icon={true ? faHeart : faHeart}
              />
            </FeedAction>

            <FeedAction>
              <FontAwesomeIcon size="2x" icon={faComment} />
            </FeedAction>

            <FontAwesomeIcon size="2x" icon={faPaperPlane} />
          </div>

          <div>
            <FeedAction>
              <FontAwesomeIcon size="2x" icon={faBookmark} />
            </FeedAction>
          </div>
        </FeedWrapper>

        <Likes>1 likes</Likes>
        <Comments />
      </FeedActionContainer>
    </FeedContainer>
  );
}

export default Home;
