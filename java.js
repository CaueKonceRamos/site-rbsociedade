/* Definindo um estilo para o body */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

/* Estilo do cabeçalho */
header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

header .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 24px;
    font-weight: bold;
    color: white;
}

header .text-white {
    color: white;
}

/* Estilos do menu */
nav a {
    color: white;
    text-decoration: none;
    padding: 10px;
}

nav a:hover {
    color: #ddd;
}

nav #mobile-menu {
    display: none;
}

nav #mobile-menu a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 10px;
}

nav #mobile-menu a:hover {
    color: #ddd;
}

/* Estilo do conteúdo das seções */
section {
    padding: 50px 15px;
}

section h2 {
    font-size: 30px;
    font-weight: bold;
    color: white;
}

section p {
    font-size: 18px;
    color: #b0b0b0;
}

/* Estilo do carrossel */
.carousel {
    position: relative;
    overflow: hidden;
    max-width: 100%;
}

.carousel-item {
    display: none;
}

.carousel-item img {
    width: 100%;
    height: auto;
}

.carousel-item:not(.hidden) {
    display: block;
}

/* Botões de navegação do carrossel */
button {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

button i {
    font-size: 24px;
}

/* Layout do footer */
footer {
    background-color: #1f1f1f;
    color: #bbb;
    text-align: center;
    padding: 15px;
}

footer p {
    font-size: 14px;
}
