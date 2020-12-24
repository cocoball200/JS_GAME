const $inputDiv = document.querySelectorAll('.container input');

function handleContainer() {
    console.log(typeof this) // object
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}
$inputDiv.forEach((input) => input.addEventListener('mousemove', handleContainer));
$inputDiv.forEach((input) => input.addEventListener('change', handleContainer));
