import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import React from "react";

const page = () => {
  return (
    <section className="mt-14 py-18">
      <MaxWidthWrapper>
        <div className="heading">CART</div>
        <p className="desc">
          Review and manage your cart items. Proceed to checkout for secure
          payment.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
