// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";

// document.addEventListener("DOMContentLoaded", ()=> {
//     setTimeout(() => {
//         document.getElementById("loader").remove()
//     }, 2000);

// })

// document.querySelector('.hero__button').addEventListener('click', function() {
//     document.querySelector('#e-book').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// AOS.init();



// изменение локации

const changeLocation = document.getElementById("change-location") || null

changeLocation.addEventListener("click", () => {
    changeLocation.classList.toggle("_open")
})

// открытие блока Покупателям

const openCustomerBlock = document.getElementById("customer-block") || null

if (openCustomerBlock) {
    openCustomerBlock.addEventListener("click", () => {
        openCustomerBlock.classList.toggle("_open")
    })

    document.querySelector(".customer-block__wrapper").addEventListener("click", function (event) {
        event.stopPropagation()
        openCustomerBlock.classList.remove("_open")
    })

    window.addEventListener("scroll", () => {
        if (openCustomerBlock.classList.contains("_open")) {
            openCustomerBlock.classList.remove("_open")
        }
    })
}

// document

// работа с селектами

const selects = document.querySelectorAll(".select")

if (selects.length) {

    // console.log(selects)

    selects.forEach(select => {
        let openSelect = select.querySelector(".open-select") || null
        let selectOptions = select.querySelectorAll("li.select__item[data-value]") || null

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
            })
        });

    });
}

// работа с меню в шапке

const headerMenu = document.getElementById("open-header-menu") || null

if (headerMenu) {
    headerMenu.querySelector(".header-menu__hidden-block").addEventListener("click", function (event) {
        event.stopPropagation()
    })
    headerMenu.addEventListener("click", () => {
        headerMenu.classList.toggle("_open-menu")

        if ((Math.min(screen.width, window.innerWidth)) <= 576) {
            document.documentElement.classList.toggle("_lock")
        }
    })

    const showFullListBtns = headerMenu.querySelectorAll(".grid-tab__more")
    const hideFullListBtns = headerMenu.querySelectorAll(".grid-tab__less")

    if (showFullListBtns.length) {
        showFullListBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                btn.parentElement.classList.add("_full-list")
            })
        });
    }

    if (hideFullListBtns.length) {
        hideFullListBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                btn.parentElement.classList.remove("_full-list")
            })
        });
    }
}

// работа с открытием поиска на мобилке

const mobileSearchOpen = document.getElementById("open-mobile-search") || null
const mobileSearchClose = document.getElementById("open-mobile-close") || null

if (mobileSearchOpen) {
    mobileSearchOpen.addEventListener("click", () => {
        document.documentElement.classList.add("_mobile-search-open")
    })
}

if (mobileSearchClose) {
    mobileSearchClose.addEventListener("click", () => {
        document.documentElement.classList.remove("_mobile-search-open")
    })
}

// скролл наверх

document.getElementById('to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// работа с календарем

// https://vanilla-calendar.pro/ru/docs/reference/additionally/actions
document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("calendar")) {
        const calendar = new VanillaCalendar('#calendar', {
            settings: {
                range: {
                    // disablePast: true,
                },
                lang: 'ru',
                visibility: {
                    theme: 'light',
                },
            },
            actions: {
                clickDay(e, self) {
                    // console.log(self.selectedDates);
                },
                clickArrow(event, self) {
                    // console.log(self.selectedYear, self.selectedMonth);
                },
            },
        });
        calendar.init();
    }
});


// переключение табов 

let goodsTags = document.querySelectorAll(".tags-goods .tag-item") || null

if (goodsTags.length) {
    goodsTags.forEach(tag => {
        tag.addEventListener("click", () => {
            if (!tag.classList.contains("_active")) {
                goodsTags.forEach(item => {
                    item.classList.remove("_active")
                })
                tag.classList.add("_active")
            }
        })
    });
}

// отображение полного списка тегов

const showHideTags = document.getElementById("show-hide-tags") || null
const tagsWrapper = document.getElementById("tags-wrapper") || null

if (showHideTags) {
    showHideTags.addEventListener("click", () => {
        tagsWrapper.classList.toggle("_all")
    })
}


// иконка добавить-убрать из избранного

let allHeartIcons = document.querySelectorAll(".icons-product__heart") || null

if (allHeartIcons.length) {
    allHeartIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            icon.classList.toggle("_active")
        })
    });
}

// иконка добавить-убрать из сравнения

let allComparisonIcons = document.querySelectorAll(".icons-product__comparison") || null

if (allComparisonIcons.length) {
    allComparisonIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            icon.classList.toggle("_active")
        })
    });
}


// работа с попапами

const popupShowElements = document.querySelectorAll("[data-popup]") || null
const popupHideElements = document.querySelectorAll(".popup__close") || null

function popupClose(element) {
    if (element.closest(".popup").dataset.single == "true" || element.classList.contains("popup__close")) {
        element.closest('.popup').classList.remove('popup_show');
        document.querySelector('html').classList.remove('lock');
        document.querySelector('html').classList.remove('popup-show');
    } else {
        element.closest('.popup').classList.remove('popup_show');
    }
}

