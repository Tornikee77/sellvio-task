import React from "react";
import CompanyBasics from "./composites/CompanyBasics";
import CompanyDetails from "./composites/CompanyDetails";
import ExtraMedia from "./composites/ExtraMedia";
import GoalCreatores from "./composites/GoalCreatores";
import Platforms from "./composites/Platforms";
import PaymentStructure from "./composites/PaymentStructure";

const Form = () => {
  return (
    <div className="flex gap-16 flex-col">
      <CompanyBasics />
      <Platforms />
      <PaymentStructure />
      <GoalCreatores />
      <ExtraMedia />
      <CompanyDetails />
    </div>
  );
};

export default Form;
