import { PageRequest } from "@model/common";
import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import Layout from "../layout";
import AccessDenied from "@components/access-denied";
import { useEffect, useState } from "react";

const DataApi = () => {
  const { data: session, status } = useSession({ required: true });
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/users");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <div className="w-full">
      <div className="box-content h-100 w-full p-4 border-4 ">
        <pre className="shadow-md">{JSON.stringify(content, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DataApi;
