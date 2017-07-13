var start = confirm("Чи бажаєте почати гру?");

if (start) {

    var 
        continueGame = true,
        maximum = 5,
        minimum = 1,
        winningSum = 0,
        winningMax = 10,
        multiplier = 3,
        attempt=3,
        customNumber,
        winningNumber;

    while (continueGame) {
        customNumber = parseFloat(prompt(`Введіть число від ${minimum} до ${maximum}`, ""));
        winningNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        console.log(winningNumber);
        
        if (customNumber == winningNumber && attempt == 3) {
            winningSum += winningMax;
            console.log(`Ви виграли ${winningMax}$. Наразі Ваш виграш ${winningSum}$.`);
            continueGame = confirm("Хочете продовжити гру?");
            if (continueGame) {
                winningMax *= multiplier;
                maximum *= 2;
                attempt = 3;
            } else {
                console.log(`Дякуємо за гру! Ваш виграш становить ${winningSum}$`);
            }

        } else if (customNumber == winningNumber && attempt == 2) {
            winningSum += winningMax / 2
            console.log(`Ви виграли ${winningMax / 2}$. Наразі Ваш виграш ${winningSum}$.`);
            continueGame = confirm("Хочете продовжити гру?");
            if (continueGame) {
                winningMax *= multiplier;
                maximum *= 2;
                attempt = 3;
            } else {
                console.log(`Дякуємо за гру! Ваш виграш становить ${winningSum}$`);
            }

        } else if (customNumber == winningNumber && attempt == 1) {
            winningSum += winningMax / 5;
            console.log(`Ви виграли ${winningMax / 5}$. Наразі Ваш виграш ${winningSum}$.`);
            continueGame = confirm("Хочете продовжити гру?");
            if (continueGame) {
                winningMax *= multiplier;
                maximum *= 2;
                attempt = 3;
            } else {
                console.log(`Дякуємо за гру! Ваш виграш становить ${winningSum}$`);
            }

        } else if (customNumber !== winningNumber && attempt > 1) {
            attempt--;
            console.log(`Ви не вгадали, у вас залишилось ${attempt} спроб`);
        } else {
            console.log("На жаль, Ви програли. Ваш виграш становить 0$");
            continueGame = confirm("Хочете почати нову гру?");
            if (!continueGame) {
                console.log("Сьогодні ви не виграли мільйон, а могли");
            }
            attempt = 3;
            maximum = 5; 
            winningMax = 10; 
            winningSum = 0;
        }
    }
} else {
    console.log("Сьогодні ви не виграли мільйон, а могли");
}
