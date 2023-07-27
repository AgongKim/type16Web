import React, { useLayoutEffect, useRef, useState } from 'react';
import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';
import { MutableRefObject } from 'react';

interface ExampleProps {
    showControls?: boolean;
    words:WordData[];
}

export interface WordData {
    text: string;
    value: number;
}

type SpiralType = 'archimedean' | 'rectangular';

const colors = ['#143059', '#2F6B9A', '#82a6c2'];


export function wordFreq(text: string): WordData[] {
    const words: string[] = text.replace(/\./g, '').split(/\s/);
    const freqMap: Record<string, number> = {};
  
    for (const w of words) {
      if (!freqMap[w]) freqMap[w] = 0;
      freqMap[w] += 1;
    }
    return Object.keys(freqMap).map((word) => ({ text: word, value: freqMap[word] }));
}

function getRotationDegree() {
  const rand = Math.random();
  const degree = rand > 0.5 ? 60 : -60;
  return rand * degree;
}
const fixedValueGenerator = () => 0.5;


export default function Tagcloud({ showControls, words }: ExampleProps) {
    const [spiralType, setSpiralType] = useState<SpiralType>('rectangular');
    const [withRotation, setWithRotation] = useState(false);


    const fontScale = scaleLog({
        domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
        range: [10, 100],
    });
  
    const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

    const ref =useRef<any>();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, []);

    return (
        <div className="wordcloud" ref={ref}>
        <Wordcloud
            words={words}
            width={width}
            height={height}
            fontSize={fontSizeSetter}
            font={'Impact'}
            padding={2}
            spiral={spiralType}
            rotate={withRotation ? getRotationDegree : 0}
            random={fixedValueGenerator}
        >
            {
                (cloudWords) =>
                    cloudWords.map((w, i) => (
                        <Text
                        key={w.text}
                        fill={colors[i % colors.length]}
                        textAnchor={'middle'}
                        transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                        fontSize={w.size}
                        fontFamily={w.font}
                        >
                        {w.text}
                        </Text>
                    ))
            }
        </Wordcloud>
        {showControls && (
            <div>
            <label>
                Spiral type &nbsp;
                <select
                onChange={(e) => setSpiralType(e.target.value as SpiralType)}
                value={spiralType}
                >
                <option key={'archimedean'} value={'archimedean'}>
                    archimedean
                </option>
                <option key={'rectangular'} value={'rectangular'}>
                    rectangular
                </option>
                </select>
            </label>
            <label>
                With rotation &nbsp;
                <input
                type="checkbox"
                checked={withRotation}
                onChange={() => setWithRotation(!withRotation)}
                />
            </label>
            <br />
            </div>
        )}
        <style>{`
            .wordcloud {
                display: flex;
                flex-direction: column;
                user-select: none;
                width:100%;
                height:500px;
            }
            .wordcloud svg {
                margin: 1rem 0;
                cursor: pointer;
            }

            .wordcloud label {
                display: inline-flex;
                align-items: center;
                font-size: 14px;
                margin-right: 8px;
            }
            .wordcloud textarea {
                min-height: 100px;
            }
        `}</style>
        </div>
    );
}