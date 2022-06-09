import { MediaPlayer } from "./MediaPlayer.js";

const $movie = document.querySelector('.movie')
const $button = document.querySelector('.button')
const player = new MediaPlayer($movie)


$button.addEventListener('click',e => {
    $button.classList.toggle('pause')
    const $pause = document.querySelector('.pause');
    ($pause !== null) ? player.playVideo() : player.pauseVideo()
})


