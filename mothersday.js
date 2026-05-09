(function(){
  const bg = document.getElementById('petal-bg');
  const colors = ['#f4b8cc','#e8658a','#fce4ef','#ED93B1','#D4537E','#f9d0de'];
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = (Math.random()*100)+'%';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    const dur = 7+Math.random()*9;
    p.style.animationDuration = dur+'s';
    p.style.animationDelay = (-Math.random()*dur)+'s';
    p.style.width = (10+Math.random()*12)+'px';
    p.style.height = (8+Math.random()*10)+'px';
    bg.appendChild(p);
  }
})();

let opened = false;

function openCard() {
  if(opened) return;
  opened = true;
  const flap = document.getElementById('env-flap');
  const seal = document.getElementById('env-seal');
  const card = document.getElementById('greeting-card');
  const env = document.getElementById('envelope');

  flap.style.transform = 'rotateX(-180deg)';
  seal.style.transform = 'scale(0)';
  seal.style.transition = 'transform 0.4s 0.3s';

  setTimeout(()=>{
    env.style.opacity = '0';
    env.style.transition = 'opacity 0.4s';
    env.style.pointerEvents = 'none';
  }, 500);

  setTimeout(()=>{
    card.classList.remove('hidden-card');
    spawnConfetti();
  }, 700);
}

function replayCard() {
  opened = false;
  const card = document.getElementById('greeting-card');
  const env = document.getElementById('envelope');
  const flap = document.getElementById('env-flap');
  const seal = document.getElementById('env-seal');

  card.classList.add('hidden-card');
  flap.style.transform = '';
  seal.style.transform = '';

  setTimeout(()=>{
    env.style.opacity = '1';
    env.style.pointerEvents = 'auto';
  }, 400);
}

function spawnConfetti() {
  const area = document.getElementById('confetti-area');
  area.innerHTML = '';
  const cols = ['#e8658a','#f4b8cc','#c0476c','#f9d0de','#ED93B1','#fce4ef','#D4537E'];
  for(let i=0;i<45;i++){
    const c = document.createElement('div');
    c.className = 'conf-piece';
    c.style.left = (10+Math.random()*80)+'%';
    c.style.top = '-10px';
    c.style.background = cols[Math.floor(Math.random()*cols.length)];
    c.style.animationDelay = (Math.random()*0.8)+'s';
    c.style.animationDuration = (1.5+Math.random())+'s';
    c.style.borderRadius = Math.random()>0.5?'50%':'2px';
    c.style.width = (6+Math.random()*8)+'px';
    c.style.height = (6+Math.random()*8)+'px';
    area.appendChild(c);
  }
  setTimeout(()=>{ area.innerHTML=''; }, 3000);
}
