import React from "react";
import Feed from "components/Feed";

function Home() {
  // 더미 데이터 생성 (실제로는 django에서 불러오는 데이터)

  const data = [
    {
      id: 1,
      file: "https://mblogthumb-phinf.pstatic.net/MjAyMTExMTlfMTg2/MDAxNjM3MjU1MjI4NjA2.8KNWjaT6V2G3ICdVK9XvBVdbGaZx_hvWMGqBois31Kgg.S14Oy2mp2UYsHgtJeAZFkakh8Cf0BnZScGmB57LSpsIg.JPEG.letyourselfglow/IMG_1583.jpg?type=w800",
      caption: "데이터1",
      user: {
        username: "dev1",
        profileImg:
          "https://mblogthumb-phinf.pstatic.net/MjAyMTExMTlfMTg2/MDAxNjM3MjU1MjI4NjA2.8KNWjaT6V2G3ICdVK9XvBVdbGaZx_hvWMGqBois31Kgg.S14Oy2mp2UYsHgtJeAZFkakh8Cf0BnZScGmB57LSpsIg.JPEG.letyourselfglow/IMG_1583.jpg?type=w800",
      },
      likes: 100,
      commentNumber: 11,
      isLiked: true,
      comments: [
        {
          id: 11,
          payload: "첫 번째 댓글",
          user: {
            username: "댓글작성자1",
            profileImg:
              "https://media.istockphoto.com/id/627540386/ko/%EC%82%AC%EC%A7%84/%EB%B0%B1%EB%91%90%EC%82%B0%ED%98%B8%EB%9E%91%EC%9D%B4.jpg?s=612x612&w=0&k=20&c=GOpE37E0hWQ2_M6RAmznGhZal5H_zMx5r_1iu-FaF8o=",
          },
        },
      ],
    },

    {
      id: 2,
      file: "https://cdn.eyesmag.com/content/uploads/posts/2020/05/06/%EC%84%A0%EB%8D%B0%EC%9D%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%20ep6_01_%EC%88%98%EC%A0%95-72d0c70d-1a58-41e0-9b48-7a81232cadf5.png",
      caption: "데이터2",
      user: {
        username: "dev2",
        profileImg:
          "https://cdn.maily.so/202212/trendaword/1670286682334195.png",
      },
      likes: 200,
      commentNumber: 22,
      isLiked: true,
      comments: [
        {
          id: 11,
          payload: "두 번째 댓글",
          user: {
            username: "댓글작성자2",
            profileImg:
              "https://media.istockphoto.com/id/627540386/ko/%EC%82%AC%EC%A7%84/%EB%B0%B1%EB%91%90%EC%82%B0%ED%98%B8%EB%9E%91%EC%9D%B4.jpg?s=612x612&w=0&k=20&c=GOpE37E0hWQ2_M6RAmznGhZal5H_zMx5r_1iu-FaF8o=",
          },
        },
      ],
    },

    {
      id: 3,
      file: "https://www.jungle.co.kr/image/ea06cd0346fa8777cb624e3f",
      caption: "데이터3",
      user: {
        username: "dev3",
        profileImg: "https://newsimg.sedaily.com/2019/01/23/1VE5F3W5WP_18.png",
      },
      likes: 300,
      commentNumber: 33,
      isLiked: true,
      comments: [
        {
          id: 11,
          payload: "세 번째 댓글",
          user: {
            username: "댓글작성자3",
            profileImg:
              "https://media.istockphoto.com/id/627540386/ko/%EC%82%AC%EC%A7%84/%EB%B0%B1%EB%91%90%EC%82%B0%ED%98%B8%EB%9E%91%EC%9D%B4.jpg?s=612x612&w=0&k=20&c=GOpE37E0hWQ2_M6RAmznGhZal5H_zMx5r_1iu-FaF8o=",
          },
        },
      ],
    },
  ];

  return (
    <>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </>
  );
}

export default Home;
