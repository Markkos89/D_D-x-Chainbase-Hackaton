import { Inter } from "next/font/google";
import Header2 from "@/components/Header2";

const inter = Inter({ subsets: ["latin"] });

export default function colectionPage() {
  return (
    <div>
      <Header2 />
    </div>
  );
}
