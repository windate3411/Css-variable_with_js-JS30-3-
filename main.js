const input = document.querySelectorAll('.controls input')

function handle() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

input.forEach(item => item.addEventListener('change', handle))