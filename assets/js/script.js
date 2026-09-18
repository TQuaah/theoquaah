
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       DARK / LIGHT MODE
    =============================== */

    const themeToggle = document.getElementById("themeToggle");

    function updateThemeIcon() {

        if (!themeToggle) return;

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

        }
    }


    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    updateThemeIcon();


    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const theme =
                document.body.classList.contains("dark-mode")
                    ? "dark"
                    : "light";

            localStorage.setItem(
                "portfolio-theme",
                theme
            );

            updateThemeIcon();

        });

    }


    /* ===============================
       NAVBAR SCROLL
    =============================== */

    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll", function () {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.borderBottom =
                "1px solid var(--border)";

        } else {

            navbar.style.borderBottom =
                "1px solid transparent";

        }

    });


    /* ===============================
       BACK TO TOP
    =============================== */

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                backToTop.style.display = "block";

            } else {

                backToTop.style.display = "none";

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ===============================
       SCROLL REVEAL
    =============================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (revealElements.length) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    }


    /* ===============================
       MOBILE NAVIGATION
    =============================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar-nav .nav-link"
        );

    const navbarCollapse =
        document.querySelector(
            ".navbar-collapse"
        );


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );

                if (bsCollapse) {

                    bsCollapse.hide();

                }

            }

        });

    });

});
