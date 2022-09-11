import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.scss';

function PostCard({post}) {
  const cn = bem('PostCard');

  return (
    <div className={cn()}>
      <div className={cn('userId')}>
        <b>userId: </b>
        {post.userId}
      </div>
      <div className={cn('title')}>
        <b>Заголовок: </b>
        {post.title}
      </div>
      <div className={cn('body')}>
        <b>Основное: </b>
        {post.body}
      </div>
    </div>
  )
}

PostCard.propTypes = {
  post: propTypes.object.isRequired,
}

PostCard.defaultProps = {
  post: {},
}

export default React.memo(PostCard);
