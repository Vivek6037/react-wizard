import Footer from "./Footer"
import Gamepagedailyjackpot from "./Gamepagedailyjackpot"
import Gamepagemorethan from "./Gamepagemorethan"
import Gamepageoursuggestion from "./Gamepageoursugestion"
import Gamepagetrendinggame from "./Gamepagetrendinggame"
import Gamepagetrendinggamee from "./Gamepagetrendinggamee"
import Header from "./Header"

function Game(){
    return(
        <>
            {/* <Header /> */}

            <Gamepagetrendinggame/>

            <Gamepagetrendinggamee/>

            <Gamepagedailyjackpot/>

            <Gamepageoursuggestion/>

            <Gamepagemorethan/>

            {/* <Footer /> */}
        </>
    )
}

export default Game
