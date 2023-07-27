import { BarChart, XAxis, YAxis, Bar, Legend, Cell, ResponsiveContainer } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import { Poll } from "../../types";
import { Match } from "../../types";

export function MatchChart(props:{items:Match[]}):React.ReactElement{

    const legendPayload:Payload[] = props.items.map(
        (item, index) => ({
            id: item.name,
            type: "square",
            value: `${item.name}`,
            color: item.fill
        }))

    return (
        <ResponsiveContainer width="100%" height={props.items.length*33 + 100}>    
            <BarChart data={ props.items } maxBarSize={ 20 } layout={ 'vertical' }>
                {/* <Legend align={ 'left' } payload={legendPayload}/> */}
                <XAxis type={ 'number' } dataKey="score" hide />
                <YAxis type={ 'category' } dataKey={ 'name' }/>
                <Bar dataKey={ 'score' } legendType={ 'circle' } radius={ 5 } label={{position:"insideRight",  fill: 'white', fontSize: 15 }}>
                    {props.items.map((entry, index) => (
                        <Cell key={entry.name} fill={entry.fill}/>
                    ))}    
                </Bar>
                {/* <Bar dataKey={ '안된다' } legendType={ 'circle' } fill={ '#82ca9d' } radius={ 5 } label={{ position:"insideRight",  fill: 'white', fontSize: 15 }}/> */}
            </BarChart>
        </ResponsiveContainer>
    )



}