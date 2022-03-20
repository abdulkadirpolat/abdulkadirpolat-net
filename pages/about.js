import React from "react";
import { Layout } from "../components/index";
import aboutData from "../datalocalized/otherLocalized.json";
const About = () => {
  // const [currentLanguage, setCurrentLanguage] = useState("tr");
  // useEffect(() => {

  //     const currentLanguage = localStorage.getItem("language");
  //     setCurrentLanguage(currentLanguage);

  // }, []);
  return (
    <Layout>
      <div className="h-full max-w-3xl mx-auto flex py-20">
        <div className="max-w-xl mx-auto text-white">
          <h1 className="text-3xl font-bold text-center">
            {aboutData.aboutMe.en}
          </h1>
          <p className="mt-10">{aboutData.aboutMeDescription.en}</p>
          <p className="mb-5">{aboutData.aboutDeveloper.en}</p>
          <hr className="my-5" />
          <h2 className="font-semibold text-lg mb-5">
            {aboutData.myHobbies.en}
          </h2>
          <p>{aboutData.myHobbiesDescription.en}</p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
};
export function getServerSideProps() {
  return { props: {} };
}
export default About;
