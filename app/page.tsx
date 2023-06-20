import Image from "next/image";
import { Profile, ProjectFeatured, ProjectOthers } from "@/component";
import BackgroundAnimation from "@/component/BackgroundAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      <BackgroundAnimation />
      <ProjectFeatured />
      <ProjectOthers />
    </main>
  );
}
