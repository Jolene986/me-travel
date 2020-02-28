import React, { useEffect, useState, useContext } from 'react';
import { DestinationContext } from '../context';
import Title from './Title';
import DiscountPopup from './DiscountPopup';


import useGetEntries from '../useGetEntries';
// format data from Contentful
const formatData = content => {
  let tempContent = content.map(item => {
    let id = item.fields.id;
    let image = item.fields.image[0].fields.file.url;
    let contentTeam = { ...item.fields, id, image };
    return contentTeam;
  });
  
  return tempContent;
};

const SelectRace = () => {
  const [content, setContent] = useState('');
  //get and format data from Contentful
  useGetEntries('raceImage', setContent, formatData);

  const [showPopup, setShowPopup] = useState(false);
  const [race, setRace] = useState('');
  const [showSelf, setShowSelf] = useState(true);

  const { handleRace } = useContext(DestinationContext);

  useEffect(() => {
    //popup  desapears after 10 seconds
    let popupTimer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);
    //clears timeout on unmount
    return () => {
      console.log('unmount');
      clearTimeout(popupTimer);
    };
  }, [showPopup]);

  //image click handler, sets race and colors the border of selected image
  const imgClickHandler = e => {
    document.querySelectorAll('.raceImages-center > img').forEach(item => {
      item.style.border = '5px solid transparent';
    });
    e.target.style.borderColor = 'var(--primaryColor)';
    setRace(e.target.id);
  };

  const buttonHandler = e => {
    //SelectRace component  desapears after 10 seconds
    setTimeout(() => {
      setShowSelf(false);
    }, 6000);

    //setshow discount popup
    setShowPopup(true);
    // function thaht sets new destinations state
    handleRace(race);
  };
  // conditional rendering of discount popup component if user selects race
  let popup = null;
  if (showPopup) {
    popup = <DiscountPopup name={race} clicked={() => setShowPopup(false)} />;
  }
  if (showSelf === false) {
    return null;
  }
  //disable select button if no race is selected
  let bool = null;
  if (race === '') {
    bool = true;
  } else {
    bool = false;
  }
  if (content === '') {
    return 'Loading';
  }
  return (
    <>
      <section className='raceImages'>
        <Title title='tell us who you are and get a discount for wisiting your homeplanet!' />
        <div className='raceImages-center'>
          {/**Map content into images */}
          {content.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.id}
              id={item.id}
              onClick={imgClickHandler}
            />
          ))}
        </div>
        <button disabled={bool} className='btn-primary' onClick={buttonHandler}>
          select
        </button>
      </section>

      {popup}
    </>
  );
};

export default SelectRace;
