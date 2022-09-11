import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async function() {
    // ?_start=0&_limit=10
    const json = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());

    return json;
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    count: 0,
    data: [],
    waiting: false,
    error: null,
    page: 1,
  },
  reducers: {
    pagination(state, action) {
      state.page = action.payload;
    }
  },
  extraReducers: {
    [loadPosts.pending]: (state) => {
      state.waiting = true;
      state.error = null;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.waiting = false;
      state.data = action.payload;
      state.count = action.payload.length;
    },
    [loadPosts.rejected]: (state, action) => {
      state.waiting = false;
      state.error = action.payload;
    },
  }
})

export const { pagination } = postsSlice.actions;
export default postsSlice.reducer;
