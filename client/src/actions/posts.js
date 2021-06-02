//import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
     console.log('getPost is Called from action')
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
  
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    console.log('Update Action From Action Class Before ')
    const { data } = await api.updatePost(id, post);
    console.log('Update Action From Action Class')
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
    console.log("Error from Action Class")
  }
};


export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}; 

export const deletePost = (id) => async (dispatch) => {
  try {
    console.log('Delete Post is called')
    await api.deletePost(id);
    console.log('Delete Post is end')

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
}; 
