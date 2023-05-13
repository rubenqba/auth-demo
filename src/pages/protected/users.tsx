import { useSession } from "next-auth/react";
import Layout from "../layout";
import AccessDenied from "@components/access-denied";
import { useEffect, useState } from "react";
import { UserDataResponse } from "@api/users";
import { UserFilter } from "@components/user-filter";

const UsersApi = () => {
  const { status } = useSession();
  const [selector, setSelector] = useState<boolean>(false);
  const [content, setContent] = useState<UserDataResponse>();

  // Fetch content from protected route
  useEffect(() => {
    const fetchSingleData = async () => {
      const res = await fetch(
        `/api/users?id=${Math.floor(Math.random() * 10) + 1})}`
      );
      const json = (await res.json()) as UserDataResponse;
      setContent(json);
    };
    const fetchMultipleData = async () => {
      const res = await fetch("/api/users");
      const json = (await res.json()) as UserDataResponse;
      setContent(json);
    };
    if (selector) {
      fetchMultipleData();
    } else {
      fetchSingleData();
    }
  }, [selector]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <div className="w-screen">
      <UserFilter onSubmit={(f) => setSelector(f.isSingle)} />
      <div className="box-content p-4 border-4 ">
        <pre className="shadow-md">{JSON.stringify(content, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UsersApi;
