import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import React from "react";

const ProductPageId = ({ params }: { params: { id: string } }) => {
  return (
    <section className="py-18 mt-14">
      <MaxWidthWrapper>
        <div>
          <h1 className="heading">Product Page</h1>
          <p className="desc">ID: {params.id}</p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductPageId;
