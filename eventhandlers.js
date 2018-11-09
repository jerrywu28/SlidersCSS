const inputs = document.querySelectorAll('#controls-container input');

const updateInput = (e) => {
  const suffix = e.target.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateInput));
inputs.forEach(input => input.addEventListener('mousemove', updateInput));