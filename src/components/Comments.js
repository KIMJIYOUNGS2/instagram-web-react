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

function Comments() {
  return (
    <CommentsContainer>
      <CommentContainer>
        <CommentAuthor>작성자</CommentAuthor>
        <CommentContent>댓글 내용</CommentContent>
      </CommentContainer>
      <CommentCount>댓글 1개 모두보기</CommentCount>
      <CommentContainer>
        <CommentAuthor>댓글 작성자1</CommentAuthor>
        <CommentContent>댓글 1</CommentContent>
      </CommentContainer>
    </CommentsContainer>
  );
}

export default Comments;
