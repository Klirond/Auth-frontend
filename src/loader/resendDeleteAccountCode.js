import { redirect } from "react-router";

export default async function resendDeleteAccount() {
  return redirect("/delete-account");
}
