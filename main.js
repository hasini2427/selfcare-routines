(function(){
var h=document.querySelector('header');
function s(){h.classList.toggle('solid',window.scrollY>60||document.body.classList.contains('inner'))}
window.addEventListener('scroll',s);s();
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12});
 document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('on')})}
})();
