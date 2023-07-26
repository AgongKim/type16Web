import React from "react";
import Tagcloud from "../components/about/wordcloud";
import { wordFreq } from "../components/about/wordcloud";
import { useParams } from 'react-router-dom';


function AboutContent():React.ReactElement {
    /**
     * 홈페이지 대문 컴포넌트
     */
    let { mbti } = useParams();


    const totoAfricaLyrics = `개인주의 자유주의 이성적 이상주의 창의력 개성적 뛰어난 언변 직설적 브레인 스토밍 즉흥적 낙천적 솔직함 개방적 사고 모험 논리적 사고 변화와 혁신 직관적 사고 다원주의 자기애 독립성 독창성 몽상가 기질 자존감 논쟁과 토론 객관적 융통성 공격적 비판 스포트라이트 재미 반골 기질`;
    const words = wordFreq(totoAfricaLyrics);

    return (
        <div className="wrapper">
            {mbti}
            <Tagcloud width={500} height={500} words={words}/>
        </div>
    );
}

export default AboutContent;
