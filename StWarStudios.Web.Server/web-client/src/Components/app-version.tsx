import React, { useState, useEffect } from 'react';

export const AppVersion = () => {
  const [version, setVersion] = useState<string | null>(null);
  const [build, setBuild] = useState<string | null>(null);

  useEffect(() => {
    fetch('/version.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        if (lines.length >= 2) {
          setVersion(lines[0].trim());
          setBuild(lines[1].trim());
        }
      })
      .catch(error => console.error('Error loading version:', error));
  }, []);

  return (
      <>{version ?? 'N/A'} {build ?? 'N/A'}</>
  );
};
