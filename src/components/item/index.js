import React from 'react';
import propTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

function Item({ username, title, link }) {

  return (
    <div className='Item'>
      <div className='Item-username'>id Пользователя: {username}</div>
      <div className='Item-title'>{title}</div>
      <Link to={link} className='Item-open'>Открыть</Link>
    </div>
  )
}

Item.propTypes = {
  username: propTypes.number,
  title: propTypes.string,
  link: propTypes.string,
}

Item.defaultProps = {
  username: 1,
  title: 'Название',
  link: '/',
}

export default React.memo(Item);
