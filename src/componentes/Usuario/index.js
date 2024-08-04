import './Usuario.css'

const Usuario = (props) => {
    return (
        <div className='usuario'>
            <div className='cabecalho'>
                <img src='https://github.com/samuelgranados.png' />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.email}</h5>
            </div>
        </div>
    )
}

export default Usuario