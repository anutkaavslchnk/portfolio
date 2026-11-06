import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import FIcons from "../../components/FIcons/FIcons";
import { ThemeContext } from "../../components/Header/Header";
import s from "./Experience.module.css";

const roles = [
  {
    period: "Feb 2026 - Present · 9 mos",
    company:
      "Faculty of Mathematics and Computer Science of UAM",
    location: "Poznań, Poland · Hybrid",
    title:
      "Python Software Engineer | Application Support and Development Laboratory",
    summary:
      "Developing a web application for academic course planning and teaching workload management at Adam Mickiewicz University in Poznań.",
    responsibilities: [
      "Designing and extending data models using Django ORM.",
      "Implementing class-based views (CBVs) and business logic.",
      "Developing HTML templates using Django Template Language and HTMX.",
      "Managing database schema changes and data migrations.",
      "Implementing functionality for managing academic staff, courses, study programmes, student groups, and teaching workloads.",
      "Implementing authentication and access control mechanisms.",
    ],
    stack: "Python, Django, PostgreSQL, Docker, HTMX, Django ORM",
  },
  {
    period: "Jul 2024 - Present · 2 yrs 4 mos",
    company: "NDA",
    location: "Dublin, Ireland · Remote",
    title: "Fullstack AI Engineer",
    summary:
      "Data Analytics Website to visualise and automate BI processes using AI chat assistants",
    responsibilities: [
      "Developed responsive UI and interactive data visualizations for an AI-powered BI platform.",
      "Wrote unit tests for React components and application logic using Jest.",
      "Connected frontend application with backend services and AWS cloud infrastructure.",
      "Developed two specialized AI agents: a data analyst to answer questions about uploaded data, and a data visualization agent to generate charts on demand.",
      "Integrated a secure Python Code Interpreter to run data analysis safely behind the scenes, protecting users' private data from being directly exposed to the AI model.",
      "Implemented LSTM capabilities for AI assistants.",
      "Developed MCP tools and contributed to AI agent orchestration.",
      "Integrated ML models to let users run advanced analysis on their uploaded datasets.",
      "Developed REST API endpoints for liveboards, charts, datasets, and AI assistants.",
    ],
    stack:
      "React, Redux, Recharts, Typescript, REST API, AWS (Amplify, Lambda, S3, DynamoDB, RDS, ECR, CloudWatch, CDK, Amazon Bedrock), Python, Docker",
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