function popupShow(element) {

    let popupId = element.getAttribute("data-popup");
    const currentPopup = document.querySelector(`#${popupId}`);
    currentPopup.classList.add('popup_show')
    console(document.querySelector('html'))
    document.querySelector('html').classList.add('lock');
    document.querySelector('html').classList.add('popup-show');
    const nextPopup = currentPopup.querySelectorAll("[data-popup]") || null

    if (nextPopup.length) {

        nextPopup.forEach(el => {
            el.addEventListener("click", (event) => {
                event.preventDefault()

                const nextPopupId = el.getAttribute("data-popup")
                popupClose(currentPopup)
                popupShow(document.querySelector(`[data-popup="${nextPopupId}"]`))
            })
        });
    }
}

if (popupShowElements.length) {
    popupShowElements.forEach(element => {
        element.addEventListener("click", () => {
            popupShow(element)
        })
    });
}

if (popupHideElements.length) {
    popupHideElements.forEach(element => {
        element.addEventListener("click", () => {
            popupClose(element)
        })
    })
}

// const popupFollowProduct = document.getElementById("to-follow-product") | null

// if (popupFollowProduct) {

//     popupFollowProduct.querySelector("button[type='submit']").addEventListener("click", (event) => {

//         event.preventDefault()
//         popupClose(document.getElementById("to-follow-product"))
//         document.getElementById("you-follow").classList.add('popup_show');
//         document.querySelector('html').classList.add('lock');
//         document.querySelector('html').classList.add('popup-show');
//     })
// }

// const popupToAuth = document.getElementById("to-auth") || null

// if (popupToAuth) {

//     popupToAuth.querySelector(".to-registration").addEventListener("click", (event) => {

//         event.preventDefault()
//         popupClose(document.getElementById("to-auth"))
//         document.getElementById("registration").classList.add('popup_show');
//         document.querySelector('html').classList.add('lock');
//         document.querySelector('html').classList.add('popup-show');
//     })
// }

// каталог

const gridSwitcher = document.getElementById("grid-switcher") || null
const catalogContainer = document.getElementById("catalog") || null

if (gridSwitcher) {
    gridSwitcher.addEventListener("click", () => {
        catalogContainer.classList.toggle("_list")
    })
}

// отображение типа сортировки

const sortSwitcher = document.getElementById("sorting-type") || null

if (sortSwitcher) {
    sortSwitcher.addEventListener("click", () => {
        sortSwitcher.classList.toggle("_active")

        if (window.screen.width < 577) {
            document.documentElement.classList.toggle("_filter-active")
        }
    })

    const sortingElements = sortSwitcher.querySelectorAll(".sorting__item")
    const currentSortingElement = sortSwitcher.querySelector("span[data-current]")

    sortingElements.forEach(element => {
        element.addEventListener("click", () => {
            currentSortingElement.textContent = element.textContent
            currentSortingElement.dataset.current = element.dataset.sorting
        })
    });
}

const filters = document.querySelectorAll(".catalog-filter") || null

if (filters.length) {
    filters.forEach(filter => {
        const filterShow = filter.querySelector("._show")
        const filterHide = filter.querySelector("._hide")

        if (filterShow) {
            filterShow.addEventListener("click", () => {
                filter.classList.add("_all")
            })
        }

        if (filterHide) {
            filterHide.addEventListener("click", () => {
                filter.classList.remove("_all")
            })
        }
    });
}

// закрытие - открытие фильров в мобилке

const closeFiltersBtn = document.getElementById("close-filters");
const asideFilters = document.getElementById("aside-filters");

if (closeFiltersBtn && asideFilters) {
    closeFiltersBtn.addEventListener("click", () => {
        document.documentElement.classList.remove("_filter-active");
        asideFilters.classList.remove("_active");
        document.documentElement.classList.remove("_lock")
    });
}

// отображение фильтра в мобилке

const mobFilterBtn = document.getElementById("mob-filter-btn");

if (mobFilterBtn) {
    mobFilterBtn.addEventListener("click", () => {
        document.documentElement.classList.add("_filter-active")
        asideFilters.classList.add("_active")
        document.documentElement.classList.add("_lock")
    })
}


// липкий сайдбар +
const aside = document.querySelector('aside');
const catalogWrapper = document.querySelector('.body-catalog__wrapper');

