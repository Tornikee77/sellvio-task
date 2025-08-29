import { ProgressDashProps } from "../../types";
import { motion } from "motion/react";

const ProgressDash: React.FC<ProgressDashProps> = ({
  currentAmount,
  goalAmount,
}) => {
  const percentage = Math.min((currentAmount / goalAmount) * 100, 100);

  return (
    <div className="mx-auto w-full">
      <div className="flex justify-between mb-[3px] w-full">
        <p className="font-medium text-[12px]">ბიუჯეტი</p>
        <p className="font-medium text-[14px]">
          ${goalAmount - currentAmount} დარჩა
        </p>
      </div>
      <div className="bg-[#E6E7EB] rounded-full w-full h-2 overflow-hidden">
        <motion.div
          className="bg-[#8265FF] rounded-full h-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressDash;
