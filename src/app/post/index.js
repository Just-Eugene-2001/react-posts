import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import Wrapper from '../../components/wrapper';
import LayoutHead from '../../components/layout-head';
import PostCard from '../../components/post-card';
import Menu from '../../components/menu';



function Main() {
  const params = useParams();

  const postId = params.id - 1;

  const select = useSelector(state => ({
    post: state.posts.data[postId],
  }), shallowEqual);

  return (
    <Wrapper>
      <Menu/>
      <LayoutHead title='Пост'/>
      <PostCard post={select.post}/>
    </Wrapper>
  )
}

export default React.memo(Main);