if (aside && catalogWrapper && window.innerWidth > 1024) {
    const handleScroll = () => {
        const screenHeight = window.innerHeight;
        const asideHeight = aside.offsetHeight;
        const catalogWrapperHeight = catalogWrapper.offsetHeight;
        const asideStickyPosition = asideHeight - screenHeight;
        const distanceFromTopAside = aside.getBoundingClientRect().top + window.scrollY;
        let scrolled = window.scrollY;

        if (scrolled >= distanceFromTopAside + asideStickyPosition) {
            if (asideHeight > catalogWrapperHeight) {
                aside.style.position = 'sticky';
                aside.style.top = screenHeight - asideHeight + "px";
            } else {
                aside.style.position = 'sticky';
                aside.style.top = '140px';
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
}

// работа с табами в шапке

const headerTabs = document.getElementById("header-tabs") || null

if (headerTabs) {
    const tabsBnts = headerTabs.querySelectorAll("button.tabs__title")
    const tabsContent = headerTabs.querySelectorAll(".header-tabs__content")

    tabsBnts.forEach(tab => {
        const tabID = tab.getAttribute("data-tab-button")

        tab.addEventListener("mouseover", () => {
            tabsContent.forEach(content => {
                content.classList.remove("_content-active")
            })
            headerTabs.querySelector(`[data-tabs-body="${tabID}"]`).classList.add("_content-active")
        })
    });
}

// работа с табами в описании товара

const productTabs = document.getElementById("details") || null

if (productTabs) {
    const tabsBnts = productTabs.querySelectorAll("button.details-tabs__title")
    const tabsContent = productTabs.querySelectorAll(".details__content")

    tabsBnts.forEach(tab => {
        const tabID = tab.getAttribute("data-tab-button")

        tab.addEventListener("click", () => {
            tabsContent.forEach(content => {
                content.classList.remove("_content-active")
            })
            tabsBnts.forEach(tab => {
                tab.classList.remove("_tab-active")
            })
            productTabs.querySelector(`[data-tabs-body="${tabID}"]`).classList.add("_content-active");
            productTabs.querySelector(`[data-tab-button="${tabID}"]`).classList.add("_tab-active")
        })
    });
}

// работа с табами карты сайта

const siteMapTabs = document.getElementById("site-tabs") || null

if (siteMapTabs) {
    const tabsBtns = siteMapTabs.querySelectorAll("button.map-tabs__title")
    const tabsContent = siteMapTabs.querySelectorAll(".map-content")

    tabsBtns.forEach(tab => {
        const tabID = tab.getAttribute("data-tab-button")

        tab.addEventListener("mouseover", () => {
            tabsBtns.forEach(tab => {
                tab.classList.remove("_tab-active")
            })
            tab.classList.add("_tab-active")

            tabsContent.forEach(content => {
                content.classList.remove("_content-active")
            })
            // console.log(tabID)
            // console.log(headerTabs.querySelector(`[data-tabs-body="${tabID}"]`))
            siteMapTabs.querySelector(`[data-tabs-body="${tabID}"]`).classList.add("_content-active")
        })
    });
}

// показать больше текста в описании

const descLessMoreTextBnt = document.getElementById("description-more-less") || null

if (descLessMoreTextBnt) {
    descLessMoreTextBnt.addEventListener("click", () => {
        descLessMoreTextBnt.parentElement.classList.toggle("_less-text")

        if (descLessMoreTextBnt.textContent.trim() === "Читать полностью") {
            descLessMoreTextBnt.textContent = "Свернуть"
        } else {
            descLessMoreTextBnt.textContent = "Читать полностью"
        }

        // console.log(descLessMoreTextBnt.textContent)
    })
}

// добавить в корзину товар и работа с счетчиком товара

const addToCartBtn = document.getElementById("add-to-cart") || null
const productCounter = document.getElementById("product-counter") || null

if (addToCartBtn) {
    const increaseCounter = productCounter.querySelector(".counter-product__increase")
    const decreaseCounter = productCounter.querySelector(".counter-product__decrease")
    const productQuantity = document.getElementById("product-quantity")
    const currentQuantity = productCounter.querySelector(".current-quantity")

    addToCartBtn.addEventListener("click", () => {
        addToCartBtn.parentElement.classList.add("_product-in-cart")
        productQuantity.value = 1
        currentQuantity.textContent = productQuantity.value
    })

    increaseCounter.addEventListener("click", () => {
        productQuantity.value = +(productQuantity.value) + 1
        currentQuantity.textContent = productQuantity.value
    })

    decreaseCounter.addEventListener("click", () => {
        productQuantity.value = +(productQuantity.value) - 1
        currentQuantity.textContent = productQuantity.value

        if (!+(productQuantity.value)) {
            addToCartBtn.parentElement.classList.remove("_product-in-cart")
        }
    })
}

// скролл к информации о товаре

const toDetails = document.getElementById('to-details')

// if (toDetails) {
//     toDetails.addEventListener('click', function () {
//         document.querySelector('#details').scrollIntoView({
//             top: document.querySelector(".scroll-header").offsetHeight,
//             behavior: 'smooth'
//         });
//     });
// }

if (toDetails) {
    toDetails.addEventListener('click', function () {
        const detailsSection = document.querySelector('#details');
        const headerOffset = document.querySelector('.scroll-header').offsetHeight; // Высота шапки
        const elementPosition = detailsSection.getBoundingClientRect().top + window.scrollY; // Позиция элемента относительно документа
        const offsetPosition = elementPosition - headerOffset; // Учитываем высоту шапки

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}


// работа с мобильным каталогом

const mobileCatalog = document.getElementById("mobile-catalog") || null
// console.log(mobileCatalog)

if (mobileCatalog) {

    const openHideMobileCatalogBtn = document.getElementById("open-mobile-catalog")
    const hideMobileCatalogBtn = document.getElementById("close-mobile-catalog")
    const categoryBlock = mobileCatalog.querySelectorAll(".catalog-mobile__block")
    const categoryBackBtns = mobileCatalog.querySelectorAll(".catalog-mobile__title")
    const catalogCategories = mobileCatalog.querySelectorAll(".catalog-mobile__item[data-catalog-category]")

    openHideMobileCatalogBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("_mobile-catalog-active")
    })

    hideMobileCatalogBtn.addEventListener("click", () => {
        document.documentElement.classList.remove("_mobile-catalog-active")
    })

    catalogCategories.forEach(category => {
        category.addEventListener("click", () => {
            const categoryID = category.getAttribute("data-catalog-category");
            // console.log(categoryID)

            categoryBlock.forEach(block => {
                block.setAttribute("hidden", "hidden")
            });

            // console.log(document.querySelector(`div[data-category="${categoryID}"]`))
            mobileCatalog.querySelector(`div[data-category="${categoryID}"]`).removeAttribute("hidden")
        })
    });

    categoryBackBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const categoryID = btn.getAttribute("data-category-to");

            categoryBlock.forEach(block => {
                block.setAttribute("hidden", "hidden")
            });

            mobileCatalog.querySelector(`div[data-category="${categoryID}"]`).removeAttribute("hidden")
        })
    });
}

