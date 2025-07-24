/* SDEV154
My Porfolio
Cody Fancil
06/09/25*/

document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('navlist').classList.toggle('open');
});
if (window.location.href.includes('contact.html')) {
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // should gather form data, without submitting, 
        // Dunno how to do the server aspects.
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const purpose = document.getElementById('purpose').value;
        const time = document.getElementById('time').value;
        const preferred = document.getElementById('preferred').value;
        const dayCheckboxes = document.querySelectorAll('input[name="day"]:checked');
        const days = Array.from(dayCheckboxes).map(cb => cb.value).join(', ');
        // Should be filling the summary with the contact info.
        document.getElementById('summaryName').textContent = name;
        document.getElementById('summaryEmail').textContent = email;
        document.getElementById('summaryPhone').textContent = phone;
        document.getElementById('summaryPurpose').textContent = purpose;
        document.getElementById('summaryTime').textContent = time;
        document.getElementById('summaryDays').textContent = days;
        document.getElementById('summaryMethod').textContent = preferred;
        // change css to display the summary table
        document.getElementById('yourSummary').style.display = 'block';
    });
}