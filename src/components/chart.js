import React from 'react';
import sum from 'lodash.sum';
import round from 'lodash.round';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function getAverage(data){
    return round((sum(data)/data.length), 2);
}

export default (props) => {
    return (
        <div>
            <Sparklines 
                height={120} 
                width={180} 
                data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div> 5-Day Average {props.name}: {getAverage(props.data)} {props.units}</div>
        </div>
    );
}