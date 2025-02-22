import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  tags?: string;
};

type BlogState = {
  posts: BlogPost[];
};

const initialState: BlogState = {
  posts: [],
};

const BlogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Omit<BlogPost, "id">>) => {
        const newPost={
            ...action.payload,
            id:Date.now().toString(),
        }
      state.posts.push(newPost);
    },
  },
});

export const { addPost } = BlogSlice.actions;

export default BlogSlice.reducer;
