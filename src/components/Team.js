import React, { useState } from 'react';
import Title from './Title';

import useGetEntries from '../useGetEntries';

//format data
const formatData = content => {
  let tempContent = content.map(item => {
    let name = item.fields.name;
    let quote = item.fields.quote;
    let image = item.fields.image.fields.file.url;
    let contentTeam = { ...item.fields, name, quote, image };
    return contentTeam;
  });
  
  return tempContent;
};

export const Team = () => {
  const [content, setContent] = useState('');
  //get and format data from Contentful
  useGetEntries('teamMembers', setContent, formatData);

  if (content === '') {
    return 'loading...';
  }

  return (
    <section className='services'>
      <Title title='Our Team' />
      <div className='services-center'>
        {content.map((item, index) => {
          return (
            <article key={index} className='service'>
              <img
                src={item.image}
                alt={'team member ' + index}
                with='250'
                height='250'
              />
              <h6>{item.name}</h6>
              <p>{item.quote}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
