import { useEffect, useState } from 'react';

export const AppVersion = () => {
  // Cambia el tipo de `useState` a `string | null`
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    fetch('/version.txt')
      .then(response => response.text())
      .then(text => setVersion(text.trim())) // Ahora acepta `string` sin problemas
      .catch(error => console.error('Error loading version:', error));
  }, []);

  return version ?? '0.1t';
};