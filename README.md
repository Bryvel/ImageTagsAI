<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with">Desarrollado con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Iniciando</a>
      <ul>
        <li><a href="#prerequisites">Prerequisitos</a></li>
        <li><a href="#installation">Instalacion</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usos</a></li>
    <li><a href="#roadmap">RoadMap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Reto tecnico, con el cual se puede analizar los contenidos de una imagen proporcionada por el usuario, utilizando herramientas poderosas de inteligencia artificial como Imagga, el proyecto esta realizado integramente con expressjs para el back y reactjs para el front

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With


*Express.js v5
* [![Express][Express.js]][Express-url]


*React.js v19.1
* [![React][React.js]][React-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Este Proyecto esta dividido en dos carpetas, diferenciadas una para el Back-End y una para el Front end es necesario correr ambos para el correcto funcionamiento, por lo que se enumeraran los paso para poder utilizarla correctamente

### Prerequisites

Es necesario instalar nodejs para el funcionamiento tanto del back como del front.
*https://nodejs.org/es

Adicionalmente es necesario crearse una cuenta en Imagga para obtener las credenciales de autenticacion de la herramienta.
*https://imagga.com/

Se recomienda crear una forma de gestion de las variables de ambiente para el correcto manejo de la informacion sensible, para este ejercicio proporcionare las credenciales con las que se ha trabajo, pues existe un tier gratuito.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
Back-End
1. Obtener las credenciales de la herramienta--https://imagga.com/
2. Clonar el repositorio
   ```sh
   git clone https://github.com/Bryvel/ImageTagsAI
   ```
3. Entrar al directorio de Back-End
   ```sh
   cd Back-End
   ```
4. Instalar NPM packages
   ```sh
   npm install
   ```
5. Crear un archivo de tipo `.env` y colocar las variables de entorno de la siguiente manera
   ```js
     PORT=80
     NODE_ENV=development
     API_KEY=acc_6ed5e0b6eb580d7
     API_SECRET=e1d2a27da16764a2cd5e2c76324ff8c1;
   ```
6. Iniciar el servidor de back en con el comando en terminal
  ```sh
   node app.js
   ```
6. Si todo ha salido bien el servidor respondera con
  ```sh
   server on port 80
   ```

Front-End
1. Entrar al directorio de Back-End
   ```sh
   cd Front-End
   ```
2. Entrar al directorio de imagge-tagger
   ```sh
   cd image-tagger
   ```
4. Instalar NPM packages
   ```sh
   npm install
   ```
5. Iniciar el proyecto de react 
  ```sh
   npm start
   ```
6. Si todo ha salido react inicializara el front en el navegador

   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Este proyecto puede ser utilizado para, revisar los contenidos de una imagen, una revision a futuro seria tomar la los tags y convertilos de texto a habla con un motor, para que el contenido pueda ser narrado al usuario


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Desarrollo del reto Tecnico
- [ ] Validaciones y puntos de error
- [ ] Pruebas unitarias
  

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Express.js]:https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]:https://expressjs.com/
