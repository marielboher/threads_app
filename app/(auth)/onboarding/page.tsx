import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();

  console.log("Raw User Data:", user);

  if (!user) return null;
  console.log("User ID onboarding:", user.id);

  const userInfo = {};
  if (userInfo?.onboarded) redirect("/");

  if (!userInfo) {
    console.warn("User info is undefined!"); 
  }

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username:  userInfo?.username || user.username,
    name: userInfo?.name || user.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user.imageUrl,
  };

  console.log("User Info onboarding:", userData);

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now, to use Threds.
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
