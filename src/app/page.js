import About from "@/Components/Home/About";
import Banner from "@/Components/Home/Banner";
import Projects from "@/Components/Home/Projects";
import Skill from "@/Components/Home/Skill";

export default function Home() {
  return (
    <div className="min-h-screen">

      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        {/* Projects component */}
        <Projects/>
      </section>

      <section id="experience">
        {/* Experience component */}
      </section>

      <section id="contact">
        {/* Contact component */}
      </section>

    </div>
  );
}