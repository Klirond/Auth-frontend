import { redirect } from "react-router";

export default async function resendReset() {
  return redirect("/forgot-password");
}
