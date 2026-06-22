const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

const proposalForm = document.querySelector('#proposalForm');
const successBox = document.querySelector('#formSuccess');

if (proposalForm && successBox) {
  proposalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(proposalForm);
    const projectTitle = formData.get('projectTitle') || 'your project';
    successBox.innerHTML = `<strong>Demo received.</strong><br>This prototype form does not submit data yet. In production, this would send “${projectTitle}” to the official SEU Labs intake workflow.`;
    successBox.classList.add('show');
    successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
