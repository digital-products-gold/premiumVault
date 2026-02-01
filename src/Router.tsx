import { useState, useEffect } from 'react';
import App from './App';
import { RecoverAccess } from './pages/RecoverAccess';

export default function Router() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#recover') {
    return <RecoverAccess />;
  }

  return (
    <div style={{ paddingTop: '60px' }}>
      <App />
    </div>
  );
}
