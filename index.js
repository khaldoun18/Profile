window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollingImg = document.querySelector('.m');
    var scrollingImg2 = document.querySelector('.b');
    var speed = 2;
    scrollingImg.style.transform = 'translateX(' + -scrollTop*speed + 'px)';
    scrollingImg2.style.transform = 'translateX(' + scrollTop*speed + 'px)';
  
    var scrollS = window.pageYOffset || document.documentElement.scrollS;
    var rotatingImage = document.querySelector('.sun');
    var speed = 0.3; // Set the rotating speed here
    var angle = scrollS * speed; // Calculate the angle based on the scroll position
  
    rotatingImage.style.transform = 'translateX(-50%) rotate(' + angle + 'deg)';
  
  
    const boxes = document.querySelectorAll('.showMe');
  
  const options = {
    rootMargin: '0px',
    threshold: 0.5
  };
  
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, options);
  
  boxes.forEach(box => {
    observer.observe(box);
  });
  
  
  
  
  
  
   
  });