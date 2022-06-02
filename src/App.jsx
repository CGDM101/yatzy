import { useState } from "react"
import './App.css'

const Yatzy = () => {
    const [dice1, setdice1] = useState('?')
    const [dice2, setdice2] = useState('?')
    const [dice3, setdice3] = useState('?')
    const [dice4, setdice4] = useState('?')
    const [dice5, setdice5] = useState('?')

    const [sum, setSum] = useState(0)
    const [yatzy, setYatzy] = useState('-')
    const [fyrtal, setFyrtal] = useState('-')
    const [kak, setKak] = useState('-')
    const [stege, setStege] = useState('-')
    const [par, setPar] = useState('-')
    const [triss, setTriss] = useState('-')
    const [tvapar, setTvapar] = useState('-')
    
    const [ones, setOnes] = useState(0)
    const [twos, setTwos] = useState(0)
    const [threes, setThrees] = useState(0)
    const [fours, setFours] = useState(0)
    const [fives, setFives] = useState(0)
    const [sixes, setSixes] = useState(0)
    
    function Randomise(min, max) {
        let numbers = []
        min = 1
        max = 5
        let num1 =  Math.floor(Math.random() * (max - min + 1)) + min
        let num2 =  Math.floor(Math.random() * (max - min + 1)) + min
        let num3 =  Math.floor(Math.random() * (max - min + 1)) + min
        let num4 =  Math.floor(Math.random() * (max - min + 1)) + min
        let num5 =  Math.floor(Math.random() * (max - min + 1)) + min
        console.log(num1,num2,num3,num4,num5)
        numbers[0] = num1
        numbers[1] = num2
        numbers[2] = num3
        numbers[3] = num4
        numbers[4] = num5
        console.log(numbers)

    }

    function CalculateGeneral() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        
        let sumOnes = 0
        let sumTwos = 0
        let sumThrees = 0
        let sumFours = 0
        let sumFives = 0
        let sumSixes = 0

        for (let i = 0; i < dices.length; i++) {
            if (dices[i] === 1) {
                sumOnes += 1
            } else sumOnes += 0 

            if (dices[i] === 2) {
                sumTwos += 1
            } else sumTwos += 0 

            if (dices[i] === 3) {
                sumThrees += 1
            } else sumThrees += 0 

            if (dices[i] === 4) {
                sumFours += 1
            } else sumFours += 0 

            if (dices[i] === 5) {
                sumFives += 1
            } else sumFives += 0 

            if (dices[i] === 6) {
                sumSixes += 1
            } else sumFives += 0 

        }

        setOnes(sumOnes)
        setTwos(sumTwos)
        setThrees(sumThrees)
        setFours(sumFours)
        setFives(sumFives)
        setSixes(sumSixes)
    }

    function CalculateFyrtal() {
        // let dices = [dice1, dice2, dice3, dice4, dice5]
        let fyrtal = ''
        if ((dice1 == dice2 && dice2 == dice3 && dice3 == dice4) || (dice2 == dice3 && dice3 == dice4 && dice4 == dice5) ) {
            fyrtal = 'ja'
        } else fyrtal = 'nej'
        setFyrtal(fyrtal)        
    }

    // function CalculateKak() {
    //     let isTriss = CalculateTriss()
    //     let isPar = CalculatePar()
    //     console.log('result',isTriss)
    //     console.log('res',isPar)
    //     let kak = ''
    //     if (isTriss == true && isPar == true) {
    //         kak = 'ja'
    //     } else kak = 'nej'
    //     setKak(kak)
    // }

    function CalculateStege() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sorted = dices.sort() // obs denna behövs
        let stege = ''
        if (    (dices[0] == 1)    &&    (dices[1] == 2)     &&    (dices[2] == 3)   &&    (dices[3] == 4)     &&    (dices[4] == 5)      ){
            stege = 'ja'
        } else stege = 'nej'      
        setStege(stege)
    }

    function CalculatePar() {
        let par = ''
        if (   (dice1 == dice2)   ||     (dice2 == dice3)     ||    (dice3 == dice4)     ||   (dice4 == dice5)   ||    (dice5 == dice1)    ) {
            par = 'ja'
            // return true
        } else par = 'nej'
        setPar(par)
        // return false
    }

    function CalculateTriss() {
        let triss = ''
        if (    (dice1 == dice2 && dice2 == dice3)   ||  (dice2 == dice3 && dice3 == dice4)    ||   (dice3 == dice4 && dice4 == dice5)   ||   (dice4 == dice5 && dice5 == dice1)     ) {
            triss = 'ja'
            // return true
        } else triss = 'nej'
        setTriss(triss)
        // return false
    }

    function CalculateTvaPar() { }

    function CalculateScore() {
        setSum(dice1 + dice2 + dice3 + dice4 + dice5)
    }

    function CalculateYatzy() {
        if (dice1 == dice2 && dice2 == dice3 && dice3 == dice4 && dice4 == dice5) {
            setYatzy('ja')
            let yatzy = true
        }
        else if (dice1 != dice2) {
            setYatzy('nej')
            let yatzy = false
        }
    }

    return (
        <div className="dices">

        <h1>YATZY</h1>
        <p> Klicka på tärningarna för att kasta dem. Tryck sedan på knapparna nedan för att se resultat.</p>

            <button className="square" onClick={() => setdice1(  Math.floor(Math.random() * (5 - 1 + 1)) + 1  )}> {dice1} </button> {/*obs hårdkodat!*/}
            <button className="square" onClick={() => setdice2(   Math.floor(Math.random() * (5 - 1 + 1)) + 1   )}> {dice2} </button>
            <button className="square" onClick={() => setdice3(    Math.floor(Math.random() * (5 - 1 + 1)) + 1     )}> {dice3} </button>
            <button className="square" onClick={() => setdice4(   Math.floor(Math.random() * (5 - 1 + 1)) + 1    )}> {dice4} </button>
            <button className="square" onClick={() => setdice5(   Math.floor(Math.random() * (5 - 1 + 1)) + 1     )}> {dice5} </button>

            <div className="buttons-calc">
                <button onClick={CalculateScore}>Räkna summa!</button>
                <button onClick={CalculateYatzy}>Är det yatzy? </button>
                <button onClick={CalculateGeneral}> räkna alla av varje sort</button>
                <button onClick={CalculateFyrtal}> fyrtal?</button>
                {/* <button onClick={CalculateKak}> Kåk?</button> */}
                <button onClick={CalculateStege}> Stege?</button>
                <button onClick={CalculatePar}> Par?</button>
                <button onClick={CalculateTriss}> Triss</button>
                
                {/* <button onClick={CalculateTvaPar}> Två par?</button> */}
                {/* <button onClick={Randomise}> test random()</button> */}

            </div>

            <div className="div-calc-output">
                <p>Är det yatzy? {yatzy}</p>
                <p>Summan? {sum}</p>
                <p>Hur många ettor? {ones}</p>
                <p>Hur många tvåor? {twos}</p>
                <p>Hur många treor? {threes}</p>
                <p>Hur många fyror? {fours}</p>
                <p>Hur många femmor? {fives}</p>
                <p>Hur många sexor? {sixes}</p>
            </div>

            <p>Är det fyrtal? {fyrtal}</p>        
            {/* <p>Är det kåk? {kak}</p> */}
            <p>Är det stege? {stege}</p>
            <p>Är det par? {par}</p>
            <p>Är det triss? {triss}</p>

            {/* <p>Är det två par? (todo)</p> */}

        </div>
    )
}

export default Yatzy