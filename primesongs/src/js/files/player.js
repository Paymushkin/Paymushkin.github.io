const bodyElement = document.querySelector('body')
const productsItems = document.querySelectorAll('.product-item__header')

if (productsItems.length) {
    productsItems.forEach(product => {
        product.addEventListener("click", () => {
            if (!bodyElement.classList.contains('_player-active')) {
                bodyElement.classList.add('_player-active')

                window.scrollBy({
                    top: 100,
                    behavior: 'smooth'
                });
            }
            const findSongIndexById = (id) => {
                return songs.findIndex(song => song.id === id);
            };

            const songIdToFind = product.dataset.id;
            const foundSong = findSongById(songIdToFind);
            const foundIndex = findSongIndexById(songIdToFind);


            if (foundSong) {
                updateSongInfo(foundSong, foundIndex)
                playPause();
            } else {
                console.log("Песня не найдена");
            }
        })
    });
}

// Range Slider Properties.

const sliderProps = {
    fill: "#00DEC7",
    background: "#454545",
};

const sliders = document.querySelectorAll(".range-wrapper");

sliders.forEach(slider => {
    const sliderRangeInput = slider.querySelector("input[type='range']")
    sliderRangeInput.addEventListener("input", event => {
        setRangeTrack(sliderRangeInput)
    });
});

function setRangeTrack(slider) {
    const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}

const progress = document.getElementById("track");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.getElementById("playPauseBtn")
const forwardButton = document.querySelector(".controls-player .forward");
const backwardButton = document.querySelector(".controls-player .backward");
const rotatingImage = document.getElementById("rotatingImage");
const songName = document.querySelector(".about-song__name");
const artistName = document.querySelector(".about-song__artists");
const volumeControl = document.getElementById('volume');

let rotating = false;
let currentRotation = 0;
let rotationInterval;

setRangeTrack(volumeControl)

const songs = [
    {
        id: "00001",
        title: "Blinding Lights",
        name: "Besomorph & Coopex",
        source:
            "files/Besomorph-Coopex-Redemption.mp3",
        cover:
            "./img/catalog/item-1.png",
        webpCover:
            "./img/catalog/item-1.webp",
    },
    {
        id: "00002",
        title: "7 Rings",
        name: "OSKI",
        source:
            "files/OSKI-Whats-The-Problem.mp3",
        cover:
            "./img/catalog/item-2.png",
        webpCover:
            "./img/catalog/item-2.webp",
    },
    {
        id: "00003",
        title: "Broken Clocks",
        name: "Unknown Brain x Rival",
        source:
            "files/Unknown-BrainxRival-Control.mp3",
        cover:
            "./img/catalog/item-3.png",
        webpCover:
            "./img/catalog/item-3.webp",
    },
    {
        id: "00004",
        title: "Paint The Town Red",
        name: "Unknown artist",
        source:
            "files/Unknown-BrainxRival-Control.mp3",
        cover:
            "./img/catalog/item-4.png",
        webpCover:
            "./img/catalog/item-4.webp",
    },
];

const findSongById = (id) => {
    return songs.find(song => song.id === id);
};

let currentSongIndex = 0;

function updateSongInfo(songId, index) {
    songName.textContent = songId.title;
    artistName.textContent = songId.name;
    song.src = songId.source;
    if (document.documentElement.classList.contains("webp")) {
        rotatingImage.style.backgroundImage = `url(${songId.webpCover})`;
    } else {
        rotatingImage.style.backgroundImage = `url(${songId.cover})`;
    }
    currentSongIndex = index;

    song.addEventListener("loadeddata", function () { });
}

song.addEventListener("loadedmetadata", function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

});

song.addEventListener("ended", function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
    playPause();
});

song.addEventListener("timeupdate", function () {
    setRangeTrack(progress)
    if (!song.paused) {
        progress.value = song.currentTime;
    }
});

function playPause() {
    if (song.paused) {
        song.play();
        playPauseButton.classList.remove("_play")
    } else {
        song.pause();
        playPauseButton.classList.add("_play")
    }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
    song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
    song.play();
    playPauseButton.classList.remove("_play")
});

forwardButton.addEventListener("click", function () {
    setRangeTrack(progress)
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo(songs[currentSongIndex], currentSongIndex);
    playPause();
});

backwardButton.addEventListener("click", function () {
    setRangeTrack(progress)
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo(songs[currentSongIndex], currentSongIndex);
    playPause();
});

song.volume = volumeControl.value / 100;

volumeControl.addEventListener('input', function () {
    song.volume = this.value / 100;
});

const favoriteBtn = document.getElementById("favoriteBtn")

if (favoriteBtn) {
    favoriteBtn.addEventListener("click", function () {
        favoriteBtn.classList.toggle("_liked")
    })
}