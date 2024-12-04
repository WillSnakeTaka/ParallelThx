// Function to toggle visibility
function toggleReveal(planNumber, action) {
    const revealElement = document.getElementById(`reveal${planNumber}`);
    if (revealElement) {
        if (action === 'show') {
            revealElement.classList.remove('hidden'); // Show element
            if (planNumber === 4) { // Special case for Plan X
                const hiddenButton = document.getElementById('hidden-button');
                if (hiddenButton) {
                    hiddenButton.style.display = 'inline-block'; // Make button visible
                }
            }
        } else {
            revealElement.classList.add('hidden'); // Hide element
            if (planNumber === 4) { // Special case for Plan X
                const hiddenButton = document.getElementById('hidden-button');
                if (hiddenButton) {
                    hiddenButton.style.display = 'none'; // Hide button
                }
            }
        }
    } else {
        console.error(`Element reveal${planNumber} not found.`);
    }
}

// Reveal a specific plan
function reveal(planNumber) {
    const allReveals = document.querySelectorAll('.reveal');
    allReveals.forEach(reveal => reveal.classList.add('hidden')); // Hide all other plans
    toggleReveal(planNumber, 'show'); // Show the selected plan
}

// Close a specific plan
function closeReveal(planNumber) {
    toggleReveal(planNumber, 'hide');
}
