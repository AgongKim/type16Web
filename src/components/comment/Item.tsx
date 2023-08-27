import {TableCell,TableRow} from "@mui/material";
import { CommentItem } from "../../types";

export function ArguementCommentItem(props:CommentItem):React.ReactElement {
    /**
     * 논쟁 댓글 
     */
    return (
        <TableRow key={props.id}>
            <TableCell component="th" scope="row">
                {props.content}
            </TableCell>
            <TableCell>{props.userMbti}</TableCell>
            <TableCell>{props.like}</TableCell>
            <TableCell>{props.dislike}</TableCell>
        </TableRow>
    );
}