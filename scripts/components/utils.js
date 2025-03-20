export function createImgs(numberImgs, imgName, srcImgs){
    
    const imgs = [];
    
    for(let index = 0; index < numberImgs; index++){
        const img = document.createElement('img');
        img.src =`${srcImgs}${imgName}${index + 1}.jpg`;
        img.className = `img-${imgName}`;
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '10px';
        img.style.boxShadow = '10px 10px 10px grey';
        img.style.filter = 'brightness(20%)';
        img.style.transition = 'filter 1000ms';
        
        imgs.push(img);
        
    }

return imgs;

};


export function createWeb(translateWeb, numberImgs, imgName, srcImgs, visiteUrl, svgsT, svgsArray){
    const web = document.createElement('div');
       // const web = translateWeb; //webs.fastapi;
       //style
        web.style.display = 'flex';
        web.style.flexDirection = 'column';
        web.style.gap = '30px';

    //svg tecno
    const svgs = document.createElement('div');
   svgs.innerHTML = `${svgsT}`;
   svgs.querySelectorAll('.svg').forEach(svg => svg.style.display = 'none');
   
   svgsSize(svgs, '50px');
   svgs.querySelector('#fast').style.display = 'block';
    
    //const idSvg= svgs.querySelector(idTecno);
    //idSvg.style.display = 'block';
    //idSvg.style.opacity = '0';
    //idSvg.style.width = '50px';
    //idSvg.style.height = '50px';
    //idSvg.style.transition = 'opacity 1000ms';
    
   //title and description + img
    
    const title = document.createElement('h2');
    title.textContent = translateWeb.title;
    
    const description= document.createElement('p');
    description.textContent = translateWeb.description;
    
    const p1= document.createElement('p');
    p1.textContent = translateWeb.features[0];
    const p2= document.createElement('p');
    p2.textContent = translateWeb.features[1];
    const p3= document.createElement('p');
    p3.textContent = translateWeb.features[2];
    
    
    //visite
    const visite = document.createElement('div');
    visite.innerHTML = `<a href= ${visiteUrl}>${translateWeb.visite}</a>`;
        //style
        visite.style.textAlign = 'center';
    
    //separator

    const hr1 = hr();
    
    const imgs = createImgs(numberImgs, imgName, srcImgs);
    
    //svgsWeb
        const svgsWeb = [];
        svgsArray.forEach(svg => {
            const svgElement = document.createElement('div');
            svgElement.innerHTML = svg;
            svgElement.style.width = '50px';
            svgElement.style.height = '50px';
            svgsWeb.push(svgElement);
        });
        
    
    //append
    
    web.append(svgsWeb[0], title, description, imgs[0], svgsWeb[1], p1, imgs[1], svgsWeb[2], p2, imgs[2], svgsWeb[3], p3, imgs[3], visite, hr1);
    
    return web;
    
};


export function createBar(color, id) {
    const bar = document.createElement('div');
    bar.id = id;
    bar.style.borderRadius = '15px';
    bar.style.textAlign = 'center';
    //counter1.style.color = 'white';
    bar.style.background = color;
    return bar;
};

export function animateCounter(element, end, duration = 2000) {
    let startTime = null;

    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let value = Math.min(Math.round((progress / duration) * end), end);
        
        element.textContent = `${value}%`; // Actualiza el número en el DOM
        element.style.width = `${value}%`;

        if (value < end) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
};

export function hr() {
    const hr = document.createElement('hr');

    hr.style.border = "none"; // Elimina el borde por defecto
    hr.style.height = "2px"; // Define el grosor de la línea
    hr.style.backgroundColor = "#ccc"; // Define el color de la línea
    hr.style.width = "80%"; // Define el ancho de la línea
    hr.style.margin = "40px auto"; // Establece el margen superior e inferior
    return hr;
};

export function styleSvgs(container, fillColor = 'white', size = '30px') {
    const svgs = container.querySelectorAll('.svg');
    svgs.forEach(svg => {
        svg.style.fill = fillColor;
        svg.style.width = size;
        svg.style.height = size;
    });
};

export function svgsSize(container, size = '30px') {
    const svgs = container.querySelectorAll('.svg');
    svgs.forEach(svg => {
        svg.style.width = size;
        svg.style.height = size;
    });
};

