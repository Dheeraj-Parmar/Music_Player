const songs = document.querySelector('.songList') ;
const songImage = document.querySelector('.songImage') ;
const play = document.querySelector('#play') ;
const backward = document.querySelector('#backward') ;
const forward = document.querySelector('#forward') ;

var audio = new Audio() ;

var selectedSong = 0 ;

const songListDisplay = () => {

    let songHtml = '';

    songsList.forEach((value,i) => {
        songHtml += `<div class="songInfo" id="${i}">
                        <div class="songPic-Name">
                            <img src="${value.image}" alt="songimage">
                            <p class="songName">${value.name}</p>
                        </div>
                        <p class="songTime">${value.time}</p>
                    </div>`
    })
    songs.innerHTML = songHtml ;
    songImage.innerHTML = `<img src="${songsList[selectedSong].image}"></img>` ;
    audio.src = `${songsList[selectedSong].url}` ;
}

songListDisplay() ;

let flag = 0 ;

songs.addEventListener("click", (details) => {
    selectedSong = details.target.id ;
    songListDisplay();
    audio.play() ;
    play.innerHTML = `<i class="fa-solid fa-pause"></i>` ;
    flag = 1 ;    
})


play.addEventListener("click" , () => {
    if (flag == 0) {
        play.innerHTML = `<i class="fa-solid fa-pause"></i>` ;
        audio.play() ;
        flag = 1 ;
    } else {        
        play.innerHTML = `<i class="fa-solid fa-play"></i>` ;
        audio.pause() ;
        flag = 0 ;
    }
})

forward.addEventListener("click" , () => {
    if (selectedSong < songsList.length - 1) {
        selectedSong++ ;
        songListDisplay();
        audio.play() ;
    }
    else {
        selectedSong = 0 ;
        songListDisplay();
        audio.play() ;
    }
})

backward.addEventListener("click" , () => {
    if (selectedSong > 0) {
        selectedSong-- ;
        songListDisplay();
        audio.play() ;
    }
    else {
        selectedSong = 4 ;
        songListDisplay();
        audio.play() ;
    }
})