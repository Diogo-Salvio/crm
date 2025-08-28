import './customerRegistration.css'

const CustomerRegistration = () => {
    return (
        <div className='customerRegistration'>
            <form class="form">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" />
                </div>

                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div class="form-group">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" />
                </div>

                <div class="form-group">
                    <label for="empresa">Empresa</label>
                    <input type="text" id="empresa" name="empresa" />
                </div>

                <div class="form-group checkbox">
                    <label className='status'>
                        Status:        
                        <input type="radio" name="status" /> Ativo 
                        <input type="radio" name="status" /> Desativado 
                    </label>
                    <button>Criar empresa</button>
                </div>
            </form>
        </div>
    )
}

export default CustomerRegistration