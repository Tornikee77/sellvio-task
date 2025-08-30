import CompanyBasics from "@/features/form/components/composites/CompanyBasics";
import Companys from "@/features/landing/components/composites/Companys";
import Header from "@/features/landing/components/composites/Header";
import CompanysCard from "@/features/landing/components/primitives/CompanysCard";

const page = () => {
  return (
    <div>
      <Header />
      <Companys />
      <CompanyBasics />
    </div>
  );
};

export default page;
