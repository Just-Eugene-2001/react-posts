import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPosts } from '../../redux/posts';

import CatalogList from '../../containers/catalog-list';
import Wrapper from '../../components/wrapper';
import LayoutHead from '../../components/layout-head';
import Menu from '../../components/menu';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const callbacks = {
  }

  return (
    <Wrapper>
      <Menu/>
      <LayoutHead title='Список постов'/>
      {/* <CatalogFilter/> */}
      <CatalogList/>
    </Wrapper>
  )
}

export default React.memo(Main);
