import { CompanyStat } from "../types/company.types";

interface CompanyStatsProps {
  stats: CompanyStat[];
}

export const CompanyStats = ({ stats }: CompanyStatsProps) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-[#d09706] mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
