import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { postuser } from '../../redux/actions'
import { Link } from 'react-router-dom'
import "../../style/landing.css"

export default function Landing() {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, seterror] = useState(null)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const userData = {name,email,password};
      await dispatch(postuser(userData))
      alert("usuario creado!! wuuujuuuu");

      setName('')
      setEmail('');
      setPassword('')
    } catch (error) {
      console.log("error creando usuario", error);
      seterror("error creating user")
    }
  }

  return (
    <div className='container'>
<div className='singup-form'>
<h2>Registrate</h2>
{error && <div className='error-message'>{error}</div>}

<form onSubmit={handleSubmit}>
  <div className='form-group'>
    <label>Nombre</label>
    <input
    type='text'
    value={name}
    onChange={(e) => setName(e.target.value)}
    require 
    />
  </div>
  <div className='form-group'>
    <label>Email</label>
    <input
    type='email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    require 
    />
  </div>
  <div className='form-group'>
    <label>Password</label>
    <input
    type='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    require 
    />
  </div>
<button type='submit'>registrate</button>

</form>
</div>
      <Link to='/home'>
      <button className='b1'>Entrar</button>
      </Link>
    </div>
  )
}
