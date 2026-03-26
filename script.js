document.addEventListener('mousemove', (e) => {
    const content = document.querySelector('.content-box');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Menambahkan efek "smooth back" saat mouse meninggalkan area
document.addEventListener('mouseleave', () => {
    const content = document.querySelector('.content-box');
    content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    content.style.transition = "all 0.5s ease";
});

document.addEventListener('mouseenter', () => {
    const content = document.querySelector('.content-box');
    content.style.transition = "none";
});
