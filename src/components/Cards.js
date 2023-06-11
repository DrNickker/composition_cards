import React from 'react';
import Img from './Img';
import Content from './Content';
import data from './data';

export default function Cards() {
   
    return (
        <div className="card" style={{width: 20 +'rem'}}>
            <Img src="https://static.tildacdn.com/tild6162-6335-4565-b366-363031363961/futuristic-blue-glow.jpg" alt="environment"/>
            <Content title="Заголовок">{data[0].text}</Content>
        </div>
    )
}