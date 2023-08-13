import { useState } from 'react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  //Section de USER y PASS
  //aqui se puede cambiar el usuario y contraseña
  //
  //
  const user = 'administrador' 
  const pass = 'bot$21' 

  //
  //
  //
  //


  const handleLogin = () => {
    if (username === user && password === pass) {
      setLoginError(false);
      // #go to reports si esta hecho con hash router
      window.location.href = '/#/reports';
    } else {
      setLoginError(true);
    }
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className='contenedor'>
      <h2 className='title'>Login</h2>
      <div className='user'>
        <input
        className='user-input'
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='password'>
        <input
        className='password-input'
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='button-login' onClick={handleLogin}>Iniciar sesión</button>
      {loginError && <p className='error-message'>Nombre de usuario o contraseña incorrectos.</p>}
      {loginError && (
        <button className='return-button' onClick={goToHome}>
          Volver al inicio
        </button>
      )}
    </div>
  );
}


