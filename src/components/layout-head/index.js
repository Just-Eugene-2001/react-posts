import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

function LayoutHead({title}){

  return (
    <div className='LayoutHead'>
      <h1 className='LayoutHead-title'>{title}</h1>
    </div>
  )
}

LayoutHead.propTypes = {
  title: propTypes.string,
}

LayoutHead.defaultProps = {
}

export default React.memo(LayoutHead);
