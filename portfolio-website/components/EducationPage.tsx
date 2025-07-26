import { portfolioData } from "@/lib/PortfolioInfo";
import PageTitle from "./PageTitle";

const EducationPage = () => {
  const data = portfolioData;
  return (
    <div>
      <PageTitle title="Education" icon="graduationCap" />
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {data.education.degree}
          </h3>
          <p className="text-cyan-400 text-xl">{data.education.university}</p>
          <p className="text-gray-400 mt-1">
            {data.education.location} | {data.education.duration}
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed border-t border-gray-700 pt-6">
          {data.education.details}
        </p>
        <div>
          <h4 className="text-xl font-semibold text-cyan-400 mb-4">
            Key Coursework
          </h4>
          <div className="flex flex-wrap gap-3">
            {data.education.courses.map((course) => (
              <span
                key={course}
                className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-lg shadow-md"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationPage;
