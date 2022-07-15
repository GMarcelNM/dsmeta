import './styles.css'
import logo from '../../assets/img/logo.svg'


function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido

                    <a href="https://www.instagram.com/glaudsonmarcel/">@devsuperior.ig</a>
                </p>
            </div>
        </header>
    )

}

export default Header