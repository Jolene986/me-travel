import React from 'react';
import Title from './Title';
import tali from '../images/tali.png';
import garrus from '../images/garrus.png';
import liara from '../images/liara.png';
import legion from '../images/legion.png';
export const Team = () => {
  const services = [
    {
      image: garrus,
      title: 'Garrus Vakarian',
      info: " Can it wait for a bit? I'm in the middle of some calibrations..."
    },
    {
      image: liara,
      title: "Dr Liara T'Soni",
      info: " I'm not telling you if my hair tentacles move!"
    },
    {
      image: tali,
      title: " Tali'Zorah  ",
      info: ' Quarian tech.. Emergency... Induction... Port!'
    },
    {
      image: legion,
      title: 'Legion',
      info: ' Geth do not use windows. Structural weaknesses.'
    }
  ];
  return (
    <section className='services'>
      <Title title='Our Team' />
      <div className='services-center'>
        {services.map((item, index) => {
          return (
            <article key={index} className='service'>
              <img
                src={item.image}
                alt={'team member ' + index}
                with='250'
                height='250'
              />
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
