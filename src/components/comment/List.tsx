import React from "react";
import {Table,TableBody,TableContainer, Paper} from "@mui/material";
import {ArguementCommentItem} from "./Item";
import { CommentItem } from "../../types";


export function ArguementCommentList(props:{items:CommentItem[]}):React.ReactElement {
    /**
     * 논쟁 댓글 리스트
     */
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {props.items.map((row) => (
                        <ArguementCommentItem 
                            id={row.id}
                            content={row.content}
                            user_mbti={row.user_mbti}
                            like={row.like}
                            dislike={row.dislike}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
