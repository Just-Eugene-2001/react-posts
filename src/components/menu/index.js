import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname'
import { Link } from 'react-router-dom';
import './style.scss';

function Menu() {
  const cn = bem('Menu');

  return (
    <div className={cn()}>
      <Link to={'/'}>Главная</Link>
    </div>
  )
}

Menu.propTypes = {
}

Menu.defaultProps = {
}

export default React.memo(Menu);
