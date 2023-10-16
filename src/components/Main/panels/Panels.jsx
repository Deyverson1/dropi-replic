import './Panels.css'
export default function Panels(){
    const solutions = [
        { 
            title: 'PROVEEDORES',
            text: 'Conectamos tus productos con Dropshippers, ayudamos a aumentar tus ventas online',
            color: '#ec6f2d',
         },
         {
            title: 'DROPSHIPPERS',
            text: 'Brindamos recursos para que empieces tu negocio online, con gran variedad de productos',
            color: '#f39a3d',
         },
         {
            title: 'MARCA PROPIA',
            text: 'Ofrecemos apoyo fulfillment, brindando soluciones en tus procesos logísticos y de almacenamiento',
            color: '#f8c15e',
         }
         ]
    return(
        <main className='panels'>
        <div className='panels-container'>
          {
            solutions.map((solution, index) => (
              <div className='panels-list' key={index}>
                <h1 className='panels-tittle' style={{color: solution.color}}>Soluciones para <strong>{solution.title}</strong></h1>
                <p className='panels-text'>{solution.text}</p>
                <button className='btn-panels' style={{backgroundColor: solution.color}}> MÁS INFO</button>
              </div>
            ))
          }
        </div>
      </main>
      
    )
}