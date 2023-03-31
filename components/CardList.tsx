import React from 'react';
import Card from './Card';
import data from '../Submissions/members.json';

function CardList() {
  return (
    <div className='flex'>
      {data.map((member, index) => (
        <Card name={member.name} github={member.links.github} pfp={member.img} mail={member.email} title={member.title} stack={member.stack}/>
      ))}
    </div>
  );
}

export default CardList;