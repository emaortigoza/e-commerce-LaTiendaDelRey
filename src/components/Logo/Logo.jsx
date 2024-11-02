import './Logo.css'
import Rey from './assets/logonuevo.webp'

function Logo() {
  return (
    <div className='Titulo'>
        <img alt="" src={Rey} width="200" height="200" className="d-inline-block align-top"/>{' '}
    </div>
  )
}

export default Logo