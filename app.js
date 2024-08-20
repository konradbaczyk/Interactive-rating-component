const rates = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submit-btn");
const thanksModal = document.getElementById("thanks-side");
const selectedRate = document.getElementById("selected-rate");

const activeBtn = () => {
	rates.forEach((rate) =>
		rate.addEventListener("click", () => {
			submitBtn.classList.remove("disabled");
			submitBtn.removeAttribute("disabled");
		})
	);
};

const showModal = (e) => {
	rates.forEach((rate) => {
		if (rate.checked) {
			selectedRate.textContent = rate.value;
			thanksModal.classList.add("show-modal");
		}
	});

	e.preventDefault();
};

activeBtn();
submitBtn.addEventListener("click", showModal);
