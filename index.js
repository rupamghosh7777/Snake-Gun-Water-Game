const Play = () => {
    const computers = document.getElementById("computers");
    const user = document.getElementById("user").value;
    const result = document.getElementById("result");
    console.log(user)
    const randomNumber = (min, max) => {
        const random = Math.trunc((Math.random() * (max - min) + min));
        const array = ["Snake", "Water", "Gun"];
        let computer = array[random];
        computers.innerHTML = computer;
        if (user === "Snake") {
            if (computer === "Snake") {
                result.innerHTML = "Game Tie!";
            }
            else if (computer==="Water"){
                result.innerHTML = "You win!";
            }
            else if (computer==="Gun"){
                result.innerHTML = "You lost!";
            }
        }
        else if (user==="Water"){
            if(computer==="Snake"){
                result.innerHTML = "You lost!";
            }
            else if(computer==="Water"){
                result.innerHTML = "Game tie!";
            }
            else if (computer==="Gun"){
                result.innerHTML = "You win!";
            }
        }
        else if (user==="Gun"){
            if(computer==="Gun"){
                result.innerHTML = "Game tie!";
            }
            else if (computer==="Water"){
                result.innerHTML = "You lost!";
            }
            else if (computer==="Snake"){
                result.innerHTML = "You win!";
            }
        }
    }
    randomNumber(0,3)
}