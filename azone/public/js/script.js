const showHideMenuBtn = document.getElementById("show-hide-menu")

if (showHideMenuBtn) {
    showHideMenuBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("_menu-active")
    })
}

const mobileConsultationBtn = document.getElementById("consultation-button")

if (mobileConsultationBtn) {
    mobileConsultationBtn.addEventListener("click", function (e) {
        document.documentElement.classList.remove("_menu-active")
    })
}

const consultationForm = document.getElementById("consultation-form")

if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
        e.preventDefault()
        document.getElementById("consultation").classList.add("_form-sent")
    })
}

const spoilers = document.querySelectorAll(".spoiler")

if (spoilers.length) {
    spoilers.forEach(spoiler => {
        spoiler.addEventListener("click", () => {
            spoiler.classList.toggle("_spoiler-open")
        })
    });
}

// работа с селектами

const selects = document.querySelectorAll(".select")

if (selects.length) {

    // console.log(selects)

    selects.forEach(select => {
        let openSelect = select.querySelector(".open-select")
        let selectOptions = select.querySelectorAll("li.select__item[data-value]")
        const elementsForFilterWrapper = document.querySelector(".filter-list")

        // console.log(openSelect, openSelect.parentNode)

        openSelect.addEventListener("click", () => {
            openSelect.parentNode.classList.toggle("_open-select")
        })

        selectOptions.forEach(option => {
            option.addEventListener("click", () => {

                let currentValue = select.querySelector(".current-value")
                const currentSelectValue = option.dataset.value

                currentValue.dataset.current = currentSelectValue
                currentValue.textContent = currentSelectValue
                openSelect.parentNode.classList.remove("_open-select")

                if (elementsForFilterWrapper) {
                    const elements = elementsForFilterWrapper.querySelectorAll("[data-category]")

                    if (elements.length) {
                        elements.forEach(element => {
                            element.classList.remove("_hidden")
                            if (option.getAttribute("data-category") != 0) {
                                if (element.getAttribute("data-category") != option.getAttribute("data-category")) {
                                    element.classList.add("_hidden")
                                }
                            }
                        });
                    }
                }
            })
        });

    });
}

// инициализация маски ввода телефона

const phoneInputs = document.querySelectorAll("input[type='tel']")

if (phoneInputs.length) {

    phoneInputs.forEach(input => {
        Inputmask({ mask: "+7 (999) 999-99-99" }).mask(input);
    });
}

function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

isWebp()