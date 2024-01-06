import { fetchCards } from '@/app/Reducers/CardSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DisplayCard = () => {
    const dispatch = useDispatch();
    const cardLists = useSelector((state) => state.cardReducer.cards)

    useEffect(()=>{
        dispatch(fetchCards())
    },[dispatch]);
    return (
        <div>
            {cardLists && cardLists.map((food, index ) => <h1 key={index}>{food.Name}</h1>)}
        </div>
    );
};

export default DisplayCard;