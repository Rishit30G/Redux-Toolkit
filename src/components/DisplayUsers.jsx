import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {Trash} from "@phosphor-icons/react"
import { removeUser } from '../store/slices/UserSlice';


const DisplayUsers = () => {


    const dispatch = useDispatch();
    //state of the complete store is brought here
    // It is getting the data from the Provider that we 
    // have made in the  main.jsx
    const data = useSelector((state) => {
        return state.users;
    });

    // console.log(data);

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }


  return (
    <Wrapper>
    {
       data.map((user, id) => {
         return <li key={id}>
            {user}
            <button onClick={() => deleteUser(id)}>
            <Trash size={28} color="#e76767" weight="bold"/>
            </button>
         </li>
       })
    }
    </Wrapper>
  )
}

const Wrapper = styled.section`
    li{
        width: 100%;
        display: flex;
        align-items: center; 
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #eee;

        &:first-child{
            border-top: 1px solid #eee;
        }
    }
`
export default DisplayUsers;