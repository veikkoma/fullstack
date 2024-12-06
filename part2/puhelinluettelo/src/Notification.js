import React from 'react';
import './assets/Notification.css';

const Notification = ({ message, type }) => {
  if (!message) return null;

  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
