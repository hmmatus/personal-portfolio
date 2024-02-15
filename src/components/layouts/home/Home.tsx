import ProfileCard from "../../elements/cards/profile/ProfileCard";
import TechnologiesCard from "../../elements/cards/technology/TechnologyCard";
export default function HomeLayout() {
  return <div className="p-4">
    <ProfileCard />
    <div className="flex items-center flex-col pt-4 m-auto">
      <h1>Technologies</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-2">
        <TechnologiesCard title="React.Js" description="Frontend Javascript Framework"/>
        <TechnologiesCard title="Node Js" description="Backend Javascript Framework"/>
        <TechnologiesCard title="React Native" description="Mobile Javascript Framework"/>
      </div>
    </div>
  </div>;
}
