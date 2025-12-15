function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = JSON.parse(localStorage.getItem('palancaData')) || {};
    for (const key in data) {
        const el = document.getElementById(key);
        if (!el) continue;
        if (el.type === 'file') continue;
        el.value = data[key];
    }
});

document.querySelectorAll('input[type="file"]').forEach(input => {
    const label = input.previousElementSibling;
    if (!label || !label.classList.contains('custom-file-label')) return;

    input.addEventListener('change', () => {
        label.textContent = input.files.length > 0 ? input.files[0].name : "Escolher arquivo";
    });
});

document.getElementById('save-btn').addEventListener('click', async () => {
    const inputs = document.querySelectorAll('input, select');
    const data = {};

    for (const input of inputs) {
        if (input.type === 'file' && input.files[0]) {
            data[input.id] = await toBase64(input.files[0]);
        } else {
            data[input.id] = input.value;
        }
    }

    localStorage.setItem('palancaData', JSON.stringify(data));
    alert('Alterações salvas com sucesso!');
});
