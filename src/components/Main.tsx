import Aside from "./Aside"
import Section from "./Section"

export default function Main() {
  return (
    <main className="grid grid-cols-[120px_1fr]">
      <Aside />
      <Section />
    </main>
  )
}