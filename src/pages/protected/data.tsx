
import { useSession } from "next-auth/react";

const DataApi = () => {
  const { data: session, status } = useSession({required: true});

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>Signed in as {session.user.email}</div>;
};

export default DataApi;