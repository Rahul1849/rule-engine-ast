import React from 'react';
import RulesList from './components/RulesList';
import CreateRule from './components/CreateRule';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Rule Engine</h1>
      <div className={styles.rulesSection}>
        <CreateRule />
        <RulesList />
      </div>
    </div>
  );
};

export default App;
