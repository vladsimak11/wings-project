import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header'));

function App() {
  return (  
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Header/>
    </>
  )  
}

export default App
