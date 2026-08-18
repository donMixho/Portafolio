/**
 * Función para alternar la visibilidad de los detalles específicos de cada lenguaje.
 * @param {string} id - El ID del elemento contenedor con los detalles.
 * @param {HTMLElement} btn - El botón presionado.
 */
function toggleDetails(id, btn) {
    const detailsElement = document.getElementById(id);
    const spanText = btn.querySelector('span');

    if (detailsElement.classList.contains('open')) {
        detailsElement.classList.remove('open');
        btn.classList.remove('active');
        if (spanText) {
            spanText.textContent = 'Ver Experiencia Detallada';
        }
    } else {
        detailsElement.classList.add('open');
        btn.classList.add('active');
        if (spanText) {
            spanText.textContent = 'Ocultar Detalles';
        }
    }
}

// Efecto de interacción inicial si se requiere
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio interactivo de Leandro Ruiz cargado exitosamente.');
});



// Función para copiar texto al portapapeles
function copiarTexto(texto, elementoBtn) {
    navigator.clipboard.writeText(texto).then(() => {
        const textoOriginal = elementoBtn.innerHTML;
        elementoBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
        elementoBtn.classList.add('copied');

        setTimeout(() => {
            elementoBtn.innerHTML = textoOriginal;
            elementoBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}