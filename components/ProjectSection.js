import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
  return (
    <section className="py-28" id="project">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Project</SectionTitle>
        <SectionParagraph>Beberapa project bikinan saya</SectionParagraph>
        <div className="flex flex-wrap -mx-4 mt-20">
          <div className="md:w-6/12 w-full px-4 pb-14">
            <ProjectItem
              image="./hasten.png"
              name="hasten"
              description="Explorasi landing page"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-14">
            <ProjectItem
              image="./hasten resource.png"
              name="hasten Resource"
              description="hasten Resource page"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-14">
            <ProjectItem
              image="./colosal.png"
              name="Collosal"
              description="colosal landing page"
            />
          </div>
          <div className="md:w-6/12 w-full px-4">
            <ProjectItem
              image="./simple.png"
              name="Simple"
              description="Simple page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
