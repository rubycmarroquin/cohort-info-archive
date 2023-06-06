import React, { useState, useEffect } from "react";
import CodeThread from "./CodeThread";

const ListChallenges = () => {
  const [allChallenges, setAllChallenges] = useState(null);

  // get request to retrieve all code challenge threads
  const loadChallenges = () => {
    fetch("http://localhost:8080/api/codechallenge")
      .then((response) => response.json())
      .then((challenges) => {
        setAllChallenges(challenges);
      });
  };

  useEffect(() => loadChallenges(), []);

  return (
    allChallenges &&
    allChallenges.map((challenge) => {
      <CodeThread
        id={challenge.code_id}
        title={challenge.title}
        date={challenge.date}
        link={challenge.link}
      />;
    })
  );
};

export default ListChallenges;
