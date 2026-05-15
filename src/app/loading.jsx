"use client";  

const LoadingPage = ( ) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
      
      <span className="loading loading-spinner text-info"></span>

    </div>
  );
};

export default LoadingPage;