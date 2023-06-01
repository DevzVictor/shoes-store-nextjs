import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2x1 font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>

          <div className="text-sm md:text-md font-medium text-black/[0.5 block md:hidden]">
            Sapato de Golf Masculino
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            R$ 500,00
          </div>
        </div>

        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          men golf shoes
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Tamanho:</div>
              <select className="hover:text-black">
                <option value="1">BR 38</option>
                <option value="2">BR 39</option>
                <option value="3">BR 40</option>
                <option value="4">BR 41</option>
                <option value="5">BR 42</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantidade:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
