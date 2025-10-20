// Плавное появление hero title
window.addEventListener('DOMContentLoaded', ()=>{
    const title = document.querySelector('.hero__title');
    if(title){
        title.style.opacity = 0;
        setTimeout(()=>{
            title.style.transition = 'opacity 1.5s';
            title.style.opacity = 1;
        },200);
    }
});

// Запрет контекстного меню
document.addEventListener('contextmenu', e => e.preventDefault());
