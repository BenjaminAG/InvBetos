
// Countdown
function updateCountdown(){
  const target = new Date(window.EVENT_ISO).getTime();
  const now = new Date().getTime();
  const diff = target - now;
  const s=1000, m=s*60, h=m*60, d=h*24;
  if(diff<=0){ document.getElementById('contador').textContent = "¡Es hoy!"; return; }
  const days = Math.floor(diff/d);
  const hours = Math.floor((diff%d)/h);
  const minutes = Math.floor((diff%h)/m);
  const seconds = Math.floor((diff%m)/s);
  document.getElementById('contador').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown(); setInterval(updateCountdown,1000);

// Papel picado multicolor (confetti)
(function papelPicado(){
  const container = document.getElementById('confetti');
  const colors = ['#ff595e','#ffca3a','#8ac926','#1982c4','#6a4c93','#ff9f1c','#06d6a0','#ffd166'];
  const pieces = 90;
  for(let i=0;i<pieces;i++){
    const s = document.createElement('span');
    const w = 10 + Math.random()*10;
    const h = 6 + Math.random()*8;
    s.style.width = w + 'px';
    s.style.height = h + 'px';
    s.style.left = Math.random()*100 + 'vw';
    s.style.top = (-10 - Math.random()*30) + 'vh';
    s.style.background = colors[Math.floor(Math.random()*colors.length)];
    const duration = 3 + Math.random()*4;
    const delay = Math.random()*3;
    s.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    container.appendChild(s);
  }
  const style = document.createElement('style');
  style.textContent = `@keyframes fall{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(110vh) rotate(360deg)}}`;
  document.head.appendChild(style);
})();

// Música
const audio = document.getElementById('bgm');
const btnPlay = document.getElementById('btnPlay');
btnPlay.addEventListener('click', async () => {
  try{
    await audio.play();
    btnPlay.textContent = '⏸ Pausar';
    btnPlay.onclick = () => { audio.pause(); btnPlay.textContent = '▶ Música'; };
  }catch(e){ console.log('Playback blocked:', e); }
});

// Álbum auto-scroll (pausa si está fuera de vista para rendimiento)
const album = document.getElementById('album');
let scrollPos = 0, albumTimer = null;
function autoScrollAlbum(){
  if(!album) return;
  const rect = album.getBoundingClientRect();
  if(rect.bottom < 0 || rect.top > window.innerHeight){ return; } // fuera de viewport
  scrollPos += 1;
  if(scrollPos >= album.scrollWidth - album.clientWidth) scrollPos = 0;
  album.scrollTo({ left: scrollPos, behavior: 'smooth' });
}
albumTimer = setInterval(autoScrollAlbum, 2000);

// RSVP link
(function setRSVP(){
  const link = document.getElementById('rsvpLink');
  if(!link) return;
  const encoded = encodeURIComponent(window.RSVP_MSG || 'Hola, confirmo mi asistencia.');
  link.href = `https://wa.me/${window.WHATSAPP_NUMBER}?text=${encoded}`;
})();
