let btnFast = document.getElementById('speedFast');
let btnSlow = document.getElementById('speedSlow');
let btnPause = document.getElementById('pauseBtn');
let btnNormal = document.getElementById('speedNormal');
let tl = gsap.timeline({
  defaults: {
    duration: .75,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});

tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '-=.75'
  );

btnFast.onclick = () => tl.timeScale(2);
btnSlow.onclick = () => tl.timeScale(0.5);
btnNormal.onclick = () => tl.timeScale(1);
//toggle play and pause
btnPause.onclick = () => (tl.isActive() ? tl.pause() : tl.play());