// работа с мобильным меню

const mobileMenu = document.getElementById("mobile-pages-menu") || null
// console.log(mobileMenu)

if (mobileMenu) {

    const openHideMobileMenuBtn = document.getElementById("open-mobile-menu")
    const hideMobileMenuBtn = document.getElementById("close-mobile-menu")
    const categoryBlock = mobileMenu.querySelectorAll(".catalog-mobile__block")
    const categoryBackBtns = mobileMenu.querySelectorAll(".catalog-mobile__title")
    const catalogCategories = mobileMenu.querySelectorAll(".catalog-mobile__item[data-catalog-category]")

    openHideMobileMenuBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("_mobile-menu-active")
    })

    hideMobileMenuBtn.addEventListener("click", () => {
        document.documentElement.classList.remove("_mobile-menu-active")
    })

    catalogCategories.forEach(category => {
        category.addEventListener("click", () => {
            const categoryID = category.getAttribute("data-catalog-category");
            // console.log(categoryID)

            categoryBlock.forEach(block => {
                block.setAttribute("hidden", "hidden")
            });

            // console.log(document.querySelector(`div[data-category="${categoryID}"]`))
            mobileMenu.querySelector(`div[data-category="${categoryID}"]`).removeAttribute("hidden")
        })
    });

    categoryBackBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const categoryID = btn.getAttribute("data-category-to");

            categoryBlock.forEach(block => {
                block.setAttribute("hidden", "hidden")
            });

            mobileMenu.querySelector(`div[data-category="${categoryID}"]`).removeAttribute("hidden")
        })
    });
}

// попап для тендера

const tenderPopup = document.getElementById("tender")

if (tenderPopup) {

    const toStep_1Btn = tenderPopup.querySelector("._to-step-1")
    const toStep_2Btn = tenderPopup.querySelector("._to-step-2")

    // console.log(toStep_2Btn)

    toStep_2Btn.addEventListener("click", (event) => {

        event.preventDefault()

        tenderPopup.classList.remove("_step-1")
        tenderPopup.classList.add("_step-2")
    })

    toStep_1Btn.addEventListener("click", () => {

        tenderPopup.classList.remove("_step-2")
        tenderPopup.classList.add("_step-1")
    })
}

// свитчер способа доставки

const deliverySwitcher = document.getElementById("delivery-switcher")

if (deliverySwitcher) {

    const deliveryTabs = document.querySelectorAll(".delivery-cart__tab")

    deliveryTabs.forEach(tab => {
        tab.addEventListener("click", () => {

            deliveryTabs.forEach(tab => {
                tab.classList.remove("_active")
            });

            tab.classList.add("_active")

        })
    });
}

// показать опции товара в моб версии

const mobileOptions = document.getElementById("mobile-options")
let productOptionsBtns = document.querySelectorAll(".more-options") || null

// console.log(mobileOptions, productOptionsBtns)

if (mobileOptions && productOptionsBtns.length) {

    const mobileCloseBtn = mobileOptions.querySelector(".mobile-options__close ")

    productOptionsBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            mobileOptions.classList.add("_active");
            document.documentElement.classList.add("_filter-active")
        })

    });

    mobileCloseBtn.addEventListener("click", () => {
        mobileOptions.classList.remove("_active")
        document.documentElement.classList.remove("_filter-active")
    })
}

const headerCartIcon = document.getElementById("showHideHeaderCart")
const headerCart = document.getElementById("header-cart")

if (headerCartIcon) {
    headerCart.addEventListener("click", function (event) {
        event.stopPropagation()
    })
    headerCart.querySelector(".header-cart__wrapper").addEventListener("click", () => {
        headerCartIcon.classList.remove("_show-cart")
    })
    headerCartIcon.addEventListener("click", function (event) {
        event.stopPropagation()
        headerCartIcon.classList.toggle("_show-cart")
    })

}

headerCartIcon.onfocus = function () {
    // console.log("в фокусе")
}

headerCartIcon.onblur = function () {
    // console.log("не в фокусе")
}

// работа с табами в оформление заказа

const deliveryTabs = document.getElementById("shipping-block") || null

