import React from "react";

const loading = () => {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default loading;
