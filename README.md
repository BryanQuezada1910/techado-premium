# Instrucciones para visualizar el proyecto:

El proyecto lo desarrollé usando la versión de Nodejs 22.12.0 (LTS), para que lo tengan en cuenta.

Primero se debe clonar el repositorio, una vez clonado navegar a la carpeta y abrir una terminal. Luego, en la raíz, ejecutar el siguiente comando para instalar las dependencias:

```sh
npm install
```

Para ver la web en local ejecutar el comando:

```sh
npm run dev
```

Una vez levantado, el proyecto estará en [http://localhost:4321/](http://localhost:4321/)

---

# Breve explicación del diseño

El diseño de la web fue concebido para reflejar el carácter **elegante, exclusivo y profesional** de una empresa de techado premium. Cada decisión en la elección de colores, fuentes y estructura busca transmitir **calidad y confianza** al usuario.

## 1. Estructura del diseño
- El proyecto fue desarrollado utilizando **Astro** para su rapidez y optimización en la entrega de contenido estático.
- Los estilos fueron creados con **Tailwind CSS**, complementado por **DaisyUI** para facilitar la implementación de componentes reutilizables y estilizados.
- Se utilizó una estructura modular para garantizar un diseño escalable y fácil de mantener.

## 2. Tema de colores

**Para el tema oscuro (por defecto):**
```javascript
mytheme: {
  primary: "#d4af37",
  secondary: "#f5f5f5",
  accent: "#02020d",
  neutral: "#0e0503",
  "base-100": "#1a1a1a",
  info: "#00bde7",
  success: "#00d6b0",
  warning: "#fde047",
  error: "#ea0032",
}
```

**Para el tema claro:**
```javascript
secondary: {
  primary: "#d4af37",
  secondary: "#1a1a1a",
  accent: "#ededed",
  neutral: "#0e0503",
  "base-100": "#f5f5f5",
  info: "#00bde7",
  success: "#00d6b0",
  warning: "#fde047",
  error: "#ea0032",
}
```

### Paleta de colores:
- **Primario (dorado):** `#d4af37` simboliza exclusividad y premium.
- **Secundario:** Tonos contrastantes de claro (`#f5f5f5`) y oscuro (`#1a1a1a`) garantizan legibilidad y elegancia.
- **Neutros y bases:** Colores oscuros (`#1a1a1a`, `#0e0503`) dominan el tema oscuro, mientras que los tonos claros (`#ededed`, `#f5f5f5`) definen el tema claro.
- **Colores de estado:**
  - **Info:** `#00bde7` para elementos informativos.
  - **Éxito:** `#00d6b0` para interacciones positivas.
  - **Advertencia:** `#fde047` para alertas.
  - **Error:** `#ea0032` para mensajes críticos.

## 3. Tipografía
- Se seleccionó la fuente **'Noto Serif'**, una tipografía serif que proyecta elegancia y profesionalismo, acorde al tono de la marca.

## 4. Tema adaptable
- La interfaz se diseñó con un **modo oscuro por defecto**, reflejando una estética moderna y minimalista, mientras que el tema claro ofrece una opción alternativa sin sacrificar la elegancia.

## 5. Interactividad y componentes
- Los componentes dinámicos, como botones y formularios, utilizan la paleta de colores para guiar al usuario en su interacción con el sitio.
- Las animaciones sutiles de DaisyUI realzan la experiencia del usuario sin sobrecargar la interfaz.

## 6. Responsive Design
- El diseño es completamente responsivo, asegurando una visualización óptima en dispositivos móviles, tablets y pantallas grandes, manteniendo una experiencia consistente y profesional.

---

**Lo de abajo fué generado por Astro**

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
