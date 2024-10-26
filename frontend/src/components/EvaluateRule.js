import React, { useState } from 'react';
import { evaluateRule } from '../api';
import styles from './EvaluateRule.module.css';

const EvaluateRule = () => {
  const [ruleId, setRuleId] = useState('');
  const [result, setResult] = useState('');

  const handleEvaluate = (e) => {
    e.preventDefault();
    evaluateRule(ruleId)
      .then((response) => {
        setResult(response.data.result);
        setRuleId('');
      })
      .catch((error) => {
        setResult('Error evaluating rule');
        console.error('Error evaluating rule:', error);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleEvaluate}>
      <input
        type="text"
        placeholder="Enter Rule ID"
        value={ruleId}
        onChange={(e) => setRuleId(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Evaluate Rule
      </button>
      {result && <div className={styles.result}>Result: {result}</div>}
    </form>
  );
};

export default EvaluateRule;
