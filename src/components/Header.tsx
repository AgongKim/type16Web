import React from "react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";


export function Header(props:PropsWithChildren):React.ReactElement {
    /**
     * 논쟁 댓글 리스트
     */
    const mbti = 'ENTP'
    return (
        <div className="header">
            <div className="wrapper horizontal">
                <div className="tab-container horizontal">
                    <div className="logo">
                        TYPE16
                    </div>
                    <div className="tab">
                        <Link to={`/`}>
                            홈
                        </Link>
                    </div>
                    <div className="tab">
                        콜로세움
                    </div>
                    <div className="tab">
                        게시판
                    </div>
                    <div className="tab">
                        <Link to={`/about/${mbti}`}>
                            평가
                        </Link>
                    </div>
                </div>
                <div className="my-container horizontal">
                    로그인박스
                </div>
            </div>
        </div>
    );
}

export default Header