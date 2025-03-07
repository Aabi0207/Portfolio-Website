// src/components/SkillsTable.jsx
import React from "react";
import "./SkillTable.css";

const SkillsTable = ({id}) => {
  return (
    <section className="skills-table" id={id}>
      <div className="skills-column">
        <img src="Icons/fullstack.webp" alt="Fullstack" className="icon" />
        <h3 className="skills-title">Fullstack</h3>
        <p className="skills-description">
          I like to code things from scratch, and enjoy bringing ideas to life in the browser.
        </p>
        <p className="dev-tools-title">Dev tools:</p>
        <ul className="dev-tools-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Django</li>
          <li>Flask</li>
          <li>Postman</li>
          <li>SQL</li>
          <li>Next.js</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>

      <div className="skills-column">
        <img src="Icons/machine_learning.svg" alt="AI" className="icon" />
        <h3 className="skills-title">AI</h3>
        <p className="skills-description">
          I am passionate about AI and machine learning, finding patterns in data and building models.
        </p>
        <p className="dev-tools-title">Dev tools:</p>
        <ul className="dev-tools-list">
          <li>Jupyter Notebook</li>
          <li>PyTorch</li>
          <li>Kaggle</li>
          <li>Google Colab</li>
          <li>Hugging Face</li>
          <li>LangChain</li>
          <li>scikit-learn</li>
          <li>NumPy</li>
          <li>Pandas</li>
          <li>Matplotlib</li>
          <li>SciPy</li>
        </ul>
      </div>

      <div className="skills-column">
        <img src="Icons/data_science.svg" alt="Data Science" className="icon" />
        <h3 className="skills-title">Data Science</h3>
        <p className="skills-description">
          I enjoy analyzing data, uncovering insights, and making data-driven decisions.
        </p>
        <p className="dev-tools-title">Dev tools:</p>
        <ul className="dev-tools-list">
          <li>Pandas</li>
          <li>NumPy</li>
          <li>Matplotlib</li>
          <li>Seaborn</li>
          <li>Plotly</li>
          <li>SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsTable;
