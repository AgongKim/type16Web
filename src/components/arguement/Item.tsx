import React, {useEffect} from "react";
import { BarChart, XAxis, YAxis, Bar, Legend, Cell, ResponsiveContainer } from "recharts";
import Typography from "@mui/material/Typography";
import { ArguementCommentList } from "../comment/List";
import { CommentItem,ArguementItem,Poll } from "../../types";
import Hline from "../../assets/Hline";
import { Payload } from "recharts/types/component/DefaultLegendContent";


type ArguementItemProps = {
    arguement: ArguementItem;
    polls: Poll[];
    comments: CommentItem[];
}


export function ArguementHot(props:ArguementItemProps):React.ReactElement {
    /**
     * 핫한 논쟁 컴포넌트
     */
    

    const legendPayload:Payload[] = props.polls.map(
                            (item, index) => ({
                                id: item.name,
                                type: "square",
                                value: `${item.name}`,
                                color: item.fill
                            }))
      
    return (
        <div className="container">
            <div className="container-header horizontal">
                <Typography variant="h5">메인 매치</Typography>
                <Typography variant="subtitle1">더보기</Typography>
            </div>
            <Hline/>
            <div className="container-body">
                <Typography variant="h6">{props.arguement.title}</Typography>
                <div className="horizontal">
                        <ResponsiveContainer width="50%" height={props.polls.length*33 + 100}>    
                            <BarChart data={ props.polls } maxBarSize={ 20 } layout={ 'vertical' }>
                                <Legend align={ 'left' } payload={legendPayload}/>
                                <XAxis type={ 'number' } dataKey="percentage" hide />
                                <YAxis type={ 'category' } dataKey={ 'name' } hide/>
                                <Bar dataKey={ 'percentage' } legendType={ 'circle' } radius={ 5 } label={{position:"insideRight",  fill: 'white', fontSize: 15 }}>
                                    {props.polls.map((entry, index) => (
                                        <Cell key={entry.name} fill={entry.fill}/>
                                    ))}    
                                </Bar>
                                {/* <Bar dataKey={ '안된다' } legendType={ 'circle' } fill={ '#82ca9d' } radius={ 5 } label={{ position:"insideRight",  fill: 'white', fontSize: 15 }}/> */}
                            </BarChart>
                        </ResponsiveContainer>
                        <div style={{width:"50%"}}>
                            <Typography marginTop={2} variant="body1" style={{ wordWrap: "break-word" }}>
                                {props.arguement.content}
                            </Typography>
                        </div>
                </div>
                <div>
                    <ArguementCommentList items={props.comments}/>
                </div>
            </div>
        </div>
    );
}