export function createSlider(imgs) {
    const slider = document.createElement('div');
slider.style.position = 'relative';

const sliderContainer = document.createElement('div');
sliderContainer.style.transition = 'transform 1000ms';
sliderContainer.style.overflow = 'scroll';
sliderContainer.style.zIndex = '1';
sliderContainer.style.position = 'relative';

const imgError = '/scripts/components/img/employee-index1.png';

imgs.forEach(src => {
    const img = document.createElement('img');
    img.src = 'https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/' + src;
    img.onerror = () => {
      img.onerror = null;
      img.src = imgError;  
    };
    sliderContainer.appendChild(img);
});

//puntos
const indicators = document.createElement('div');
indicators.style.position = 'absolute';
indicators.style.bottom = '5px';
indicators.style.left = '50%';
indicators.style.transform = 'translateX(-50%)';
indicators.style.display = 'flex';
indicators.style.gap = '8px';
indicators.style.zIndex = '10';


const sliderBtnRight = document.createElement('button');
sliderBtnRight.textContent = '>';
sliderBtnRight.style.position = 'absolute';
sliderBtnRight.style.top = '50%';
sliderBtnRight.style.right = '0px';
sliderBtnRight.style.zIndex = '10';
sliderBtnRight.style.padding = '20px';
sliderBtnRight.style.display = 'none';
sliderBtnRight.style.border = 'none';
sliderBtnRight.style.background = 'transparent';
sliderBtnRight.style.transform = 'scaleY(2)';
sliderBtnRight.style.opacity = '0';
sliderBtnRight.style.transition = 'opacity 1000ms';

sliderBtnRight.onmouseenter = () => {
        sliderBtnRight.style.color = 'blue'; 
    };
    
    sliderBtnRight.onmouseleave = () => {
        sliderBtnRight.style.color = 'black'; 
    };
   
    
sliderBtnRight.onclick = () => {
    sliderContainer.scrollBy({ left: 300, behavior: 'smooth' });  
};

const sliderBtnLeft = document.createElement('button');
sliderBtnLeft.textContent = '<';
sliderBtnLeft.style.position = 'absolute';
sliderBtnLeft.style.padding = '20px';
sliderBtnLeft.style.top = '50%';
sliderBtnLeft.style.zIndex = '10';
sliderBtnLeft.style.display = 'none';
sliderBtnLeft.style.border = 'none';
sliderBtnLeft.style.background = 'transparent';
sliderBtnLeft.style.transform = 'scaleY(2)';
sliderBtnLeft.style.opacity = '0';
sliderBtnLeft.style.transition = 'opacity 1000ms';


sliderBtnLeft.onmouseenter = () => {
        sliderBtnLeft.style.color = 'blue'; 
    };

sliderBtnLeft.onmouseleave = () => {
        sliderBtnLeft.style.color = 'black'; 
    };


sliderBtnLeft.onclick = () => {
    sliderContainer.scrollBy({ left: -300, behavior: 'smooth' });
};

slider.onmouseenter = () =>{
    sliderBtnLeft.style.display = 'block';
    sliderBtnRight.style.display = 'block';
    sliderBtnRight.style.opacity = '1';
    sliderBtnLeft.style.opacity = '1';
};
    

slider.onmouseleave = () =>{
    sliderBtnRight.style.display = 'none';
    sliderBtnLeft.style.display = 'none';
    sliderBtnRight.style.opacity = '0';
    sliderBtnLeft.style.opacity = '0';
};
    

slider.appendChild(sliderBtnLeft);
slider.appendChild(sliderContainer);
slider.appendChild(sliderBtnRight);

slider.style.borderRadius = '10px';
slider.style.border = '2px solid skyblue';
slider.style.overflow = 'hidden';
slider.style.display = 'flex';

sliderContainer.style.display = 'flex';
sliderContainer.style.width = '100%';
sliderContainer.style.gap = '10px';
sliderContainer.style.padding = '10px';

slider.querySelectorAll('button').forEach(btn =>{
   btn.style.fontSize = '2em';
   btn.style.fontWeight = '300'; 
});



const dots = []; // Para almacenar los puntos

const sliderImgs =     sliderContainer.querySelectorAll('img');

sliderImgs.forEach((img, index) => {
img.style.scrollSnapAlign = 'center';
img.style.width = '90%';
img.style.height = 'auto';
img.style.flexShrink = '0';
img.style.margin = '10px 0px';
//img.style.objectFit = 'contain';

//para los puntos
const dot = document.createElement('div');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.background = index === 0 ? 'blue' : 'gray'; // Primer punto activo
    dot.style.transition = 'background 0.3s';
    
    indicators.appendChild(dot);
    dots.push(dot);

});




sliderContainer.style.scrollSnapType = 'x mandatory';

//Esto funciono.

sliderBtnRight.onclick = () => {
    const imgWidth = sliderImgs[0]?.offsetWidth || 300; // Obtener ancho de la primera imagen
    sliderContainer.scrollBy({ left: imgWidth, behavior: 'smooth' });
};

sliderBtnLeft.onclick = () => {
    const imgWidth = sliderImgs[0]?.offsetWidth || 300;
    sliderContainer.scrollBy({ left: -imgWidth, behavior: 'smooth' });
};


sliderContainer.onscroll = () => {
    const scrollLeft = sliderContainer.scrollLeft;
    const totalWidth = sliderContainer.scrollWidth - sliderContainer.clientWidth;
    const index = Math.round((scrollLeft / totalWidth) * (dots.length - 1));

    dots.forEach((dot, i) => {
        dot.style.background = i === index ? 'blue' : 'gray';
    });
};



slider.appendChild(indicators);

return slider;
};

export function containerTecno(description, svgs, others){

const tecno = document.createElement('div');

tecno.style.border = '1px solid black';
tecno.style.borderRadius = '10px';
tecno.style.padding = '10px';
tecno.style.margin = 'auto';


/*
//1era forma de incluir los svg de una variable.

tecno.innerHTML = `<p style="text-align: center;">${web1.tools}</p>`;

front.innerHTML = `<p>Frontend</p>${svgsTecno}`;
back.innerHTML = `<p>Backend</p>${svgsTecno}`;

const backOff = front.querySelectorAll('.back');

const frontOff = back.querySelectorAll('.front');

frontOff.forEach(svg => svg.style.display = 'none');

backOff.forEach(svg => svg.style.display = 'none');

tecno.appendChild(front);
tecno.appendChild(back);

*/

//2da forma  de filtrar svg de un variable

tecno.innerHTML = `<p style="text-align: center;">${description}</p>
<p>Frontend</p>
<div class="sec-front">${svgs}</div>
<p>Backend</p>
<div class="sec-back">${svgs}</div>
<p>Otros</p>
${others}`;

const secFront = tecno.querySelectorAll('.sec-front .back');
secFront.forEach(svg => svg.style.display = 'none');

const secBack = tecno.querySelectorAll('.sec-back .front');
secBack.forEach(svg => svg.style.display = 'none');


svgsSize(tecno);

const invisible = tecno.querySelectorAll('.invisible');

invisible.forEach(svg => svg.style.display = 'none');

return tecno;

};
