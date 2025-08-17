// Welcome dismiss
document.getElementById('skipWelcome').addEventListener('click', () => {
  const welcome = document.getElementById('welcome');
  welcome.classList.add('hide'); // hides overlay
});
document.getElementById('skipWelcome').addEventListener('click', () => {
  const welcome = document.getElementById('welcome');
  welcome.classList.add('hide'); // hides overlay
});
// Live search (Books & Songs)
function attachSearch(inputId, cardsSelector) {
  const input = document.getElementById(inputId);
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(cardsSelector).forEach(card => {
      const txt = card.textContent.toLowerCase();
      card.style.display = txt.includes(q) ? '' : 'none';
    });
  });
}
attachSearch('searchBooks', '#books .media-card');
attachSearch('searchSongs', '#songs .media-card');

// Back to top
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

/* ===========================
   Mezmur Player
=========================== */
const tracks = [
  {
    title: "Mezmur One",
    artist: "DGKA Choir",
    cover: "https://via.placeholder.com/400x400?text=Mezmur+1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Mezmur Two",
    artist: "DGKA Choir",
    cover: "https://via.placeholder.com/400x400?text=Mezmur+2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Mezmur Three",
    artist: "DGKA Choir",
    cover: "https://via.placeholder.com/400x400?text=Mezmur+3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

let currentTrack = 0;
const audio = document.getElementById('audio');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const playerCover = document.getElementById('playerCover');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const playlistEl = document.getElementById('playlist');

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  playerCover.src = track.cover;
  updateActivePlaylist();
}

function playPause() {
  if(audio.paused){
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function prevTrack() {
  currentTrack = (currentTrack-1+tracks.length)%tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = "⏸️";
}

function nextTrack() {
  currentTrack = (currentTrack+1)%tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = "⏸️";
}

function updateProgress(){
  const percent = (audio.currentTime/audio.duration)*100;
  progress.value = percent || 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
}

function formatTime(sec){
  if(isNaN(sec)) return "00:00";
  const m = Math.floor(sec/60).toString().padStart(2,'0');
  const s = Math.floor(sec%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

progress.addEventListener('input', ()=> {
  audio.currentTime = (progress.value/100)*audio.duration;
});

playBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextTrack);

// Playlist UI
tracks.forEach((track,index)=>{
  const li = document.createElement('li');
  li.textContent = track.title + " — " + track.artist;
  li.addEventListener('click',()=>{
    currentTrack=index;
    loadTrack(currentTrack);
    audio.play();
    playBtn.textContent="⏸️";
  });
  playlistEl.appendChild(li);
});

function updateActivePlaylist(){
  document.querySelectorAll('#playlist li').forEach((li,i)=>{
    li.classList.toggle('active', i===currentTrack);
  });
}

loadTrack(currentTrack);
document.getElementById('skipWelcome').addEventListener('click',()=> {
  const w=document.getElementById('welcome'); w.style.animation='fadeOut .6s ease forwards';
});

// Live search (Books & Songs)
function attachSearch(inputId, cardsSelector){
  const input=document.getElementById(inputId);
  input.addEventListener('input',()=>{
    const q=input.value.trim().toLowerCase();
    document.querySelectorAll(cardsSelector).forEach(card=>{
      const txt=card.textContent.toLowerCase();
      card.style.display = txt.includes(q) ? '' : 'none';
    });
  });
}
attachSearch('searchBooks', '#books .media-card');
attachSearch('searchSongs', '#songs .media-card');

// Back to top
const toTop=document.getElementById('toTop');
window.addEventListener('scroll',()=>{ if(window.scrollY>600){toTop.classList.add('show')} else {toTop.classList.remove('show')}});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Year
document.getElementById('year').textContent=new Date().getFullYear();
