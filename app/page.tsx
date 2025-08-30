import CompanyBasics from "@/features/form/components/composites/CompanyBasics";
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
    </div>
  );
};

export default page;
