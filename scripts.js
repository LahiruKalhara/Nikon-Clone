const targetDiv = document.querySelector(".bodyContainer");
const targetDiv2 = document.querySelector(".bodyContainer2");
const targetDiv3 = document.querySelector(".bodyContainer3");

const options = {
    threshold:0,
    rootMargin:"0px 0px 0px 0px",
    root:null
}

const observer = new IntersectionObserver(function(entities){
    entities.forEach(entry =>{
        console.log(entry.target);
        const intersecting = entry.isIntersecting;
        if(intersecting){
            entry.target.classList.add("on");
            observer.unobserve(entry.target);
        }else{
            entry.target.classList.remove("on");
        }
    })


},options);

observer.observe(targetDiv);
observer.observe(targetDiv2);
observer.observe(targetDiv3);