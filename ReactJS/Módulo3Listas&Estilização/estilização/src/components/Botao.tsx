import botao from './botao.module.css'

export const Botao = ()=>{
    return(
        <div>
            <button className={botao.botao1}>Perfil</button>
            <p className={botao.legend}>Legenda</p>
        </div>
    )
}