import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>Multifib:  </p>
      <p>Imie i nazwisko: Karol Franczyk</p>
      <p>Gr. dziekańska: I2S.2</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};
