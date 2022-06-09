export class MediaPlayer {
    constructor($movie) {
        this.$movie = $movie
    }
    playVideo(){
        this.$movie.play()
    }
    pauseVideo(){
        this.$movie.pause()
    }
}