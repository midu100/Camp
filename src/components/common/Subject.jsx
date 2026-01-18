import React, { useState, useEffect } from "react";

const Subject = ({ Name }) => {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(Name.length);  // Name-এর character count state এ set
  }, [Name]);

  return (
    <p
      className="typewriterP"
      style={{ "--chars": charCount }}
    >
      {Name}
    </p>
  );
};

export default Subject;
