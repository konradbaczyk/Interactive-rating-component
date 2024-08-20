const rates = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submit-btn");
const thanksModal = document.getElementById("thanks-side");
const selectedRate = document.getElementById("selected-rate");

const showModal = (e) => {
	rates.forEach((rate) => {
		if (rate.checked) {
			selectedRate.textContent = rate.value;
		}
	});

	thanksModal.classList.add("show-modal");
	e.preventDefault();
};

submitBtn.addEventListener("click", showModal);
