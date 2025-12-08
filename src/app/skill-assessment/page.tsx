'use client';

import React, { useState } from 'react';
import Landing from './_components/landing';
import Questions from './_components/questions';

const SkillAssessment: React.FC = () => {
  const [isLanding, setIsLanding] = useState(true);

  return (
    <main className="w-full h-full">
      {isLanding ? (
        <Landing setIsLanding={setIsLanding} />
      ) : (
        <Questions setIsLanding={setIsLanding} />
      )}
    </main>
  );
};

export default SkillAssessment;
