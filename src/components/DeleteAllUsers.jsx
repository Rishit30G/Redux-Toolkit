import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearUsers } from '../store/slices/UserSlice';

export const DeleteAllUsers = () => {

   const dispatch = useDispatch();

   const deleteUsers = () => {
    //   console.log('delete all users');
      dispatch(clearUsers());
   }

  return (
      <button className="btn" style={{marginTop: '10px'}} onClick={deleteUsers}> Clear Users </button>
  )
}