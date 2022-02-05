import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillSection() {
  return (
    <section className="bg-[#F7F7FB] py-28" id="skill">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skill</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex flex-wrap -mx-4 mt-20 ">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="./javascript.svg"
              className="rounded-full"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React Js"
              level="Pemula"
              image="./react.svg"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Next Js"
              level="Pemula"
              image="./nextjs-icon.svg"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React Js"
              level="Pemula"
              image="./react.svg"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Next Js"
              level="Pemula"
              image="./nextjs-icon.svg"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="./javascript.svg"
              className="rounded-full"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="Node Js"
              level="Pemula"
              image="./nodejs-icon.svg"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="./javascript.svg"
              className="rounded-full"
            ></SkillCard>
          </div>
          <div className="md:w-4/12 w-full px-4">
            <SkillCard
              name="Tailwind Css"
              level="Menengah"
              image="./tailwindcss-icon.svg"
              className="w-16"
            ></SkillCard>
          </div>
        </div>
      </div>
    </section>
  );
}
