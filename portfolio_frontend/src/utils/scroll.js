export const smoothScrollTo = (element, duration = 600) => {
  const target = element.getBoundingClientRect().top + window.pageYOffset;
  const start = window.pageYOffset;
  const distance = target - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    window.scrollTo(0, start + distance * ease(progress));

    if (elapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
};

export const mountReveals = () => {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('show'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.15 });

  items.forEach((el) => observer.observe(el));
  return observer;
};
