import Form from "@/components/form";
import { auth } from "@/auth";
export default async function Login() {
  const session = await auth();
  return (
    <>
      <Form session={session} />
    </>
  );
}
