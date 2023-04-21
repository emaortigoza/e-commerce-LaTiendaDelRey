import './Logo.css'
import Rey from './assets/Rey.png'

function Logo() {
  return (
    <div className='Titulo'>
        <img alt="" src={Rey} width="80" height="80" className="d-inline-block align-top"/>{' '}
            <h3>La Tienda del Rey</h3>
    </div>
  )
}

export default Logo