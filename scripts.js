document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    const creationYear = 2024;
    const footer = document.querySelector('.footer p');
    
    if (currentYear === creationYear) {
        footer.textContent = `Feito Por Bruno Evaristo Pinheiro e Cristiano Müller Israel - ${creationYear}`;
    } else {
        footer.textContent = `Feito Por Bruno Evaristo Pinheiro e Cristiano Müller Israel - ${creationYear} - ${currentYear}`;
    }
});