if (deliveryTabs) {
    const tabsBnts = deliveryTabs.querySelectorAll("button.shipping-tabs__item")
    const tabsContent = deliveryTabs.querySelectorAll(".shipping__content")

    tabsBnts.forEach(tab => {
        const tabID = tab.getAttribute("data-tab-button")

        tab.addEventListener("click", () => {
            tabsContent.forEach(content => {
                content.classList.remove("_content-active")
            })
            tabsBnts.forEach(tab => {
                tab.classList.remove("_tab-active")
            })
            deliveryTabs.querySelector(`[data-tabs-body="${tabID}"]`).classList.add("_content-active");
            deliveryTabs.querySelector(`[data-tab-button="${tabID}"]`).classList.add("_tab-active")
        })
    });
}

// работа с табами в библиотеке

const libraryTabs = document.getElementById("library-block") || null

if (libraryTabs) {
    const tabsBnts = libraryTabs.querySelectorAll("button.library-tabs__item")
    const tabsContent = libraryTabs.querySelectorAll(".library__content")

    tabsBnts.forEach(tab => {
        const tabID = tab.getAttribute("data-tab-button")

        tab.addEventListener("click", () => {
            tabsContent.forEach(content => {
                content.classList.remove("_content-active")
            })
            tabsBnts.forEach(tab => {
                tab.classList.remove("_tab-active")
            })
            libraryTabs.querySelector(`[data-tabs-body="${tabID}"]`).classList.add("_content-active");
            libraryTabs.querySelector(`[data-tab-button="${tabID}"]`).classList.add("_tab-active")
        })
    });
}

// переключение способа получения заказа

const shippingType = document.getElementById("shipping-type")

if (shippingType) {
    const radioBtns = shippingType.querySelectorAll("input[type='radio']")

    radioBtns.forEach(btn => {
        btn.addEventListener("change", () => {
            const bntID = btn.getAttribute("data-radio")

            shippingType.querySelectorAll(".stock-block").forEach(block => {
                block.classList.remove("_active")
            })

            shippingType.querySelector(`.stock-block[data-type="${bntID}"]`).classList.add("_active")
        })
    });
}

// переключение типа клиента

const clientType = document.getElementById("client-type")

if (clientType) {
    const radioBtns = clientType.querySelectorAll("input[type='radio']")

    radioBtns.forEach(btn => {
        btn.addEventListener("change", () => {
            const bntID = btn.getAttribute("data-radio")

            clientType.querySelectorAll(".info-client").forEach(block => {
                block.classList.remove("_active")
            })

            clientType.querySelector(`.info-client[data-type="${bntID}"]`).classList.add("_active")
        })
    });
}

const clientInfoBlocks = document.querySelectorAll(".toggle-client-info") || null

if (clientInfoBlocks.length) {

    clientInfoBlocks.forEach(block => {

        const radioBtns = block.querySelectorAll("input[type='radio']")

        radioBtns.forEach(btn => {
            btn.addEventListener("change", () => {

                block.classList.remove("individual", "company")

                if (btn.checked) {
                    block.classList.add(btn.value);
                }
                console.log(btn.value)
            })
        });
    });
}

// переход от списка пунктов выдачи к конкретному пункту

const pickupMap = document.getElementById("pick-up-map")

if (pickupMap) {

    const map = pickupMap.querySelector(".popup__map")
    const backToListIcon = pickupMap.querySelector(".point-pick-up__title svg")

    backToListIcon.addEventListener("click", () => {
        map.classList.add("_pick-ups-list")
    })

    let pickupPoints = pickupMap.querySelectorAll("li.pick-ups__item")

    pickupPoints.forEach(item => {
        item.addEventListener("click", () => {
            map.classList.remove("_pick-ups-list")
        })
    });

    const searchPickup = pickupMap.querySelector("#search-pick-up")

    searchPickup.addEventListener('input', () => {

        const pickupBlock = pickupMap.querySelector(".pick-ups")

        if (searchPickup.value.length) {
            pickupBlock.classList.add("_active-search")
        } else {
            pickupBlock.classList.remove("_active-search")
        }
    });
}

// работа с кнопкой "очистить список" избранного

const cleanFavoritesList = document.getElementById("remove-all-favorites")

if (cleanFavoritesList) {

    const favoritesSection = document.getElementById("favorites") || null
    let favoritesProducts = favoritesSection.querySelectorAll(".product-item") || null


    if (!favoritesProducts) {
        favoritesSection.classList.add("_section-empty")
    }

    cleanFavoritesList.addEventListener("click", () => {
        favoritesSection.classList.add("_section-empty")
    })
}

// работа с отображение дефолтного сообщения поиска

const searchSection = document.getElementById("search") || null

if (searchSection) {


    console.log(searchSection.querySelectorAll(".product-item").length)
    if (!searchSection.querySelectorAll(".product-item").length) {
        searchSection.classList.add("_section-empty")
    }
}

// горизонтальный скролл для десктопа

