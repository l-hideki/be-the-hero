import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import './styles.css';
import HeroesImg from '../../assets/heroes.png'; 
import LogoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi'
import api from '../../sevices/api';

export default function Logon(){
    const [id,setId]=useState('');
    const history=useHistory();


 
    
    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');
        }
        catch(err){
            alert('falha no login tente novamente')
        }


    }


    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero"/>

                
                <form onSubmit={handleLogin}> 
                    <h1>Faça Seu Logon</h1>
                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e=>setId(e.target.value)} 
                    />
                    <button className="button" type="submit">Entar</button>
                    <Link className="back-link" to ="register">
                        <FiLogIn size={16} color ="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
                
            </section>
            <img src={HeroesImg} alt="Heroes"/>  
        </div>
    );
};