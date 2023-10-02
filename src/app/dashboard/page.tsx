import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return <div>{user.email}</div>;
};

export default Page;
