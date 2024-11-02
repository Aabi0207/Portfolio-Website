import React from 'react';
import './SkillTable.css';
import dataScienceIcon from './data-science-icon.png';
import machineLearningIcon from './machine-learning-icon.png';
import fullstackIcon from './fullstack-icon.png';

const SkillsTable = () => {
  const skills = [
    {
      title: 'Data Science',
      description:
        'I like doing complex data analysis to uncover relationships between different aspects of data.',
      tools: ['Pandas', 'NumPy', 'Matplotlib', 'SciPy', 'Seaborn', 'Plotly'],
      icon: dataScienceIcon,
    },
    {
      title: 'Machine Learning',
      description:
        'I love ML for its potential to reveal patterns in data, transforming our understanding and interactions.',
      tools: [
        'Jupyter Notebook',
        'TensorFlow',
        'Keras',
        'SciPy',
        'Scikit-learn',
        'Pandas',
        'XGBoost',
        'LightGBM',
        'CatBoost',
        'Optuna',
        'Hyperopt',
      ],
      icon: machineLearningIcon,
    },
    {
      title: 'Fullstack Development',
      description:
        'I enjoy coding from scratch and bringing ideas to life in the browser.',
      tools: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Flask',
        'Django',
        'Node.js',
        'Express.js',
        'MongoDB',
        'React.js',
        'Next.js',
        'Bootstrap',
        'Tailwind',
      ],
      icon: fullstackIcon,
    },
  ];

  return (
    <div className="skills-table-container">
      <div className="skills-table">
        {skills.map((skill, index) => (
          <div key={index} className="skills-card">
            <img src={skill.icon} alt={`${skill.title} Icon`} />
            <div className="skills-card-title">{skill.title}</div>
            <div className="skills-card-desc">{skill.description}</div>
            <div className="skills-card-tools">
              <strong>Dev tools:</strong>
              <ul>
                {skill.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTable;
