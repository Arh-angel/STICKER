import React from 'react';

import style from './Map.module.scss';

const Map = () => {
  console.log('Map');

  return (
    <div className={style.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25037.141751332634!2d43.95456789538833!3d56.312718334544094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1634754578909!5m2!1sru!2sru" width="100%" height="457" allowFullScreen loading="lazy" title="Map" />
    </div>
  );
};

export default Map;
