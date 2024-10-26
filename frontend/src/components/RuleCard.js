import React from 'react';
import styles from './RuleCard.module.css';

const RuleCard = ({ rule }) => {
  return (
    <div className={styles.card}>
      <div className={styles.ruleName}>{rule.name}</div>
      <p className={styles.description}>{rule.description || "No description provided."}</p>
    </div>
  );
};

export default RuleCard;