const te = document.querySelectorAll(".scroll-x");
let se, ie, ne = !1;
te.forEach((e => {
    e.addEventListener("mousedown", (t => {
        ne = !0,
            e.classList.add("active"),
            se = t.pageX - e.offsetLeft,
            ie = e.scrollLeft
    }
    ))
}
)),
    te.forEach((e => {
        e.addEventListener("mouseleave", (() => {
            ne = !1,
                e.classList.remove("active")
        }
        ))
    }
    )),
    te.forEach((e => {
        e.addEventListener("mouseup", (() => {
            ne = !1,
                e.classList.remove("active")
        }
        ))
    }
    )),
    te.forEach((e => {
        e.addEventListener("mousemove", (t => {
            if (!ne)
                return;
            t.preventDefault();
            const s = 3 * (t.pageX - e.offsetLeft - se);
            e.scrollLeft = ie - s
        }
        ))
    }
    ))

// работа с табами в сравнении товаров

const comparissonSection = document.getElementById("comparisson")

if (comparissonSection) {
    let comparissonSections = comparissonSection.querySelectorAll(".body-comparisson__content") || null

    const tabsBnts = comparissonSection.querySelectorAll("button.comparisson-tabs__title")
    const tabsContent = comparissonSection.querySelectorAll(".body-comparisson__content")

    tabsBnts.forEach(tab => {
        const tabID = tab.getAttribute("data-tab-button")

        tab.addEventListener("click", () => {
            tabsContent.forEach(content => {
                // console.log("удаляем")
                content.classList.remove("_content-active")
            })
            tabsBnts.forEach(tab => {
                tab.classList.remove("_tab-active")
            })
            comparissonSection.querySelector(`[data-tabs-body="${tabID}"]`).classList.add("_content-active");
            comparissonSection.querySelector(`[data-tab-button="${tabID}"]`).classList.add("_tab-active")
            setSizeForPoints()
        })
    });

    if (comparissonSections.length) {

        comparissonSections.forEach(section => {
            const tabsBnts = section.querySelectorAll(".info-comparisson-tabs__title")
            const tabsContent = section.querySelectorAll(".info-comparisson__content")

            tabsBnts.forEach(tab => {
                const tabID = tab.getAttribute("data-tab-info")

                tab.addEventListener("click", () => {
                    tabsContent.forEach(content => {
                        content.classList.remove("_content-active")
                    })
                    tabsBnts.forEach(tab => {
                        tab.classList.remove("_tab-active")
                    })
                    section.querySelector(`[data-tabs-info="${tabID}"]`).classList.add("_content-active");
                    section.querySelector(`[data-tab-info="${tabID}"]`).classList.add("_tab-active")
                    setSizeForPoints()
                })
            });
        });
    }
}

setSizeForPoints()

// фиксируем шапку при скролле
const scrollHeader = document.querySelector(".scroll-header");

if (scrollHeader) {

    let sticky = document.querySelector("header").offsetHeight || null;
    console.log(sticky)

    document.querySelector("body").style.paddingTop = scrollHeader.offsetHeight + "px"

    const fixHeader = function () {
        if (window.pageYOffset > sticky) {
            document.documentElement.classList.add("_header-fixed");
        } else {
            document.documentElement.classList.remove("_header-fixed");
        }
    }

    window.addEventListener("scroll", fixHeader)
}

// фиксация слайдера сравнения при скролле

if (comparissonSection) {

    const fixSlider = function () {

        let comparissonBlock = comparissonSection.querySelector(".comparisson__body")
        let distance = comparissonBlock.getBoundingClientRect().top


        if ((distance - scrollHeader.offsetHeight + 30 < 0) && ((Math.min(screen.width, window.innerWidth)) <= 576)) {
            comparissonSection.classList.add("_fix-slider")

            if ((window.scrollY >= scrollHeader.offsetHeight + comparissonBlock.offsetHeight - 100)) {
                comparissonSection.classList.add("_transparent-slider")
            } else {
                comparissonSection.classList.remove("_transparent-slider")
            }
        }

        if (distance - scrollHeader.offsetHeight > 10) {
            comparissonSection.classList.remove("_fix-slider")
        }
    }

    window.addEventListener("scroll", fixSlider)
}

// кнопка скрытия информации о товаре в сравнении

if (comparissonSection) {

    let comparissonInfoBtns = comparissonSection.querySelectorAll("button.info-comparisson-tabs__button") || null

    if (comparissonInfoBtns.length) {
        comparissonInfoBtns.forEach(btn => {
            btn.addEventListener("click", function (event) {
                event.stopPropagation()
                comparissonSection.classList.toggle("_hide-comparisson-info")
            })
        });
    }
}

