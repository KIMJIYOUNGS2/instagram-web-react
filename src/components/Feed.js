// import Header from "components/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

import Avatar from "./Avata";
import Comments from "./Comments";
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

function Feed({
  id,
  file,
  caption,
  user,
  likesNum,
  reviewsNum,
  reviews,
  isLiked,
  contentImg,
}) {
  return (
    <FeedContainer key={id}>
      <FeedHeader>
        <Avatar lg url={user.profileImg} />
        <UserName>{user.username}</UserName>
      </FeedHeader>

      <FeedPhoto src={contentImg} />

      <FeedActionContainer>
        <FeedWrapper>
          <div>
            <FeedAction>
              <FontAwesomeIcon
                style={{ color: true ? "tomato" : "inherit" }}
                icon={isLiked ? faHeart : faHeart}
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
        <Likes>{likesNum} likes</Likes>

        <Comments
          key={id}
          author={user.username} // 글 작성자
          caption={caption} // 글 내용
          comments={reviews} // 댓글들 (댓글 작성자, 댓글 내용)
          reviewsNum={reviewsNum} // 댓글 개수
        />
      </FeedActionContainer>
    </FeedContainer>
  );
}

export default Feed;
