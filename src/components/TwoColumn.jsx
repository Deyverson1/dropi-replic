/* The provided code is a React functional component named `TwoColumn`. Here is a breakdown of what
each part of the code is doing: */
import '../styles/components/twoColumn.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function TwoColumn({ firstRow, secondRow, color }) {
  return (
    <section>
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
    </section>
  )
}

export default TwoColumn;