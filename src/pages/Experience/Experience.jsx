import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import FIcons from "../../components/FIcons/FIcons";
import { ThemeContext } from "../../components/Header/Header";
import s from "./Experience.module.css";

const roles = [
  {
    period: "Feb 2026 - Present · 9 mos",
    company: "Wydział Matematyki i Informatyki UAM",
    location: "Poznań, Wielkopolskie, Poland · Hybrid",
    title: "Python Software Engineer | Application Support and Development Laboratory",
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
    summary: "Building AI-powered products as part of a five-person Agile team.",
    responsibilities: [
      "Collaborating with five team members through Slack and Jira.",
      "Developing responsive interfaces and data visualisations.",
      "Connecting frontend experiences with REST APIs and cloud services.",
    ],
    stack: "React, Redux, Recharts, TypeScript, REST API, AWS (Amplify)",
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
