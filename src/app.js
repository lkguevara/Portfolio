const menu_hamburguer = document.querySelector(".menu");

        const button_hamburguer = document.querySelector(".hamburguer")


        button_hamburguer.addEventListener("click", WatchHiden);

        menu_hamburguer.classList.add("menu_active");

        function WatchHiden() {
            if (menu_hamburguer.classList.contains("menu_active")) {
                menu_hamburguer.classList.remove("menu_active")
            }
            else {
                menu_hamburguer.classList.add("menu_active")
            }
        }