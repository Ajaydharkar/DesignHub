function calculateStyle() {
    // Fetching user selections
    const answers = [];
    const questionElems = document.querySelectorAll('.question');
    questionElems.forEach((question) => {
        const selectedOption = question.querySelector('input:checked');
        if (selectedOption) {
            answers.push(parseInt(selectedOption.value));
        }
    });

    // Calculate total score
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

    // Determine style based on score
    let style;
    if (totalScore <= 6) {
        style = 'Minimalistic';
    } else if (totalScore <= 9) {
        style = 'Vintage';
    } else {
        style = 'Modern and Sleek';
    }

    // Display result
    const resultElem = document.getElementById('result');
    resultElem.textContent = `Your interior design style is: ${style}`;
    resultElem.style.opacity = 1;
}

