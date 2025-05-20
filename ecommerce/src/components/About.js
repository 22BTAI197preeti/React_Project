import React from 'react'
import { useParams } from 'react-router-dom';

export const About = () => {
  const { pname } = useParams();
  return (
    <div>
      <h1>It is about Page and {pname}</h1>
    </div>
  );
};