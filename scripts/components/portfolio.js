//import { document } from '../dom.js';
import { Present } from './present.js';
import { translationsPortfolio } from './translations.js';
import {svgsTecno, others, svgsEmployee} from './svgs.js';
import {svgsSize, createSlider, containerTecno, hr, animateCounter, createBar, createWeb, createImgs } from './utils.js';
import { svgsPlataform } from './svgsPlataform.js';

export function Portfolio(language='es') {

    const translations = translationsPortfolio;
    
    const container = document.createElement('div');
    const {title, description, webs} = translations[language]
    
    const web1 = webs.beautySpa;
    
    
    //div presentacion
const divout = document.createElement('div');

    divout.appendChild(Present(description, title, 'skyblue'));
    
    
    
    
//div seccion desarrollo web
    
    const sectionWeb = document.createElement('div');
    
const beautySpa = document.createElement('div');    
    
    const htmlSpa = ` 
            
            <h1 style="color: blue;">${webs.title}</h1>
            <p class="salient">${webs.description}</p>
            </br>
            <h2 style="color: skyblue;">${web1.title}</h2>
            <p style="font-size:1.5em;">${web1.description}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar.png" style="width:100%; margin: 20px 0px;"  alt="">
            
            ${web1.navbar.map((p) => `<p>${p}</p>`).join('')}
  
  <div style="display: flex; flex-wrap: wrap; gap:10px; margin: 20px 0px; ">  
      <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar1.png" style="width:100%"  alt="">
 
 <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar2.png" style="width:100%;"  alt="">
 
 </div>
                  
            <p>${web1.main[0]}</p></br>
            <p>${web1.main[1]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main1.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[2]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main2.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[3]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main3.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[4]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main4.png" style="width:100%; margin:20px 0px;"  alt="">
            
            ${web1.footer.map((p) => `<p>${p}</p>`).join('')}
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/footer.png" style="width:100%; margin:20px 0px;"  alt="">
        
            `;
            
    beautySpa.innerHTML = htmlSpa;
    
const tecno1 = containerTecno(web1.tools, svgsTecno, others);

beautySpa.appendChild(tecno1);

tecno1.querySelector('.sec-back #fast').style.display = 'none';

//visita la pagina


const visiteWeb1 = document.createElement('div');

visiteWeb1.innerHTML = `<a href="https://beauty-grupo15.netlify.app/">${web1.visite}</a>`;

visiteWeb1.style.display = 'flex';
visiteWeb1.style.justifyContent = 'center';
visiteWeb1.style.padding = '10px';

beautySpa.appendChild(visiteWeb1);

const hr1 = hr();

beautySpa.appendChild(hr1);

beautySpa.style.display = 'flex';
beautySpa.style.flexDirection = 'column';
//beautySpa.style.alignItems = 'center';
beautySpa.style.gap = '10px';
 
    sectionWeb.appendChild(beautySpa);
    
    container.appendChild(divout);
    container.appendChild(sectionWeb);
    

//section employee store

const webEmployee = document.createElement('div');

const web2 = webs.storeEmployee;

const storeEmployeeSection = document.createElement('div');


//descripcion
const htmlStoreEmployee = `
    ${svgsEmployee.users} 
    <h2 style="color: skyblue;">${web2.title}</h2>
    <p style="font-size:1.5em;">${web2.description}</p>
`;
    
storeEmployeeSection.innerHTML = htmlStoreEmployee;

webEmployee.appendChild(storeEmployeeSection);

const slider1 = createSlider(['employee-index1.png', 'employee-index2.png', 'employee-index3.png', 'employee-index4.png']);

webEmployee.appendChild(slider1);

//primer parrafo
const p1Employee = document.createElement('div');
p1Employee.innerHTML = `${svgsEmployee.p1}<p>${web2.p1}</p>`;



webEmployee.appendChild(p1Employee);

const slider2 = createSlider(['employee-employee.png', 'employee-employeer.png', 'employee-menu.png']);

webEmployee.appendChild(slider2);


//segundo parrafo
const p2Employee = document.createElement('div');
p2Employee.innerHTML = `${svgsEmployee.p2}<p>${web2.p2}</p>`;

webEmployee.appendChild(p2Employee);

const slider3 = createSlider(['employee-register1.png', 'employee-register2.png', 'employee-admin.png']);

webEmployee.appendChild(slider3);

const tecno2 = containerTecno(web2.tools, svgsTecno, others);

webEmployee.appendChild(tecno2);
tecno2.querySelector('.sec-back #fast').style.display = 'none';
tecno2.querySelector('.sec-front #vue').style.display = 'none';

const visiteWeb2 = document.createElement('div');

visiteWeb2.innerHTML = `<a href="https://webemployerstore.onrender.com/">${web2.visite}</a>`;

const hr2 = hr();

webEmployee.appendChild(visiteWeb2);
webEmployee.appendChild(hr2);

const svgsSizeEmployee = webEmployee.querySelectorAll('.employee');
svgsSizeEmployee.forEach(svg => {
        svg.style.width = '50px';
        svg.style.height = '50px';
    });



webEmployee.style.display = 'flex';
webEmployee.style.flexDirection = 'column';
webEmployee.style.alignItems = 'center';
webEmployee.style.gap = '50px';


sectionWeb.appendChild(webEmployee);



///////////////////////////
//section fastAPI tasks

const webTasks = document.createElement('div');

const web3 = webs.fastapi;

const contentSvgFast = document.createElement('div');
contentSvgFast.innerHTML = `${svgsTecno}`;
contentSvgFast.querySelectorAll('.svg').forEach(svg => svg.style.display = 'none');
const svgFast = contentSvgFast.querySelector('#fast');
svgFast.style.display = 'block';
svgFast.style.opacity = '0';
svgFast.style.width = '50px';
svgFast.style.height = '50px';
svgFast.style.transition = 'opacity 1000ms';


//title and description + img
const h2_tasks = document.createElement('h2');
h2_tasks.textContent = web3.title;
const p1_tasks = document.createElement('p');
p1_tasks.textContent = web3.description;

const imgTasks1 = document.createElement('img');

//elements p + imgs
const p2_tasks = document.createElement('p');
p2_tasks.textContent = web3.p1;


const imgTasks2 = document.createElement('img');
const imgTasks3 = document.createElement('img');
const imgTasks4 = document.createElement('img');

//tecnos
const tecno3 = containerTecno(web3.tools, svgsTecno, others);

const visiteWeb3 = document.createElement('div');

visiteWeb3.innerHTML = `<a href="https://tasks-t3lh.onrender.com/">${web3.visite}</a>`;

const hr3 = hr();

webTasks.append(svgFast, h2_tasks, p1_tasks, imgTasks1, p2_tasks, imgTasks2, imgTasks3, imgTasks4, tecno3, visiteWeb3, hr3);


const imgsTasks = [imgTasks1, imgTasks2, imgTasks3, imgTasks4];




sectionWeb.appendChild(webTasks);

//styles

svgsSize(contentSvgFast, '50px');

h2_tasks.style.color = 'green';

tecno3.querySelector('#vue').style.display = 'none';
//tecno3.querySelector('#fast').style.display = 'block';

imgsTasks.forEach((img, index) => {
    img.src = `https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/tasks${index+1}.jpg`;
img.className = 'imgTasks';
img.style.width = '100%';
img.style.height = 'auto';
img.style.borderRadius = '10px';
img.style.boxShadow = '10px 10px 10px grey';
img.style.filter = 'brightness(20%)';
img.style.transition = 'filter 1000ms';
});

webTasks.style.display = 'flex';
webTasks.style.flexDirection = 'column';
webTasks.style.gap = '20px';

visiteWeb3.style.textAlign = 'center';

////////////////////////
//plataform
const plataform = createWeb(webs.plataform, 4, 'plataform', 'https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/', 'https://plataform-xf6v.onrender.com/', svgsTecno, svgsPlataform);

sectionWeb.appendChild(plataform);


////////////////////////

///////////////////////////
// section personal web

const personalWeb = document.createElement('div');

const web4 = webs.personal;

const svgPersonal = document.createElement('div');
svgPersonal.innerHTML = `${svgsTecno}`;

// title and description + img
const h2_personal = document.createElement('h2');
h2_personal.textContent = web4.title;

const p1_personal = document.createElement('p');
p1_personal.textContent = web4.description;

const imgPersonal1 = document.createElement('img');

// elements p + imgs
const p2_personal = document.createElement('p');
p2_personal.textContent = web4.p1;


const p3_personal = document.createElement('p');
p3_personal.textContent = web4.p2;

const p4_personal = document.createElement('p');
p4_personal.textContent = web4.p3;


const imgPersonal2 = document.createElement('img');
const imgPersonal3 = document.createElement('img');
const imgPersonal4 = document.createElement('img');

// tecnos
    const tecno4 = document.createElement('div');

    const h2_tecno4 = document.createElement('h2');
    h2_tecno4.textContent = 'Porcentaje de Tecnologias Aplicadas en el Proyecto';

    
    //front
    const frontPersonal = document.createElement('div');
    
    const frontPersonal_p = document.createElement('p');
    frontPersonal_p.textContent = 'Frontend';
    
    const svgs_front_personal = document.createElement('div');
    svgs_front_personal.innerHTML = `${svgsTecno}`;
    
        //contador animado
/////////////////////////74C0FC


const bar1 = createBar('#74C0FC','bar1');

const bar2 = createBar('#ff8605','bar2');

const bar3 = createBar('#FFD43B','bar3');

    
   
    const secFrontPersonal = document.createElement('div');
    const barFrontPersonal = document.createElement('div');
    
    barFrontPersonal.append(bar1, bar2, bar3);
    
    
    secFrontPersonal.append(svgs_front_personal, barFrontPersonal);
    
    frontPersonal.append(frontPersonal_p, secFrontPersonal);
    
    
    
    //back
    
    const backPersonal= document.createElement('div');
    const secBackPersonal= document.createElement('div');
    
    const backPersonal_p = document.createElement('p');
    backPersonal_p.textContent = 'Backend';
    
    const svgNodejs_personal = document.createElement('div');
    svgNodejs_personal.innerHTML = `${svgsTecno}`;
    
    const bar4 = createBar('#5fad47','bar4');
    
    secBackPersonal.append(svgNodejs_personal, bar4);
    
    backPersonal.append(backPersonal_p, secBackPersonal);
    
    tecno4.append(h2_tecno4, frontPersonal, backPersonal);


//visite

const visiteWeb4 = document.createElement('div');
visiteWeb4.innerHTML = `<a href="https://tasks-t3lh.onrender.com/">${web4.visite}</a>`;

const hr4 = hr();

personalWeb.append(svgPersonal, h2_personal, p1_personal, imgPersonal1, p2_personal, imgPersonal2, p3_personal, imgPersonal3, p4_personal, imgPersonal4, tecno4, visiteWeb4, hr4);

const imgsPersonal = [imgPersonal1, imgPersonal2, imgPersonal3, imgPersonal4];

sectionWeb.appendChild(personalWeb);

// styles

//tecno
tecno4.style.display = 'flex';
tecno4.style.flexDirection = 'column';
tecno4.style.gap = '20px';

h2_tecno4.style.textAlign = 'center';


//front
secFrontPersonal.style.display = 'flex';

barFrontPersonal.style.display = 'flex';
barFrontPersonal.style.flexDirection = 'column';
barFrontPersonal.style.width = '100%';
barFrontPersonal.style.height = '90px';
//barFrontPersonal.style.border = '3px solid red';
barFrontPersonal.style.justifyContent = 'space-around';
barFrontPersonal.style.gap = '10px';

//back
secBackPersonal.style.display = 'flex';
secBackPersonal.style.height = '20px';


svgsSize(svgPersonal, '30px');

h2_personal.style.color = 'orange';

tecno4.querySelectorAll('svg').forEach(svg => svg.style.display = 'none');
svgsSize(tecno4, '30px');

svgs_front_personal.querySelectorAll('.personal').forEach(svg => svg.style.display = 'block');

svgNodejs_personal.querySelector('#nodejs').style.display = 'block';

imgsPersonal.forEach((img, index) => {
    img.src = `https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/personal${index + 1}.jpg`;
    img.className = 'imgPersonal';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '10px';
    img.style.boxShadow = '10px 10px 10px grey';
    img.style.filter = 'brightness(20%)';
    img.style.transition = 'filter 1000ms';
});

personalWeb.style.display = 'flex';
personalWeb.style.flexDirection = 'column';
personalWeb.style.gap = '20px';

visiteWeb4.style.textAlign = 'center';

/////////////////////////








//styles

    //sectionWeb.style.padding = '10px';
    sectionWeb.style.display = 'flex';
    sectionWeb.style.flexDirection = 'column';
    sectionWeb.style.gap = '10px';
    sectionWeb.style.padding = '10px';
    sectionWeb.style.margin = 'auto';
    sectionWeb.style.width = 'min(90vw, 720px)';

    //container.style.fontFamily = "'Lora', serif";
    const salient = container.querySelectorAll('.salient');
    const webdescrip = container.querySelector('#subtitle');
    
    
    //outv.style.textShadow= '3px 3px #bdbdbd';
    //outv.style.paddingTop = '4%';
    //outv.style.transition = 'transform 1000ms, opacity 1000ms';
    //outv.style.opacity = '0';
    
    
    container.style.transition = 'transform 1000ms';
    

    const ps = container.querySelectorAll('p');
    ps.forEach(e => {
        e.style.fontSize = '1.2em';
        e.style.lineHeight = '1.5';
        //e.style.textAlign = 'center';
        e.style.color = '#333333';
        e.style.textShadow = '2px 2px #E0E0E0';
    });
    
    salient.forEach(e => {
        e.style.fontSize = '1.4em';
        e.style.lineHeight = '1.5';
        e.style.textAlign = 'center';
    });
    
    webdescrip.style.fontSize = '1.5em';
    //webdescrip.style.height = '100vh';
    //webdescrip.style.border = '3px solid red';
    //webdescrip.style.display = 'flex';
    //webdescrip.style.justifyContent = 'center';
    //webdescrip.style.alignContent = 'center';
    

//observer    
    
    const imgs = container.querySelectorAll('.img');
    //webdescrip.style.opacity = '0';
    //webdescrip.style.transition = 'opacity 1500ms, transform 1500ms';
    //webdescrip.style.transform = 'translateY(50%)';
    webdescrip.style.textShadow = '0px 0px #E0E0E0';
    webdescrip.style.color = 'white';

imgs.forEach(img => {

img.style.opacity = '0';
img.style.transform = 'translateX(-10%)';

img.style.transition = 'transform 1000ms, opacity 1000ms';

img.style.borderRadius = '5px';
img.style.boxShadow = '2px 2px #E0E0E0';

});

const effect = entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity ='1';
          if (entry.target.tagName === 'IMG') {
              entry.target.style.transform = 'translateX(0px)';    
          }
          if(entry.target.id === 'subtitle'){
                 entry.target.style.transform = 'translateY(0px)';
          }
          if(entry.target.className === 'imgTasks'){
                 entry.target.style.filter = 'brightness(100%)';
          }
          
          
          if (entry.target.id === 'bar1') {
                animateCounter(bar1, 10, 1000);
          } else if (entry.target.id === 'bar2') {
                animateCounter(bar2, 5, 1000);
          } else if (entry.target.id === 'bar3') {
                animateCounter(bar3, 100, 1000);
          }else if (entry.target.id === 'bar4') {
                animateCounter(bar4, 100, 1000);
          }
              
          if(entry.target.id === 'fast'){
              entry.target.animate([{transform: 'scale(0.1)'},{transform: 'scale(1)'}],{duration: 200, iterations: 1});
              //observer1.unobserve(entry.target);   dejar de observer el elemento.   
          }
       }else{
       if(entry.target.id === 'fast'){
              svgFast.style.opacity = '0';      
          }
      //entry.target.style.opacity = '0';
      //entry.target.style.transform = 'translateX(-50%)';
     }
      
  })
};

const observer = new IntersectionObserver(effect,{threshold: 0.3});

const observer1 = new IntersectionObserver(effect,{threshold: 1.0});


imgsTasks.forEach(entry => observer1.observe(entry));
imgs.forEach(entry => observer.observe(entry));

//observer.observe(outv);
observer.observe(webdescrip);
observer.observe(bar1);
observer.observe(bar2);
observer.observe(bar3);
observer.observe(bar4);

observer1.observe(svgFast);
//container.style.gap = '10px';

    return container;
}
