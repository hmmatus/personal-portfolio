import Image from "next/image";
import Link from "next/link";

type InfoListP = {
  icon: string;
  label: string;
};
type IconButtonP = {
  icon: string;
  url: string;
};
const InfoList = ({ icon, label }: InfoListP) => {
  return (
    <div className="flex my-4">
      <Image
        width={30}
        height={30}
        alt="Info Icon"
        src={`/images/icons/${icon}.png`}
      />
      <p className="text-xl ml-2">{label}</p>
    </div>
  );
};

const IconButton = ({ icon, url }: IconButtonP) => {
  return (
    <Link
      target="_blank"
      className="rounded-lg bg-blue-500 p-4 mx-1"
      href={url}
    >
      <Image
        width={30}
        height={30}
        alt="Button Icon"
        src={`/images/icons/${icon}.png`}
      />
    </Link>
  );
};

const ProfileCard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:shadow-2xl lg:rounded-lg lg:p-4">
      <div className="flex flex-1 justify-center">
        <Image
          className="rounded-lg"
          alt="Profile Pic"
          width={500}
          height={500}
          src={"/images/profile.jpg"}
        />
      </div>
      <div className="flex flex-1 flex-col p-12">
        <label>Hello Everyone, I am</label>
        <h1 className="text-5xl text-bold my-2">Hector Matus</h1>
        <h3 className="text-xl text-bold mb-4">Frontend Developer</h3>
        <p>{`My name is Hector Manrique Matus, I’m from El Salvador and I’ve been working as a developer since 2019. ${"\n"} I have experience working with teams from different nationalities and enterprises outside of the country. With my experience I can adapt to different projects and technologies based on necessity and I can be a good asset to the company. I summit my resume so we can have a meeting and I help to make you achieve your goals.`}</p>
        <div>
          <InfoList icon="calendar" label="30 November, 1996" />
          <InfoList icon="mail" label="hmatus.dev@gmail.com" />
          <InfoList icon="telephone" label="(+503) 7529 4441" />
          <InfoList icon="home" label="San Salvador, El Salvador" />
        </div>
        <div className="flex my-2">
          <IconButton
            icon="linkedin"
            url="https://www.linkedin.com/in/hmmatus"
          />
          <IconButton
            icon="twitter"
            url="https://twitter.com/HManrique_Matus"
          />
          <IconButton icon="github" url="https://github.com/hmmatus" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
