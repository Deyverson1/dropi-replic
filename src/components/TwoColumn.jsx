import '../styles/components/twoColumn.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function TwoColumn({ firstRow, secondRow, color }) {
  return (
    <>
      <div className="container-button-column">
        <button className="button-content-column" style={{backgroundColor: color}}>Beneficios</button>
      </div>
      <section className="list-container-column">
        <ul> {firstRow.map((dato, index) => (
          <li key={index}> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{ color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem" }} /><p className='text-list'>{dato}</p></div></li>
        ))}
        </ul>
        <ul> {secondRow.map((dato, index) => (
          <li key={index}> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{ color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem" }} /> <p className='text-list'>{dato}</p></div></li>
        ))}
        </ul>
      </section>
    </>
  )
}

export default TwoColumn;