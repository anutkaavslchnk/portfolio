import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import FIcons from "../../components/FIcons/FIcons";
import { ThemeContext } from "../../components/Header/Header";
import s from "./Experience.module.css";

const roles = [
  {
    period: "Feb 2026 - Present · 9 mos",
    company: "Faculty of Mathematics and Computer Science of UAM",
    location: "Poznań, Poland · Hybrid",
    title:
      "Python Software Engineer | Application Support and Development Laboratory",
    summary:
      "Developing a web application for academic course planning and teaching workload management at Adam Mickiewicz University in Poznań.",
    responsibilities: [
      "Built course assignment functionality, enabling program coordinators to assign academic staff to course groups and manage teaching workloads.",
      "Automated teaching workload calculations based on assigned classes.",
      "Created individual workload reports providing detailed insights into employees' assigned courses across different study programs.",
      "Prototyped application interfaces in Figma and implemented them in the web application.",
      "Structured and extended database models using Django ORM to manage academic staff, courses, study programs and assignments.",
      "Configured authentication and role-based access control mechanisms.",
      "Implemented multilingual support using Django's internationalization.",
      "Collaborated with 8+ end users, including program coordinators, academic schedulers, a Vice-Dean and administrative staff, to gather feedback and improve application functionality and usability.",
    ],
    stack: "Python, Django, PostgreSQL, Docker, HTMX, Django ORM",
  },
  {
    period: "Jul 2024 - Present · 2 yrs 4 mos",
    company: "Startup",
    location: "Dublin, Ireland · Remote",
    title: "Fullstack AI Engineer",
    summary:
      "Data Analytics website to visualise and automate BI processes using AI chat assistants",
    responsibilities: [
      "Built responsive UI components and optimized interactive data visualizations for an AI-powered BI platform using React, TypeScript, Redux, and Recharts, reducing chart loading times by 50% when processing large datasets.",
      "Created two specialized AI agents: a data analyst for answering questions about uploaded datasets and a data visualization agent for generating charts on demand.",
      "Implemented a secure python code interpreter to execute data analysis while protecting users' private data from direct exposure to LLMs.",
      "Designed MCP tools and contributed to AI agent orchestration.",
      "Integrated LSTM capabilities and ML models into AI assistants to enable advanced dataset analysis.",
      "Engineered REST API endpoints for managing liveboards, charts, datasets and AI assistants, connecting frontend components with backend services in AWS infrastructure.",
      "Wrote unit tests for React components and application logic using Jest.",
      "Migrated from Amplify to CDK saving 100% on deployments.",
      "Introduced caching of the AI requests to generate metadata for files having the same or similar schema by only sending the delta to AI (as a result we can upload thousands of files recurrently with no cost).",
    ],
    stack:
      "React, Redux, Recharts, TypeScript, REST API, AWS (Lambda, S3, DynamoDB, RDS, ECR, CloudWatch, CDK,  Amazon Bedrock, AgentCore), Python, Docker",
  },
];

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? s.dark : ""}>
      <main className={s.page}>
        <header className={s.heading}>
          <h1>Experience</h1>
          <p className={s.intro}>
            I build reliable web applications, connect thoughtful interfaces to
            robust backends, and enjoy solving problems across the stack.
          </p>
        </header>

        <ol className={s.timeline}>
          {roles.map((role) => (
            <li key={role.title}>
              <article className={s.card}>
                <div className={s.cardTop}>
                  <div className={s.roleHeading}>
                    <h2>{role.title}</h2>
                    <p className={s.company}>
                      <span className={s.metaLabel}>Organization:</span>{" "}
                      {role.company} · Part-time
                    </p>
                    <p className={s.meta}>
                      <span className={s.metaLabel}>Period:</span>{" "}
                      {role.period}
                    </p>
                    <p className={s.meta}>{role.location}</p>
                  </div>
                  <span className={s.present}>Present</span>
                </div>
                <p className={s.summary}>{role.summary}</p>
                <ul className={s.responsibilities}>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={s.stack}>
                  <strong>Stack:</strong> {role.stack}
                </p>
              </article>
            </li>
          ))}
        </ol>

        <FIcons />
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
