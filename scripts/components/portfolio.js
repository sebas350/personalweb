//import { document } from '../dom.js';

export function Portfolio(language='es') {


const translations = {
    es: {
        title: 'Portfolio',
        description: 'En esta sección encontrarás una muestra representativa de mis proyectos, habilidades y experiencia técnica. Desde desarrollos web completos hasta programación con Arduino y soluciones de reparación e instalación de software, este portafolio refleja mi trayectoria profesional y pasión por la tecnología. Explora trabajos destacados y conoce más sobre mis competencias y creatividad en diferentes áreas.',
        webs: {
            title: 'Desarrollo Web',
            description: 'En esta seccion encotraras los proyectos mas destacados sobre desarrollo Web',
            beautySpa: {
                title: 'Beauty Spa',
                description: 'En esta aplicación web, los usuarios pueden explorar diferentes técnicas de cuidado de la piel, conocer los servicios que ofrecemos, y reservar turnos para realizar tratamientos. Además, proporcionamos información sobre nuestra ubicación física.',
                navbar: [
                    'En la barra de navegacion podemos ver como se trabajo con los botones y el diseno.',
                    'Los link nos llevan a distintas partes del la pagina',
                    'Por detras de la barra de navegacion podemos ver que su codigo esta compuesto por un html que cuenta con elementos ul y li',
                    'Tambien contamos con un menu amburgeza dependiendo del tamaneo de pantalla'
                ],
                main: [
                    'En el cuerpo principal de la Pagina podemos ver como esta organizada en secciones',
                    'Cuenta una carrucel para poder seleccionar y tener mas informacion acerca de los tratamientos',
                    'Cuenta con una secciones donde podemos encotrar a los profesionales, el codigo trabajado aqui se relizo usando la api nativa de js',
                    'Podemos contactarnos mediente un formulario donde podemos detallar los pedidos',
                    
                    'En la seccion de ubicacion usamos ijustramos un etiqueta iframe para logar mostrar la ubicacion del lugar'
                ],
                footer: [
                    'El foother cuenta con un codigo que nos muestra los contactos y usamos iconos para los link',
                    'Tambien podemos destacar que tanto el fooder como el navbar esta presente en todos los html usando un template',
                ],
                tools: [
                    'Herramientas usadas para este Proyecto',
                ],
            },
            employers: {},
            fastapi: {},
            plataform: {},
        },
        programs: {},
        softHard: {},
        others: {},
    },
    en: {
        title: 'Portfolio',
        description: 'In this section, you will find a representative showcase of my projects, skills, and technical experience. From complete web developments to Arduino programming and software repair and installation solutions, this portfolio reflects my professional journey and passion for technology. Explore featured works and learn more about my competencies and creativity across different areas.',
        webs: {
            title: 'Web Development',
            description: 'In this section, you will find the most outstanding projects related to Web Development',
            beautySpa: {
                title: 'Beauty Spa',
                description: 'In this web application, users can explore different skincare techniques, learn about the services we offer, and book appointments for treatments. Additionally, we provide information about our physical location.',
                navbar: [
                    'In the navigation bar, we can see how the buttons and design were implemented.',
                    'The links take us to different sections of the page.',
                    'Behind the navigation bar, the code includes an HTML structure with ul and li elements.',
                    'We also have a hamburger menu depending on the screen size.'
                ],
                main: [
                    'In the main body of the page, we can see how it is organized into sections.',
                    'It includes a carousel to select and get more information about the treatments.',
                    'There is a section where we can find professionals, and the code here was created using the native JavaScript API.',
                    
                    'We can contact us through a form where we can detail the orders',

                    'In the location section, we use an iframe tag to display the location of the spa.'
                ],
                footer: [
                    'The footer includes code displaying contact details and icons for the links.',
                    'We also highlight that both the footer and the navbar are present across all HTML files using a template.'
                ],
                tools: [
                    'Tools used for this Project',
                ],
            },
            employers: {},
            fastapi: {},
            plataform: {},
        },
        programs: {},
        softHard: {},
        others: {},
    },
};
    
    const container = document.createElement('div');
    const {title, description, webs} = translations[language]
    
    const web1 = webs.beautySpa;
    
    
    const html = `
    
    <h1 style="text-align: center; color: red;">${title}</h1>
            <h3>${description}</h3></br>
            <h2>${webs.title}</h2>
            <h3>${webs.description}</h3>
            </br>
            <h3>${web1.title}</h3>
            <h5>${web1.description}</h5>
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar.png" style="width:100%; margin:auto; padding:20px 10px;"  alt="">
            
            ${web1.navbar.map((p) => `<p>${p}</p>`).join('')}
  
  <div style="display: inline-flex; gap:10px; margin: 20px;">  
      <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar1.png" style="width:50%"  alt="">
 
 <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar2.png" style="width:50%;"  alt="">
 
 </div>
                  
            ${web1.main[0]} </br>
            ${web1.main[1]}
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main1.png" style="width:100%; margin:auto; padding:20px 100px;"  alt="">
            ${web1.main[2]}
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main2.png" style="width:100%; margin:auto; padding:20px 100px;"  alt="">
            ${web1.main[3]}
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main3.png" style="width:100%; margin:auto; padding:20px 100px;"  alt="">
            ${web1.main[4]}
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main4.png" style="width:100%; margin:auto; padding:20px 100px;"  alt="">
            
            ${web1.footer.map((p) => `<p>${p}</p>`).join('')}
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/footer.png" style="width:100%; margin:auto; padding:20px 100px;"  alt="">
        
            `;
            
    container.innerHTML = html;
    
    //styles
    container.style.padding = '20px';
    container.style.boxSizing = 'border-box';
    
    //observer    
    
    const imgs = container.querySelectorAll('img');

imgs.forEach(img => {

//img.style.opacity = '0';
img.style.transform = 'translateX(-50%)';

img.style.transition = 'transform 1000ms';

});

const effect = entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          //entry.target.style.opacity ='1';
          entry.target.style.transform = 'translateX(0px)';
        }else{
      //entry.target.style.opacity = '0';
      //entry.target.style.transform = 'translateX(-50%)';
     }
      
  })
};

const observer = new IntersectionObserver(effect,{threshold: 0.3});

imgs.forEach(entry => observer.observe(entry));
    
    
    return container;
}
