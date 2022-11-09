class ProjectCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow ({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const imgRight = document.createElement("div");
        imgRight.setAttribute("class", "img__right");

        const title = document.createElement("h1");
        title.textContent = this.getAttribute("titulo");

        const description = document.createElement("h2");
        description.textContent = this.getAttribute("descrição");

        imgRight.appendChild(title);
        imgRight.appendChild(description);

        const image = document.createElement("div");
        image.setAttribute("class", "image");

        const projectImage = document.createElement("img");
        projectImage.src = this.getAttribute("photo") || "/src/imagem/foto default.jpg";
        image.appendChild(projectImage);

        componentRoot.appendChild(imgRight);
        componentRoot.appendChild(image);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                padding-bottom: 50px;
            }

            .img__right {
                display: flex;
                flex-direction: column;
                gap: 12px;
                background-color: #000234;
                border-radius: 20px;
                padding: 10px;
                max-width: 500px;
            }

            .img__right > h1 {
                font-family: 'righteous', cursive;
                font-weight: 400;
                font-size: 35px;
                color: aliceblue;
                align-items: center;
                justify-content: space-around;
                display: flex;
                padding: 20px;
                margin: 0px;
            }

            .img__right > h2 {
                font-family: 'Sarala', sans-serif;
                font-weight: 400;
                font-size: 24px;
                color: aliceblue;
                max-width: 400px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 20px;
                margin: 0px;
            }

            .image > img {
                height: 550px;
                border-radius: 20px;
                margin-top: 20px;
            }

        `;

        return style;
    }

}

customElements.define('project-card', ProjectCard);