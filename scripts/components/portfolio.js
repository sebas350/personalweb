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
                    'En la barra de navegacion podemos como se trabajo con los botones y el diseno.',
                    'Los link nos llevan a distintas partes del la pagina',
                    'Por detras de la barra de navegacion podemos ver que su codigo esta compuesto por un html que cuenta con elementos ul y li',
                    'Tambien contamos con un menu amburgeza dependiendo del tamaneo de pantalla'
                ],
                main: [
                    'En el cuerpo principal de la Pagina podemos ver como esta organizada en secciones',
                    'Cuenta una carrucel para poder seleccionar y tener mas informacion acerca de los tratamientos',
                    'Cuenta con una secciones donde podemos encotrar a los profesionales, el codigo trabajado aqui se relizo usando la api nativa de js',
                    'En la seccion de ubicacion usamos ijustramos un etiqueta iframe para logar mostrar la ubicacion del lugar'
                ],
                footer: [
                    'El foother cuenta con un codigo que nos muestra los contactos y usamos iconos para los link',
                    'Tambien podemos destacar que tanto el fooder como el navbar esta presente en todos los html usando un template',
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
                    'In the location section, we use an iframe tag to display the location of the spa.'
                ],
                footer: [
                    'The footer includes code displaying contact details and icons for the links.',
                    'We also highlight that both the footer and the navbar are present across all HTML files using a template.'
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
    
    
    const html = `<h1>${title}</h1>
            <p>${description}</p>
            <h1>${webs.title}</h1>
            <p>${webs.description}</p>
            <p>${web1.title}</p>
            <p>${web1.description}</p>
            
            ${web1.navbar.map((p) => `<p>${p}</p>`).join('')}
            
            ${web1.main.map((p) => `<p>${p}</p>`).join('')}
            
            ${web1.footer.map((p) => `<p>${p}</p>`).join('')}
            
            `;
            
    container.innerHTML = html;
    
    //styles
    container.style.padding = '20px';
    
    
    return container;
}
