document.addEventListener("DOMContentLoaded", () => {
	const password = document.querySelector("#password");
	const confirmPassword = document.querySelector("#confirmPassword");

	const boxWarning = document.querySelector('.box-teste');
	const toolTipPasswordNotSame = document.querySelector(".tooltip-password-not-same");
	const toolTipPasswordRegex = document.querySelector('.tooltip-password-regex');

	const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

	function validatePassword() {
		
		if (password.value.length === 0) return;

		// regex test match 
		if(!passRegex.test(password.value)){
			boxWarning.style.display = "flex";
			toolTipPasswordRegex.style.display = "block";			
			return;
		}
		
		//  password is the same 
		if (password.value !== confirmPassword.value) {
			boxWarning.style.display = "flex";
			toolTipPasswordNotSame.style.display = "block";
			return;
		}


		boxWarning.style.display = "none";
		toolTipPasswordRegex.style.display = "none";
		toolTipPasswordNotSame.style.display = "none";
	}

	password.addEventListener("input", validatePassword);
	confirmPassword.addEventListener("input", validatePassword);
});
