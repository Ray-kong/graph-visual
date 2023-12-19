import React from "react";

function Error() {
  document.title = "Page Not Found";

  return (
    <div className="min-w-screen min-h-screen">
      <h1 className="text-white text-center pt-10">Error! Page Not Found</h1>
    </div>
  );
}

export default Error;
