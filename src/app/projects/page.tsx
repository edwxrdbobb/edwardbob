import Projects from "../../components/Projects";
import Slideshow from "../../components/slideshow";

export default function ProjectsPage() {
  return (
    <div>
      <section>
          <Slideshow />
      </section>
      <Projects projectPage={true} />
    </div>
  )
}
