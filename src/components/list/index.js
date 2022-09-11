import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

function List(props) {

  return (
    <div className='List'>{props.items.map((item, index) =>
      <div key={index} className='List-item'>
        {props.renderItem(item)}
      </div>
    )}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  renderItem: propTypes.func.isRequired
}

List.defaultProps = {
  items: [],
}

export default React.memo(List);
