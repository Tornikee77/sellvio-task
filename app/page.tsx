import CompanyBasics from "@/features/form/components/composites/CompanyBasics";
import ExtraMedia from "@/features/form/components/composites/ExtraMedia";
import GoalCreatores from "@/features/form/components/composites/GoalCreatores";
import Platforms from "@/features/form/components/composites/Platforms";
import Companys from "@/features/landing/components/composites/Companys";
import Header from "@/features/landing/components/composites/Header";

const page = () => {
  return (
    <div>
      <Header />
      <Companys />
      <CompanyBasics />
      <Platforms />
      <GoalCreatores />
      <ExtraMedia />
    </div>
  );
};

export default page;
