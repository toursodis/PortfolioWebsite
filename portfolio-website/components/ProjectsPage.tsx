import { portfolioData } from "@/lib/PortfolioInfo";
import PageTitle from "./PageTitle";
import Link from "next/link";

const ProjectsPage = () => {
  const data = portfolioData;
  return (
    <div>
      <PageTitle title="My Projects" icon="briefcase" />
      <div className="space-y-10">
        {data.projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              <Link href={project.address}>
              {project.title}
              </Link>
            </h3>
            <p className="text-gray-400 mt-1 mb-4">{project.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-5">
              {project.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-600">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
