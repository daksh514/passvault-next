import { getPasswords } from "@/actions/passwordActions";
import Header from "@/components/Header";
import PasswordCard from "@/components/PasswordCard";
// import PasswordForm from "@/components/PasswordForm";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/noSession')
  }
  const passwords = await getPasswords();

  return (
    <div>
      <Header session={session}/>
      
      {/* <PasswordForm session={session}/> */}
      <div className="grid grid-cols-2 gap-3 mt-8">

      {Object.entries(passwords).map((pass) => {
        const password = pass[1]
        return (
          <PasswordCard password={password} key={password._id}/>
          )
      })}
      </div>
    </div>
  );
}
