import React, { useState } from 'react';
import { createRule } from '../api';
import styles from './CreateRule.module.css';

const CreateRule = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRule = { name, description };
    createRule(newRule)
      .then((response) => {
        console.log('Rule created:', response.data);
        setName('');
        setDescription('');
      })
      .catch((error) => console.error('Error creating rule:', error));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rule Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
      ></textarea>
      <button type="submit" className={styles.button}>
        Create Rule
      </button>
    </form>
  );
};

export default CreateRule;
