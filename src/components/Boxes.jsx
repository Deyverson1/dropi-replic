/**
 * The Boxes component renders a section with a title and a list of articles with background images and
 * titles based on the provided data and color.
 * @returns The Boxes component is being returned, which consists of a section element with a className
 * of 'boxes-container' containing a div element with a background color specified by the 'color' prop
 * and a heading element 'Beneficios'. Inside the section, there is a main element with a className of
 * 'boxes-cards' that maps over the 'data' array to render multiple article elements with background
 * images and titles
 */
import '../styles/components/Boxes.css'
function Boxes({ data, color }) {
  return (
    <section className='boxes-container'>
        <div style={{ backgroundColor: color }}>
          <h1>Beneficios</h1>
        </div>
      <main className='boxes-cards'>
        {data.map((dato, index) => (
          <article key={index} className='boxes-article' style={{ backgroundImage: "url(" + dato.image + ")" }}>
            <h1>{dato.title}</h1>
          </article>
        ))}
      </main>
    </section>
  )
}
export default Boxes;