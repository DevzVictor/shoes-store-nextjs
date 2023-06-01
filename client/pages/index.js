import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[900px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Amortecimento para suas corridas
          </div>
          <div className="text-md md:text-xl">
            O Nike ZoomX e leve é combinado com uma palmilha aumentada para
            ajudar a fornecer amortecimento durante trechos prolongados de
            corridas.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </Wrapper>
    </main>
  );
}
