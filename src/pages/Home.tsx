import React from "react";
import { ArguementHot } from "../components/arguement/Item";

const polls = [
    {name: '된다', percentage: 67, fill:"#8884d8"},
    {name: '안된다', percentage: 33, fill:"#82ca9d"},
];

const comments = [
    {"id":343, "content": "그럴거면 그냥 결혼해라", "like":98, "dislike":12, "userMbti":"INFP"},
    {"id":344, "content": "깻잎이 뭔 대수냐 아까워서 잡아준거다", "like":98, "dislike":12, "userMbti":"ENTP"}
];

const arguement = {
    "id":1,
    "title":"꺳잎논쟁",
    "content":"연인이 다른 이성의 깻잎을 잡아줘도 된다 vs 안된다 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
}


function HomeContent():React.ReactElement {
    /**
     * 홈페이지 대문 컴포넌트
     */

    return (
        <div className="wrapper">
            <ArguementHot arguement={arguement} comments={comments} polls={polls}/>
        </div>
    );
}

export default HomeContent;
