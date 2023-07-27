import React from "react";
import { PropsWithChildren } from "react";


export function Header(props:PropsWithChildren):React.ReactElement {
    /**
     * 논쟁 댓글 리스트
     */
    return (
        <div className="header">
            <div className="wrapper horizontal">
                <div className="tab-container horizontal">
                    <div className="logo">
                        TYPE16
                    </div>
                    <div className="tab">
                        홈
                    </div>
                    <div className="tab">
                        콜로세움
                    </div>
                    <div className="tab">
                        게시판
                    </div>
                    <div className="tab">
                        평가
                    </div>
                </div>
                <div className="my-container horizontal">
                    
                </div>
            </div>
        </div>
    );
}

export default Header