import { fetchCards } from '@/app/Reducers/CardSlice';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DisplayCard = () => {
    const dispatch = useDispatch();
    const cardLists = useSelector((state) => state.cardReducer.cards)
    let start = 0, end=5;
    useEffect(()=>{
        dispatch(fetchCards())
    },[dispatch]);
    console.log(cardLists)
    const popular = cardLists
    console.log('cardLists')
    return (
      <div className="w-full lg:w-[800px] xl:w-[1068px] h-full mx-auto">
        <div>
          <h1>Popular</h1>
          <div>
            
          </div>
        </div>

        <div className="w-full flex gap-5">
          {cardLists &&
            cardLists.slice(start, end).map((food, index) => {
              return food.IsPopular ? (
                <div key={index} className="w-[204px] h-[300px]">
                  <div className="w-[204px] h-[271px] rounded-[10px] overflow-hidden">
                    <Image
                      src={food.ImageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                      width={204}
                      height={271}
                    ></Image>
                  </div>
                  <h1 className="text-center text-gray-600">{food.Name}</h1>
                </div>
              ) : (
                ""
              );
            })}
        </div>
      </div>
    );
};

export default DisplayCard;