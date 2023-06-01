import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font semibold mb-2">
              Jordan Retro 6 G
            </div>

            <div className="text-lg font-semibold mb-5">
              Sapato de Golf Masculino
            </div>
            <div className="text-lg font-semibold">R$ 500,00</div>

            <div className="text-md font-medium text-black/[0.5]">
              Todas as taxas incluídas
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(também inclui todas as obrigações aplicáveis)`}
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Selecione o tamanho</div>
                <div className="text-md font-medium text-black/[0.5 cursor-pointer]">
                  Select Guide
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  BR 38
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  BR 39
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  BR 40
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  BR 41
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  BR 42
                </div>
              </div>

              <div className="text-red-600 mt-1">
                Tamanho selecionado indisponível
              </div>

            </div>

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Adicionar ao carrinho
            </button>

            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Lista de Desejos
                <IoMdHeartEmpty size={20}/>
            </button>

            <div>
                <div className="text-lg font-bold mb-5">
                    Detalhes do produto
                </div>
                <div className="text-md mb-5">
                    lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut labore, sed. lorem ipsum dolor sit amet, ut labore, sed. lorem ipsum dolor sit amet,ut labore, sed. lorem ipsum dolor sit amet, ut labore, sed. lorem ipsum dolor sit amet,
                </div>
                <div className="text-md mb-5">
                    lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut labore, sed. lorem ipsum dolor sit amet, ut labore, sed. lorem ipsum dolor sit amet,ut labore, sed. lorem ipsum dolor sit amet, ut labore, sed. lorem ipsum dolor sit amet,
                </div>
            </div>
          </div>
        </div>

        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
