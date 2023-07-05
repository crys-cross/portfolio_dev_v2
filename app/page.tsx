import Image from "next/image";
import {
  Nav,
  Footer,
  Profile,
  ProjectFeatured,
  ProjectOthers,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <Profile />
      <ProjectFeatured />
      <ProjectOthers />
      <Footer />
    </main>
  );
}
