import * as React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimalsTable from "@/components/business/AnimalsTable";


const AnimalsPage = () => {
  return (
    <>
      <Header />
      <AnimalsTable />
      <Footer />
    </>
  );
};

export default AnimalsPage;
