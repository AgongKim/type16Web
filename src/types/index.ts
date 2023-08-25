export type Mbti = {
    name:string;
    title:string;
    description:string;
    imageUrl:string;
}

export type CommentItem= {
    id: number;
    content: string;
    userMbti: string;
    like: number;
    dislike: number;
};

export type Poll = {
    name:string;
    percentage:number;
    fill:string;
}

export type MatchItem = {
    name:string;
    score:number;
    fill:string;
}


export type ArguementItem = {
    id?:number;
    title:string;
    content:string;
}

export type WordCloudProp = {
    text:string;
    value:number;
}
