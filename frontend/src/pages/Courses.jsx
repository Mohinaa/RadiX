import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Courses.module.css';
import NavBar from '../components/NavBar';

const Courses = () => {
  const navigate = useNavigate(); 

  const courses = [
    { name: 'Credit Score', progress: 40, path: '/credit-score' },
    { name: 'Taxes', progress: 0, path: '/taxes' },
    { name: 'Investments', progress: 20, path: '/investments' },
    { name: 'Budgeting', progress: 60, path: '/budgeting' },
  ];

  // Calculate the overall progress as the average of all course progress
  const overallProgress =
    courses.reduce((total, course) => total + course.progress, 0) / courses.length;

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Welcome to Your Courses</h1>
          <p>You’re here, and that’s already a win!</p>
        </div>

        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
          <p className={styles.progressText}>
            Overall Progress: {Math.round(overallProgress)}% Complete
          </p>
        </div>

        <div className={styles.courseList}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <h2>{course.name}</h2>
              <p>Progress: {course.progress}%</p>
              <button onClick={() => navigate(course.path)}>
                {course.progress === 0 ? 'Start Here' : 'Continue'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;



