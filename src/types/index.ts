
export type CommentItem= {
    id: number;
    content: string;
    user_mbti: string;
    like: number;
    dislike: number;
};

export type Poll = {
    name:string;
    percentage:number;
    fill:string;
}

export type ArguementItem = {
    id?:number;
    title:string;
    content:string;
}