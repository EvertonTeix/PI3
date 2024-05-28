import './login.css'

import mapaLogin from '../../../../assets/mapaLogin.png';
import user from '../../../../assets/user.png';
import pass from '../../../../assets/password.png';

export function Login() {

    return (

        <div className='retangulo'>
            <div className="img-container">
                <img src={mapaLogin} alt="mapa ilustrativo" className="mapa-styled" />
            </div>

            <div className='login'>
                <h2 className='BV'>Bem-vindo de volta</h2>
                <div className="input-container">
                    <img src={user} alt="Ícone de usuário" className="icon" />
                    <input type="text" placeholder="Email" className='caixa' />
                </div>
                <div className="input-container">
                    <img src={pass} alt="Ícone de senha" className="icon" />
                    <input type="password" placeholder="Senha" className='caixa' />
                </div>
                <button className='entrar'>Entrar</button>
            </div>
        </div>
    );
}