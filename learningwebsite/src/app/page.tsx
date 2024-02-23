import Image from "next/image";
import PageContent from "./pages/content";
import SampleBlogPost from "./pages/SampleBlogPost";
import DashboardPage from "./pages/dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardPage />
    </main>
  );
}
