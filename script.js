const resultatsElem = document.getElementById("resultats");
const resultScores = [];

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const results = data;
        let render = "";

        results.forEach(result => {
            resultScores.push(result.score); // adds score to resultScores array

            render += '<div class="result__summary-item ' + result.category.toLowerCase() + '">';
            render += '<div class="result__summary-item-label label-' + result.category.toLowerCase() + '">' + result.category + '</div>';

            render += '<div>' + result.score + '<span class="result__summary-item-100"> / 100</span></div>';
            render += '</div>';
        });

        const averageScore = resultScores.reduce((acc, curr) => acc + curr, 0) / resultScores.length; // calculation of the average score
        const resultScoreElem = document.querySelector('.result__score');
        resultScoreElem.textContent = Math.round(averageScore); // updating score in .result__score


        render += '<button class="result__btn">Continue</button>';

        resultatsElem.innerHTML = render;
    })
    .catch(error => console.error(error));
