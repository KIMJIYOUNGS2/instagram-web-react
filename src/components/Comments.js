import styled from "styled-components";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const CommentContainer = styled.div`
  margin-bottom: 15px;
`;

const CommentAuthor = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;
const CommentContent = styled.span``;

const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function Comments({ author, caption, comments, reviewsNum }) {
  return (
    <CommentsContainer>
      <CommentContainer>
        <CommentAuthor>{author}</CommentAuthor>
        <CommentContent>{caption}</CommentContent>
      </CommentContainer>
      <CommentCount>댓글 {reviewsNum}개 모두보기</CommentCount>

      {comments?.map((comment) => (
        <CommentContainer>
          <CommentAuthor>{comment.user.username}</CommentAuthor>
          <CommentContent>{comment.caption}</CommentContent>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}

export default Comments;
