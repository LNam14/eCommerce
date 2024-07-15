"use client"
import { useEffect, useState } from 'react';
import LayoutComponent from '@/components/Layout/layout';
import LoadingPage from '@/components/Loading/loading';
import HomePage from './pages/Home/home';


const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <LayoutComponent>
          <HomePage />
        </LayoutComponent>
      )}
    </div>
  );
};

export default Page;