function setSizeForPoints() {
    const numberOfPointsOfBlock = document.querySelector("._content-active div[data-tabs-info]._content-active") || null

    // console.log(numberOfPointsOfBlocks)

    if (numberOfPointsOfBlock) {

        // console.log(numberOfPointsOfBlock.querySelectorAll("[data-point]"))
        const numberOfItems = numberOfPointsOfBlock.querySelectorAll(".comparisson-info-block__list li")
        const numberOfMobItems = numberOfPointsOfBlock.querySelectorAll(".comparisson-info__list li")

        setTimeout(() => {
            numberOfItems.forEach((element, index) => {

                // Находим все элементы с заданным data-point
                const elements = numberOfPointsOfBlock.querySelectorAll(`[data-point="${index + 1}"]`);
                // console.log(numberOfPointsOfBlock.querySelectorAll(`[data-point="${i}"]`))

                //  Преобразуем NodeList в массив
                let elementsArray = Array.from(elements);
                // console.log("array", elementsArray)

                // Проверяем, есть ли элементы
                if (elementsArray.length === 0) return;

                // Находим максимальную высоту среди элементов
                let arrayOfHeights = [...elementsArray.map(el => el.offsetHeight)]
                // console.log(arrayOfHeights)

                let maxHeight = Math.max(...elementsArray.map(el => el.offsetHeight));

                // console.log(maxHeight)

                // Устанавливаем максимальную высоту всем элементам в массиве
                elementsArray.forEach(el => {
                    el.style.height = `${maxHeight}px`;
                });

            });

        }, 200);

        setTimeout(() => {
            numberOfMobItems.forEach((element, index) => {

                // Находим все элементы с заданным data-point
                const elements = numberOfPointsOfBlock.querySelectorAll(`[data-mobile-point="${index + 1}"]`);
                // console.log(numberOfPointsOfBlock.querySelectorAll(`[data-point="${i}"]`))

                //  Преобразуем NodeList в массив
                let elementsArray = Array.from(elements);
                // console.log("array", elementsArray)

                // Проверяем, есть ли элементы
                if (elementsArray.length === 0) return;

                // Находим максимальную высоту среди элементов
                let arrayOfHeights = [...elementsArray.map(el => el.offsetHeight)]
                // console.log(arrayOfHeights)

                let maxHeight = Math.max(...elementsArray.map(el => el.offsetHeight));

                // console.log(maxHeight)

                // Устанавливаем максимальную высоту всем элементам в массиве
                elementsArray.forEach(el => {
                    el.style.height = `${maxHeight}px`;
                });

            });

        }, 500);
    }
}

// инициализация маски ввода телефона

const phoneInputs = document.querySelectorAll("input[type='tel']") || null

const indexInputs = document.querySelectorAll("input[data-input='index']") || null

console.log(indexInputs)

if (phoneInputs.length) {

    phoneInputs.forEach(input => {
        Inputmask({ mask: "+7 (999) 999-99-99" }).mask(input);
    });
}

if (indexInputs.length) {

    indexInputs.forEach(input => {
        Inputmask({ mask: "99-99-99" }).mask(input);
    });
}

const orderTabsContainer = document.querySelectorAll(".order-grid")

if (orderTabsContainer.length) {

    orderTabsContainer.forEach(element => {
        const tabsBnts = element.querySelectorAll("[data-tab-button]") || null
        const tabsContent = element.querySelectorAll("[data-tabs-body]") || null

        if (tabsBnts.length) {

            tabsBnts.forEach(tab => {
                const tabID = tab.getAttribute("data-tab-button")

                tab.addEventListener("click", () => {
                    tabsContent.forEach(content => {
                        content.classList.remove("_content-active")
                    })
                    tabsBnts.forEach(tab => {
                        tab.classList.remove("_tab-active")
                    })
                    element.querySelector(`[data-tabs-body="${tabID}"]`).classList.add("_content-active");
                    element.querySelector(`[data-tab-button="${tabID}"]`).classList.add("_tab-active")
                })
            });
        }
    });
}

const paymentsBlock = document.getElementById("payments-block") || null

if (paymentsBlock) {

    let paymentsOptions = paymentsBlock.querySelectorAll(".item-payment__button") || null

    if (paymentsOptions.length) {

        paymentsOptions.forEach(option => {
            option.addEventListener("click", () => {
                option.classList.toggle("_active")
                option.querySelector(".options-payment__close").addEventListener("click", (event) => {
                    event.stopPropagation()
                    option.classList.remove("_active")
                    document.documentElement.classList.remove("_filter-active")
                })
                if ((Math.min(screen.width, window.innerWidth)) <= 576) {
                    document.documentElement.classList.toggle("_filter-active")
                }
            })
        });
    }
}

// скролл до нужного блока

const scrollToBlocks = document.querySelectorAll("[data-to-block]") || null

if (scrollToBlocks.length) {

    scrollToBlocks.forEach(scrollToBlock => {
        const scrollBlockID = scrollToBlock.getAttribute("data-to-block")
        const targetBlock = document.getElementById(`${scrollBlockID}`)
        const headerOffset = document.querySelector('.scroll-header').offsetHeight;
        const elementPosition = targetBlock.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        scrollToBlock.addEventListener('click', function () {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// показать больше  ивентов на странице мероприятий

const moreEventsBtns = document.querySelectorAll(".grid-events__more") || null

if (moreEventsBtns.length) {
    moreEventsBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".grid-events__item").classList.toggle("_short-list")
        })
    });
}

const companyEvents = document.querySelectorAll(".grid-events__item") || null

if (companyEvents.length) {
    companyEvents.forEach(el => {

        const eventCount = el.querySelectorAll(".grid-events__event") || null

        console.log(eventCount.length)

        if (eventCount.length < 2) {
            el.querySelector(".grid-events__more").style.display = "none"
        }
    });
}

