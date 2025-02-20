export function effect(sub) {
        if (sub) {
            sub.style.transform = 'translateY(0)';
            sub.style.opacity = '1';
        }
};


export function Present(description, title, color) {
    const divout = document.createElement('div');
    
    const htmlout = `
    
<div id="out">
    
    <h1 style="font-size: 3em;">${title}</h1>
    <p id="subtitle">${description}</p>
    <button>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 
    </button>
    

    
</div>     
    
    `;
    
   divout.innerHTML = htmlout;
   
//style   
   
   const outv = divout.querySelector('#out');
    outv.style.width = '100%';
    outv.style.height = '100dvh';
    outv.style.display = 'flex';
    outv.style.flexDirection = 'column';
    outv.style.alignItems = 'center';
    outv.style.justifyContent = 'space-evenly';
    outv.style.gap = '10px';
    outv.style.backgroundColor = color;
    outv.style.color = '#e0e0e0';
    outv.style.textAlign = 'center';
    
    const outitle = outv.querySelector('h1');
    outitle.style.color = 'white';
    
    
    const svg = divout.querySelector('svg');
    svg.style.width = '50px';
    svg.style.height = '50px';
    svg.style.color = 'white';
    //svg.style.textShadow = '5px 5px 50px white';
    svg.style.filter = 'drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5))';
    
    const sub = divout.querySelector('#subtitle');
    sub.style.transform = 'translateY(50%)';
    sub.style.opacity = '0';
    sub.style.transition = 'opacity 1000ms, transform 1000ms';
    sub.style.fontSize = '1.8em';   
    
//button    
    const btn = divout.querySelector('button');  
    btn.style.all = 'unset';
    btn.style.cursor = 'pointer';
    
    const vh = window.innerHeight;
    
    btn.onclick = () => window.scrollTo({top: vh-10, behavior: 'smooth'});
    
    btn.style.animation = 'moveUpDown 1s infinite alternate ease-in-out';
    
   return divout; 
};
