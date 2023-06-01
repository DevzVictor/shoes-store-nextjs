import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Carrinho de Compras
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Items do carrinho</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="flex-[1]">
            <div className="text-lg font-bold">Resumo</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  R$ 1500,00
                </div>
              </div>

              <div className="text-sm md:text-md py-5 border-t mt-5">
                O subtotal reflete o preço total de seu pedido, incluindo taxas
                e impostos, antes de quaisquer descontos aplicáveis. faz não
                inclui custos de entrega e taxas de transações internacionais.
              </div>
            </div>

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Finalizar Comprar
            </button>
          </div>
        </div>

        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Seu carrinho está vazio</span>
          <span className="text-center mt-4">
          Parece que você não adicionou nada ao carrinho.
          <br/>
          Vá em frente e explore as principais categorias.
          </span>
          <Link href="/" className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
          Continue comprando
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
