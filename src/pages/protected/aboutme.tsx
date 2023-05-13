import { useSession } from "next-auth/react";
import React from "react";

const AboutMePage = () => {
  const { data: session } = useSession({ required: true });
  return (
    <div className="w-screen">
      <div className="box-content h-100 p-4 border-4 ">
        <pre className="shadow-md">
          {JSON.stringify(session?.user, null, 2)}
        </pre>
      </div>
      {/* <article className="w-full aspect-square shadow-md h-200"></article> */}
    </div>
  );
};

export default AboutMePage;
