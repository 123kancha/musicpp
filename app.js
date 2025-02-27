const music = new Audio('./audio/1.mp3 ')
// music.play();

const songs = [
    {
        id: 1,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/1.jpg"
    },
    {
        id:2,
        songName:`Titli<br>
        <div class="subtitle">Chinmayi Sripada</div>`,
        poster:"./image/2.webp"
    },
    {
        id: 3,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/3.jpg"
    },
    {
        id:4,
        songName:`Titli<br>
        <div class="subtitle">Chinmayi Sripada</div>`,
        poster:"./image/4.jpg"
    },
    {
        id: 5,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/5.jpg"
    },
    {
        id:6,
        songName:`Titli<br>
        <div class="subtitle">Chinmayi Sripada</div>`,
        poster:"./image/6.jpg"
    },
    {
        id: 7,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/7.jpg"
    },
    {
        id:8,
        songName:`Titli<br>
        <div class="subtitle">Chinmayi Sripada</div>`,
        poster:"./image/8.jpg"
    },
    {
        id: 9,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/9.jpg"
    },
    {
        id:10,
        songName:`Titli<br>
        <div class="subtitle">Chinmayi Sripada</div>`,
        poster:"./image/10.jpg"
    },
    {
        id: 11,
        songName: `Dilbar<br>
        <div class="subtitle">XYZ</div>`,
        poster:"./image/11.jpg"
    },
    {
        id: 12,
        songName: `Humnava<br>
        <div class="subtitle">Dhukhi aadmi</div>`,
        poster:"./image/12.jpg"
    },
    {
        id: 13,
        songName: `Locha-e-ulfat<br>
        <div class="subtitle">Benny Dayal</div>`,
        poster:"./image/13.jpg"
    },
    {
        id: 14,
        songName: `Dilbar<br>
        <div class="subtitle">XYZ</div>`,
        poster:"./image/14.jpg"
    },
    {
        id: 15,
        songName: `Humnava<br>
        <div class="subtitle">Dhukhi Aadmi</div>`,
        poster:"./image/15.jpg"
    },
    {
        id: 16,
        songName: `Locha-e-ulfat<br>
        <div class="subtitle">Benny Dayal</div>`,
        poster:"./image/16.jpg"
    },
    {
        id: 17,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/17.jpg"
    },
    {
        id: 18,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/18.jpg"
    },
    {
        id: 19,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/19.jpg"
    },
    {
        id: 20,
        songName: `Zaalim<br>
        <div class="subtitle">Payal Dev</div>`,
        poster:"./image/20.jpg"
    }
];

Array.from(document.getElementsByClassName('song-item')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlist-button')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
        el.classList.remove('./image/play_button.png');
        el.classList.add('./image/pause.png');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('song-item')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}


let index = 0;

let poster = document.getElementById('poster_master_play');

Array.from(document.getElementsByClassName('playlist-button')).forEach((e) => {
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(abc);
        music.src = `./audio/${index}.mp3`;
        poster.src = `./image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = "rgb(105, 105, 105, .1)";

        makeAllPlays();
        el.target.classList.add('./image/play_button.png');
        el.target.classList.remove('./image/pause.png');
        wave.classList.add('active1');
        
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_curr);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    if(min2 < 10){
        min2 = `0${min2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');

    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
// index = Array.from(document.getElementsByClassName('song-item')).length;
// console.log(index);

back.addEventListener('click', ()=>{
    index -= 1;
    if(index <1){
        index = Array.from(document.getElementsByClassName('song-item')).length;

    }
    music.src = `./audio/${index}.mp3`;
        poster.src = `./image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = "rgb(105, 105, 105, .1)";

        makeAllPlays();
        el.target.classList.add('./image/play_button.png');
        el.target.classList.remove('./image/pause.png');
        wave.classList.add('active1');

})

next.addEventListener('click', ()=>{
    index++;
    if(index >Array.from(document.getElementsByClassName('song-item')).length){
        index = 1;

    }
    music.src = `./audio/${index}.mp3`;
        poster.src = `./image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = "rgb(105, 105, 105, .1)";

        makeAllPlays();
        el.target.classList.add('./image/play_button.png');
        el.target.classList.remove('./image/pause.png');
        wave.classList.add('active1');
})

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});