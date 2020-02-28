import React, { useState } from 'react';
import { css, cx } from 'emotion';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import useGetEntries from '../useGetEntries';

//format data
const formatData = content => {
  let tempContent = content.map(item => {
    let name = item.fields.name;
    let text = item.fields.quote;
    let image = item.fields.image.fields.file.url;
    let contentTeam = { ...item.fields, name, text, image };
    return contentTeam;
  });

  return tempContent;
};

const TestimonialsSlider = () => {
  const [content, setContent] = useState('');
  useGetEntries('clientTestimonials', setContent, formatData);

  const [active, setActive] = useState(0);

  if (content === '') {
    return 'Loading...content.';
  }

  const clickHandler = e => {
    setActive(e.target.getAttribute('data-slide'));
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <FaAngleLeft className='sliderArrow' onClick={() => {
            setActive(prev => {
              if (prev <= 0) {
                return prev;
              }
              return prev - 1;
            });
          }} />

      <div className='slider'>
      

       

        <img src={content[active].image} alt={content[active].name} />
        <p>{content[active].quote}</p>
        <p>{content[active].name}</p>
        <div
          className={css`
      display:flex;
      span{
        width:20px;
        height:20px;
        margin:0 3px;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items: center;
       }
       span::before {
         content: "";
         width:8px;
         height: 8px;
         background-color: var(--primaryColor);
         opacity:0.6;
         transition: all 0.3s ease;
        }
        span:hover::before {
          opacity:1;
        }
        span[data-slide="${active}"]::before{
          opacity:1;
        }
      
      `}
        >
          {/*get the array of numbers for every slide that we have to map into span elements/dots */}
          {Object.keys(content).map(item => (
            <span
              key={item}
              onClick={e => clickHandler(e)}
              data-slide={item}
            ></span>
          ))}
        </div>
      </div>
      <FaAngleRight className='sliderArrow' onClick={() => {
            setActive(prev => {
              if (prev >= content.length - 1) {
                return prev;
              }
              return prev + 1;
            });
          }} />
    </div>
  );
};

export default TestimonialsSlider;