const copyButtons = document.querySelectorAll(".product-item__copy") || null

if (copyButtons.length) {
    copyButtons.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.stopPropagation()
            event.preventDefault()
            const newDiv = document.createElement('div');
            newDiv.classList.add("info-text")
            const copyText = btn.parentNode.textContent.replace(/\s+/g, ' ').trim()
            try {
                navigator.clipboard.writeText(copyText);
                newDiv.textContent = "Скопировано!";
                btn.appendChild(newDiv)
            } catch (err) {
                newDiv.textContent = "Не скопировалось"
                btn.appendChild(newDiv)
            }


            setTimeout(() => {
                newDiv.remove()
            }, 2000);
        })
    });
}

const selectCityBlock = document.getElementById("select-city") || null

if (selectCityBlock) {
    const tabsBtns = selectCityBlock.querySelectorAll(".nav-city__tab")
    const tabsContent = selectCityBlock.querySelectorAll(".select-city__content")
    console.log(tabsBtns)
    tabsBtns.forEach(tab => {
        const tabID = tab.getAttribute("data-tab-region")

        tab.addEventListener("click", () => {
            tabsContent.forEach(content => {
                content.classList.remove("_active")
            })
            tabsBtns.forEach(tab => {
                tab.classList.remove("_active")
            })
            console.log(tabID)
            selectCityBlock.querySelector(`[data-tab-city="${tabID}"]`).classList.add("_active");
            selectCityBlock.querySelector(`[data-tab-region="${tabID}"]`).classList.add("_active")
        })
    });
}


// const callMePopup = document.getElementById('call-me') || null;
// const nameInputCall = document.getElementById('name-for-call') || null;
// const emailInputCall = document.getElementById('number-for-call') || null;
// const registrationInputCall = document.getElementById('number-for-registration') || null;
// // const submitButtonCall = callMePopup.querySelector('button[type="submit"]') || null;

// if (callMePopup) {
//     Inputmask({ mask: "+7 (999) 999-9999" }).mask(document.getElementById("number-for-call"));
// }

// if (nameInputCall) {
//     Inputmask({ mask: "+7 (999) 999-9999" }).mask(document.getElementById("newsletter-phone"));
// }

// if (emailInputCall) {
//     Inputmask({ mask: "+7 (999) 999-9999" }).mask(document.getElementById("number-for-request"));
// }

// if (registrationInputCall) {
//     Inputmask({ mask: "+7 (999) 999-9999" }).mask(document.getElementById("number-for-registration"));
// }

// проверка полей попапов на заполненность

let popups = document.querySelectorAll(".popup")

popups.forEach(popup => {
    const inputName = popup.querySelector("input[name='name']" || null)
    const inputPhone = popup.querySelector("input[name='number']" || null)
    const inputCode = popup.querySelector("input[name='code']" || null)
    // const inputEmail = popup.querySelector("input[name='email']" || null)
    const submitButton = popup.querySelector("button[type='submit']") || null

    if (submitButton) {
        submitButton.addEventListener("click", (event) => {
            event.preventDefault()
            popupClose(submitButton)
        })
    }


    if (inputName) {
        inputName.addEventListener('input', toggleButtonState);
    }

    if (inputPhone) {
        inputPhone.addEventListener('input', toggleButtonState);
    }

    if (inputCode) {
        inputCode.addEventListener('input', toggleButtonState);
    }

    function toggleButtonState() {

        if (inputCode) {
            if (inputName.value.trim() !== '' && inputPhone.value.trim() !== '' && inputCode.value.trim() !== '') {
                submitButton.removeAttribute('disabled');
            } else {
                submitButton.setAttribute('disabled', 'disabled');
            }
        } else {
            if (inputName.value.trim() !== '' && inputPhone.value.trim() !== '') {
                submitButton.removeAttribute('disabled');
            } else {
                submitButton.setAttribute('disabled', 'disabled');
            }
        }
    }
});

// const requestPopup = document.getElementById('request') || null;
// const nameInputRequest = document.getElementById('name-for-request') || null;
// const emailInputRequest = document.getElementById('number-for-request') || null;
// const submitButtonRequest = requestPopup.querySelector('button[type="submit"]') || null;

// if (nameInputCall) {
//     nameInputCall.addEventListener('input', toggleButtonState);
// }

// if (emailInputCall) {
//     emailInputCall.addEventListener('input', toggleButtonState);
// }


// if (nameInputRequest) {
//     nameInputRequest.addEventListener('input', toggleButtonState);
// }

// if (emailInputRequest) {
//     emailInputRequest.addEventListener('input', toggleButtonState);
// }

// function toggleButtonState() {
//     if (nameInputCall.value.trim() !== '' && emailInputCall.value.trim() !== '') {
//         submitButtonCall.removeAttribute('disabled');
//     } else {
//         submitButtonCall.setAttribute('disabled', 'disabled');
//     }
// }

// валидация полей

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelector('input[type="email"]');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {
    if (isEmailValid(inputEmail.value)) {
        inputEmail.style.borderColor = 'green';
    } else {
        inputEmail.style.borderColor = 'red';
    }
}

if (inputEmail) {
    inputEmail.addEventListener('input', onInput);
}