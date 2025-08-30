"use client";
import { useForm } from "react-hook-form";
import { CompanyFormValues, companySchema } from "../../shcema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const CompanyDetails = () => {
  const {
    register,
    formState: { errors },
  } = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
  });

  return (
    <div className="max-w-[1222px] w-full bg-transparent mx-auto  rounded-[8px] px-[30px] py-[30px] flex flex-col border">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Image
            src="/images/svg/CompanyDetails.svg"
            width={22}
            height={22}
            alt="logo"
          />
          <h2 className="text-[27px] font-[600] text-[#000000]">
            კამპანიის დეტალები
          </h2>
        </div>
        <p className="text-[#000000AD] text-[14px]">
          კამპანიის მოთხოვნები და დამატებითი კონფიგურაცია
        </p>
      </div>
      <form>
        <div>
          <h3 className="text-[#000000] font-[700] text-[18px] mb-4">
            სამიზნე აუდიტორია
          </h3>
          <div>
            <label className="block mb-1 text-sm font-medium"></label>
            <input
              type="text"
              placeholder="მაგ: ტექნოლოგიების მოყვარული, 18-35 წლის"
              {...register("auditory")}
              className="w-[543px] border rounded px-3 py-2 text-[#000000] font-[700] outline-none"
            />
            {errors.companyName && (
              <span className="text-xs text-red-500">
                {errors.companyName.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-[37px]">
          <h3 className="font-[700] text-[18px] text-[#000000] mb-4">
            კამპანიის მოთხოვნები
          </h3>
          <div>
            <label className="block mb-1 text-sm font-medium"></label>
            <textarea
              placeholder="მიუთითეთ ამ კამპანიისთვის სავალდებულო მოთხოვნები (კონტენტის სახელმძღვანელო მითითებები, შედეგები და ა.შ.)"
              {...register("requirements")}
              className="w-full border rounded px-3 py-2 text-[#000000] font-[700] outline-none"
            />
            {errors.companyName && (
              <span className="text-xs text-red-500">
                {errors.companyName.message}
              </span>
            )}
          </div>
          <h3 className="text-[#000000] font-[700] text-[18px] mb-4">
            შემქმნელის დამატებითი მოთხოვნები
          </h3>
          <div>
            <label className="block mb-1 text-sm font-medium"></label>
            <textarea
              placeholder="არასავალდებულო: შემქმნელისთვის ნებისმიერი დამატებითი მოთხოვნა (მინიმალური გამომწერები, კომტენტის სტილი და ა.შ.)"
              {...register("extraRequirements")}
              className="w-full border rounded px-3 py-2 text-[#000000] font-[700] outline-none"
            />
            {errors.companyName && (
              <span className="text-xs text-red-500">
                {errors.companyName.message}
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyDetails;
