import Image from "next/image";
import { Inter, Sora } from "next/font/google";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export default function Home() {
  return <main className={classNames(sora.className)}></main>;
}
