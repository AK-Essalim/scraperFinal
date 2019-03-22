import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

//Custom Hook

function useScrapes() {
  //This is the initial state inside the Hook
  const [scrapes, setScrapes] = useState({
    twitter: [],
    instagram: []
  });

  //The Fetch function
  async function fetchScrapes() {
    const res = await fetch('http://localhost:2093/Data');
    const data = await res.json();
    //console.log(data);
    setScrapes(data);
  }
  //DidMount / Update

  useEffect(() => {
    fetchScrapes();
  }, []);
  return { scrapes, fetchScrapes };
}

export default function Page({ children }) {
  const hookInfo = useScrapes();

  return (
    <ScrapeProvider value={hookInfo}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
