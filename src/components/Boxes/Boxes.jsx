import './Boxes.css'
function Boxes({data, color}) {
  return (
    <section className='boxes-container'>
      <main className='boxes-cards'>
      <div style={{ backgroundColor: color}}>
        <h1>Beneficios</h1>
      </div>
        {data.map((dato, index) => ( 
          <article key={index} className='boxes-article' style={{backgroundImage: "url(" + dato.image + ")"}}>
          <h1>{dato.title}</h1>
        </article>
        ))}
      </main>
    </section>
  )
}
export default Boxes;