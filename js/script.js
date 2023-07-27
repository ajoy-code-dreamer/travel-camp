$(function () {
	// ===== preloader =====
	$(window).load(function () {
		$("#preloader").delay(300).fadeOut(300);
	});
	// ===== preloader =====

	// ===== fixed nav operation =====
	$(window).scroll(function () {
		let add_Fixed_Nav = $(this).scrollTop();
		console.log(add_Fixed_Nav);
		if (add_Fixed_Nav > 1200) {
			$("#navbar_main").addClass("nav_fixed");
		} else {
			$("#navbar_main").removeClass("nav_fixed");
		}
	});
	// ===== fixed nav operation =====

	// ===== feature part js =====
	$(window).scroll(function () {
		let feature_animation = $(this).scrollTop();

		if (feature_animation > 200) {
			$(".feature_item_wrapper").fadeIn(1000);
		} else {
			$(".feature_item_wrapper").fadeOut(1000);
		}
	});
	// ===== feature part js =====
});

// === aos js operation ===
AOS.init({
	delay: 500,
	duration: 4000,
	easing: "linear",
	once: true,
});
// === aos js operation ===
