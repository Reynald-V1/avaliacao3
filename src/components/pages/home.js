import Navbar from "../navbar"
import Footer from "../footer"
import { Link } from "react-router-dom";
  import './pages.css';
function Home(){
    return(<section>
     
     <div class="description">
            <h4>Estudante de programação em UFRN | TADS</h4>
            <p>preferencialmene trabalha sozinho mas não tem problema em projetos em grupo,
              nivel de ingles avançado.
            </p>
      </div>
   

    
    <div class="container">
        <div class="containerr"><Link to= '/Interesses'>meus Interesses</Link></div>
        <div class="containerr"><Link to='/Contato'>contato</Link></div>
        <div class="containerr"><Link to='/Horarios'>horarios</Link></div>
    </div>
    
    </section>);
}export default Home;