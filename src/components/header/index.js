import './header.css'

const Header = () => {
    return (
        <header className='header'>

            <h1>Nexo CRM</h1>
            <div className='leave'>
                <img src='/assets/img/leave-svgrepo-com.png' alt='leave' /><p>Sair</p>
            </div>
        </header>
    )
}

export default Header