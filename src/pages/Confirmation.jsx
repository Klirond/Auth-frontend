import { useLoaderData } from "react-router";
import TopSection from "../components/TopSection";

export default function ConfirmationPage() {
  const { messageTitle, messageText } = useLoaderData();


  return <TopSection title={messageTitle} text={messageText} />;
}
