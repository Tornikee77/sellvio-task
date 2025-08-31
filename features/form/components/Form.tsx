import React from "react";
import CompanyBasics from "./composites/CompanyBasics";
import CompanyDetails from "./composites/CompanyDetails";
import ExtraMedia from "./composites/ExtraMedia";
import GoalCreatores from "./composites/GoalCreatores";
import Platforms from "./composites/Platforms";

const Form = () => {
  return (
    <div>
      <CompanyBasics />
      <Platforms />
      <GoalCreatores />
      <ExtraMedia />
      <CompanyDetails />
    </div>
  );
};

export default Form;
