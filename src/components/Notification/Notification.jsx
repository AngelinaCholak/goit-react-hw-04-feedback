import React from 'react';
import css from 'components/Statistics/statistics.module.css';
const Notification = ({ message }) => {
  return <p className={css.noFeedback}>{message}</p>;
};

export default Notification;
