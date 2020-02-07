import React, { useEffect, useState, useContext } from 'react';
import { DestinationContext } from '../context';
import Title from './Title';
import DiscountPopup from './DiscountPopup';
import asari from '../images/Asari.png';
import salarian from '../images/salarian.jpg';
import turian from '../images/turian.jpg';
import krogan from '../images/Krogan.png';

const SelectRace = () => {
  //const [raceHomeworld, setRaceHomeworld] = useState('human');
  const [showPopup, setShowPopup] = useState(false);
  const { handleRace } = useContext(DestinationContext);

  useEffect(() => {
    //popup desapears after 10 seconds
    let popupTimer = setTimeout(() => setShowPopup(false), 10000);
    //clears timeout on unmount
    return () => {
      clearTimeout(popupTimer);
    };
  }, [showPopup]);

  //image klick handler, sets race and colors the border of selected image
  const imgClickHandler = e => {
    document.querySelectorAll('.raceImages-center> img').forEach(item => {
      item.style.border = '5px solid transparent';
    });
    e.target.style.borderColor = 'var(--primaryColor)';
  };

  const buttonHandler = () => {
    //setshow discount popup
    setShowPopup(true);
  };
  // conditional rendering of discount popup component if user selects race
  let popup = null;
  if (showPopup) {
    popup = <DiscountPopup name={'Thessiaaa'} />;
  }
  return (
    <>
      <section className='raceImages'>
        <Title title='tell us who you are and get a discount for wisiting your homeplanet!' />
        <div className='raceImages-center'>
          <img src={asari} alt='asari' id='Thessia' onClick={imgClickHandler} />
          <img
            src={salarian}
            alt='salarian'
            id='Surkesh'
            onClick={imgClickHandler}
          />
          <img
            src={krogan}
            alt='krogan'
            id='Tuchanka'
            onClick={imgClickHandler}
          />
          <img
            src={turian}
            alt='Turian'
            id='Palaven'
            onClick={imgClickHandler}
          />
        </div>
        <button
          className='btn-primary'
          onClick={() => {
            handleRace();
          }}
        >
          select
        </button>
      </section>

      {popup}
    </>
  );
};

export default SelectRace;
