type Props ={
    title: string
    age?: number
}

export const Header = ({title, age}:Props) =>{
    return (
        <header>
            <h1>Titulo da página</h1>
            <h2>{title}</h2>
            <br />
        </header>
    )
}