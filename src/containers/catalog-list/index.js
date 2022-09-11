import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { pagination } from '../../redux/posts';

import List from '../../components/list';
import Item from '../../components/item';
import Pagination from "../../components/pagination";
import Spinner from '../../components/spinner';

function CatalogList() {
  const dispatch = useDispatch();

  const select = useSelector(state => ({
    page: state.posts.page,
    items: state.posts.data.slice(state.posts.page * 10 - 10, state.posts.page * 10),
    waiting: state.posts.waiting,
    count: state.posts.count,
  }), shallowEqual);

  const callbacks = {
    onPaginate: useCallback(page =>  dispatch(pagination(page)), [dispatch]),
  }

  const renders = {
    item: useCallback(item => (
      <Item username={item.userId} title={item.title} link={`/post/${item.userId}/${item.id}`}/>
    ), []),
  }

  return (
    <Spinner active={select.waiting}>
      <List items={select.items} renderItem={renders.item}/>
      <Pagination count={select.count} page={select.page} onChange={callbacks.onPaginate}/>
    </Spinner>
  );
}

export default React.memo(CatalogList);
