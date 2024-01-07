import { fetchCards } from '@/app/Reducers/CardSlice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const DisplayCard = () => {
    const dispatch = useDispatch();
    const cardLists = useSelector((state) => state.cardReducer.cards)
    const [start , setStart] = useState(0);
    const [end , setEnd] = useState(5);

    const [addItem, setAddItem] = useState(false)
    const [start2 , setStart2] = useState(0);
    const [end2 , setEnd2] = useState(5);
    useEffect(()=>{
        dispatch(fetchCards())
    },[dispatch]);
    console.log(cardLists)
    const popular = cardLists
    console.log('cardLists')


    const arrowBack = () => {
      let keep1 = start , keep2 = end;
      if(start)
        {--keep1; --keep2;}
        setStart(keep1);
        setEnd(keep2);

    }

    const arrowFront = () => {
       let keep1 = start,keep2 = end;
      if(end < cardLists.size)
        {++keep1; ++keep2}
      
      setStart(keep1);
      setEnd(keep2);
      
    }

    const handleNewItem = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const price = event.target.price.value;
      const popular = event.target.popular.value;
      const recommended = event.target.recommended.value;
      const image = event.target.image.value;

console.log(name,price,popular,image)
    }
    
    
    return (
      <div className="w-full lg:w-[800px] xl:w-[1068px] h-full mx-auto mt-[137px] mb-[236px]">
        <div className="w-full flex justify-between">
          <h1 className="text-xl text-gray-600">Popular</h1>
          <div className="flex">
            <h1 className="text-orange-600">AddMore</h1>
            <button onClick={arrowBack}>
              <IoIosArrowBack />
            </button>
            <button onClick={arrowFront}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="w-full flex gap-5">
          {cardLists &&
            cardLists
              .filter((food) => food.IsPopular == true)
              .slice(start, end)
              .map((food, index) => (
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
              ))}
        </div>

        <div className="w-full flex justify-between mt-10">
          <h1 className="text-xl text-gray-600">Recommended</h1>
          <div className="flex">
            <h1 className="text-orange-600">AddMore</h1>
            <button onClick={arrowBack}>
              <IoIosArrowBack />
            </button>
            <button onClick={arrowFront}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="w-full flex gap-5">
          {cardLists &&
            cardLists
              .filter((food) => food.IsRecommended == true)
              .slice(start, end)
              .map((food, index) => (
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
              ))}
        </div>

        <div
          onClick={() => setAddItem(!addItem)}
          className="w-[177px] h-[44px] bg-orange-600 md:rounded-[15px] flex justify-center items-center gap-2"
        >
          <h1 className=" text-white">Add New Item</h1>
          <FaPlus className="text-white" />
        </div>

        {addItem && (
          <div>
            {/* <input type="checkbox" id="view-modal" class="modal-toggle" /> */}
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box bg-orange-400">
                <form onSubmit={handleNewItem}>
                  <h3 class="font-bold text-xl text-white">Enter Name</h3>
                  <input type="text" name="name" id="" />
                  <h3 class="font-bold text-xl text-white">Price</h3>
                  <input type="number" name="price" id="" />
                  <h3 class="font-bold text-xl text-white">
                    Is it a popular item?
                  </h3>
                  <select name="popular" id="">
                    <option value="popular_true">True</option>
                    <option value="popular_false">False</option>
                  </select>
                  <h3 class="font-bold text-xl text-white">
                    Is it a recommended item?
                  </h3>
                  <select name="recommended" id="">
                    <option value="recommended_true">True</option>
                    <option value="recommended_false">False</option>
                  </select>
                  <h3 class="font-bold text-xl text-white">Enter Image URL</h3>
                  <input type="text" name="image" id="" />

                  <div className="flex gap-5">
                    <input
                      type="submit"
                      value="Submit"
                      className="bg-white hover:bg-orange-500 text-orange-600 hover:text-white w-[60px] rounded "
                    />
                    <div class="modal-action">
                      <label
                        for="view-modal"
                        class="px-2 rounded btn bg-white hover:bg-orange-500 text-orange-600 hover:text-white"
                      >
                        Close
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default DisplayCard;