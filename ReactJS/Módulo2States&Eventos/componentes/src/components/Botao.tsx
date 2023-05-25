type Props = {
    text: string
    clickFn: (txt: string) => void
}

export const Botao = ({text, clickFn}: Props) =>{

    const handleClick = ()=>{
        clickFn("FRASE")
    }

    return(
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}