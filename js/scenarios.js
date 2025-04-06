document.addEventListener('DOMContentLoaded', () => {

    // --- Scenario 1: The Diagnostic Partner ---
    const scenarioContainer1 = document.getElementById('scenario-diagnostic');
    if (scenarioContainer1) {
        const questionText = scenarioContainer1.querySelector('.question');
        const choicesContainer = scenarioContainer1.querySelector('.choices');
        const consequenceText = scenarioContainer1.querySelector('.consequence');

        const scenario1 = {
            question: "You are a doctor reviewing a complex case. Your AI diagnostic partner flags a rare condition based on subtle patterns in the patient's data, contradicting your initial assessment based on experience. Time is a factor.",
            choices: [
                { text: "Trust the AI's analysis and proceed with its recommended treatment plan.", outcome: "Efficiency gained, potential unknown risk accepted. The AI was correct this time, leading to swift recovery. But the reliance deepens." },
                { text: "Order additional, slower diagnostic tests to confirm before acting.", outcome: "Prudence exercised. The tests confirm the AI's diagnosis, but the delay slightly worsened the patient's short-term condition. Was the delay necessary?" },
                { text: "Override the AI based on your intuition and experience, pursuing your initial diagnosis.", outcome: "Human judgment asserted. In this instance, the AI was correct; your override led to misdiagnosis and treatment delay, highlighting the potential cost of ignoring advanced pattern recognition." }
                // Add alternative outcomes for AI being wrong if desired
            ]
        };

        function displayScenario(scenario, qTextEl, choicesEl, consTextEl) {
            qTextEl.textContent = scenario.question;
            choicesEl.innerHTML = ''; // Clear old choices
            consTextEl.textContent = ''; // Clear old consequence
            consTextEl.style.display = 'none'; // Hide consequence area initially

            scenario.choices.forEach((choice) => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.addEventListener('click', () => showConsequence(choice.outcome, choicesEl, consTextEl));
                choicesEl.appendChild(button);
            });
        }

        function showConsequence(outcome, choicesEl, consTextEl) {
            choicesEl.innerHTML = '<p><em>Choice made. See outcome below.</em></p>'; // Indicate choice was made
            consTextEl.textContent = `Outcome: ${outcome}`;
            consTextEl.style.display = 'block'; // Show consequence area
            // Could add a 'reset' button here later
        }

        displayScenario(scenario1, questionText, choicesContainer, consequenceText);
    } else {
         console.log("Scenario container 'scenario-diagnostic' not found.");
    }


    // --- Add logic for other scenarios here ---
    // const scenarioContainer2 = document.getElementById('scenario-workflow');
    // if(scenarioContainer2){ ... load and handle scenario 2 ... }


}); // End DOMContentLoaded