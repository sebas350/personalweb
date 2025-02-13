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

const sliderImgs =     sliderContainer.querySelectorAll('img');

sliderImgs.forEach(img => {
img.style.width = '90%';
img.style.height = 'auto';
img.style.flexShrink = '0';
});

return slider;
};

export function containerTecno(description, svgs, others){

const tecno = document.createElement('div');

tecno.style.border = '1px solid black';
tecno.style.borderRadius = '10px';
tecno.style.padding = '10px';


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
