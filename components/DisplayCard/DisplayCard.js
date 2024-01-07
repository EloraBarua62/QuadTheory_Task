"use client";

import { additem, fetchCards } from "@/app/Reducers/CardSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const DisplayCard = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const cardLists = useSelector((state) => state.cardReducer.cards);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const [addItem, setAddItem] = useState(false);
  const [start2, setStart2] = useState(0);
  const [end2, setEnd2] = useState(5);
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);
  console.log(cardLists);

  const arrowBack = () => {
    let keep1 = start,
      keep2 = end;
    if (start) {
      --keep1;
      --keep2;
    }
    setStart(keep1);
    setEnd(keep2);
  };

  const arrowFront = () => {
    let keep1 = start,
      keep2 = end;
    if (end < cardLists.size) {
      ++keep1;
      ++keep2;
    }

    setStart(keep1);
    setEnd(keep2);
  };

  const handleNewItem = (event) => {
    event.preventDefault();
    const Name = event.target.name.value;
    const Price = event.target.price.value;
    let keep_popular = true;
    if (event.target.popular.value == "false") keep_popular = false;
    const IsPopular = keep_popular;

    let keep_recommended = true;
    if (event.target.recommended.value == "false") keep_recommended = false;
    const IsRecommended = keep_recommended;

    const ImageUrl = event.target.image.value;

    console.log(Name, Price, IsPopular, ImageUrl);

    setAddItem(!addItem);
    setOpenModal(!openModal);
    dispatch(additem({ Name, Price, IsPopular, IsRecommended, ImageUrl }));
  };

  return (
    <div className="w-full lg:w-[800px] xl:w-[1068px] h-full mx-auto mt-[137px] mb-[236px] px-5 lg:px-0">
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

      {/* Popular list */}
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

      {/* Recommended list */}
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

      {/* Add Item popup */}
      <div>
        <div
          onClick={() => setOpenModal(true)}
          className="w-[177px] h-[44px] bg-orange-600 rounded-lg flex justify-center items-center gap-2 cursor-pointer"
        >
          <h1 className=" text-white">Add New Item</h1>
          <FaPlus className="text-white" />
        </div>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div>
              <h1 className="text-2xl font-semibold text-orange-500 text-center">
                Add New Food Item
              </h1>

              {/* Add item form */}
              <form onSubmit={handleNewItem}>
                <h3 class="text-sm pt-4 text-gray-600">Enter Name</h3>
                <input type="text" name="name" id="" />
                <h3 class="text-sm pt-4 text-gray-600">Price</h3>
                <input type="number" name="price" id="" />
                <h3 class="text-sm pt-4 text-gray-600">
                  Is it a popular item?
                </h3>
                <select name="popular" id="">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                <h3 class="text-sm pt-4 text-gray-600">
                  Is it a recommended item?
                </h3>
                <select name="recommended" id="">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                <h3 class="text-sm pt-4 text-gray-600">Enter Image URL</h3>
                <input type="text" name="image" id="" />

                <div className="flex justify_center gap-5 pt-10">
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-orange-500 text-white font-semibold rounded cursor-pointer px-3 py-2"
                  />
                  <div
                    className="bg-red-600 text-white font-semibold  px-3 py-2 rounded cursor-pointer"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default DisplayCard;
