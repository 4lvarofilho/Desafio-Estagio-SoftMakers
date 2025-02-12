import { Header } from "@/components/Header";
import PageNavigator from "@/components/PageNavigator";
import { Pet } from "@/components/Pet";


export default function Home() {
  return (
    <div className="bg-gradient-to-tl from-darkblue to-dark bg-dark min-h-screen z-0">
      <div className="ml-14">
        <Header />
        <PageNavigator />
        <Pet />
      </div>
    </div>
  );
}
