document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    const resetButton = document.getElementById('resetButton');
    const popup = document.getElementById('popup');
    const popupResults = document.getElementById('popupResults');

    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(surveyForm);

        let results = '<h3>Survey Results:</h3>';

        for (const [key, value] of formData.entries()) {
            results += `<p><strong>${key}:</strong> ${value}</p>`;
        }

        popupResults.innerHTML = results;
        popup.style.display = 'block';
        surveyForm.reset();
    });

    resetButton.addEventListener('click', function() {
        surveyForm.reset();
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
