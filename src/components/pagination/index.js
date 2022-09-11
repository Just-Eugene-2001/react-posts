import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname'
import './style.scss';

function Pagination(props) {
  const cn = bem('Pagination');
  const length = Math.ceil(props.count / 10);


  let left = Math.max(props.page - 1, 1);
  let right = Math.min(left + 1 * 2, length);
  left = Math.max(right - 1 * 2, 1);

  let items = [];
  if (left > 1) items.push(1);
  if (left > 2) items.push(null);
  for (let page = left; page <= right; page++) items.push(page);
  if (right < length - 1) items.push(null);
  if (right < length) items.push(length);

  const clickHandler = page => {
    return () => props.onChange(page);
  };

  return (
    <ul className={cn()}>
      {items.map((num, i) => num
        ? (
          <li key={i} className={cn('item', {active: num === props.page})} onClick={clickHandler(num)}>
            {num}
          </li>
        )
        : <li key={i} className={cn('item', {split: true})}>...</li>
      )}
    </ul>
  )
}

Pagination.propTypes = {
  page: propTypes.number.isRequired,
  count: propTypes.number,
  onChange: propTypes.func,
}

Pagination.defaultProps = {
  page: 1,
  count: 1000,
  onChange: () => {},
}

export default React.memo(Pagination);
