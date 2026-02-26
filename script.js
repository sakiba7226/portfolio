  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Petals
  const petalsContainer = document.getElementById('petals');
  function createPetal() {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '-20px';
    p.style.animationDuration = (6 + Math.random() * 8) + 's';
    p.style.animationDelay = Math.random() * 5 + 's';
    p.style.width = (6 + Math.random() * 6) + 'px';
    p.style.height = (8 + Math.random() * 8) + 'px';
    p.style.transform = `rotate(${Math.random()*180}deg)`;
    petalsContainer.appendChild(p);
    setTimeout(() => p.remove(), 14000);
  }
  setInterval(createPetal, 1200);

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
