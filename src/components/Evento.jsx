import '../index.css'

function Evento(numero){

    function myEvento(){
        console.log(`Ops...Fui ativado! ${numero}`)
    }
    return(
        <>
        
        <p>Clique para disparar um Evento:</p>
        <button onClick={myEvento}>Ativar HOOO</button>

        </>
    )

}
export default Evento;