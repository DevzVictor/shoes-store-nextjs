import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Falha no pagamento!</div>
          <div className="text-base mt-5">
            Para qualquer consulta relacionada ao produto, envie um e-mail para
          </div>
          <div className="underline">shoeshopcontact@shop.com</div>

          <Link href="/" className="font-bold mt-5">
            Continue Comprando
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Failed;
