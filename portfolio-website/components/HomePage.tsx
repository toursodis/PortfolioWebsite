import { portfolioData } from "@/lib/PortfolioInfo";
import PageTitle from "./PageTitle";

const HomePage = () => {
    const data=portfolioData
  return (
    <div className="space-y-16">
      <header className="text-center pt-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {data.name}
        </h1>
        <h2 className="mt-3 text-xl sm:text-2xl font-light text-cyan-400">
          {data.title}
        </h2>
      </header>

      <section id="about">
        <PageTitle title="About Me" icon="user" />
        <p className="text-lg leading-relaxed text-gray-300">{data.profile}</p>
      </section>

      <section id="skills">
        <PageTitle title="Core Skills" icon="code" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">
              Frontend & Core Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {data.skills.primary.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-cyan-300 text-md font-medium px-4 py-2 rounded-full shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">
              Supporting Skills & Tools
            </h4>
            <div className="flex flex-wrap gap-3">
              {data.skills.secondary.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="interests">
        <PageTitle title="Future Interests" icon="sparkles" />
        <div className="grid md:grid-cols-3 gap-6">
          {data.interests.map((interest) => (
            <div
              key={interest.title}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <h4 className="font-bold text-lg text-cyan-400 mb-2">
                {interest.title}
              </h4>
              <p className="text-gray-400">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
