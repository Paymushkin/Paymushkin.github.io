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


// playBtn

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
        title: "Redemption",
        name: "Besomorph & Coopex",
        source:
            "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Besomorph-Coopex-Redemption.mp3",
        cover:
            "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/398875d0-9b9e-494a-8906-210aa3f777e0",
    },
    {
        title: "What's The Problem?",
        name: "OSKI",
        source:
            "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/OSKI-Whats-The-Problem.mp3",
        cover:
            "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/810d1ddc-1168-4990-8d43-a0ffee21fb8c",
    },
    {
        title: "Control",
        name: "Unknown Brain x Rival",
        source:
            "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Unknown-BrainxRival-Control.mp3",
        cover:
            "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7bd23b84-d9b0-4604-a7e3-872157a37b61",
    },
];

let currentSongIndex = 0;

function updateSongInfo() {
    songName.textContent = songs[currentSongIndex].title;
    artistName.textContent = songs[currentSongIndex].name;
    song.src = songs[currentSongIndex].source;
    rotatingImage.src = songs[currentSongIndex].cover;

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
    updateSongInfo();
    playPause();
});

backwardButton.addEventListener("click", function () {
    setRangeTrack(progress)
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
    playPause();
});

song.volume = volumeControl.value / 100;

volumeControl.addEventListener('input', function () {
    song.volume = this.value / 100;
});
