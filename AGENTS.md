# AGENTS.md

Sitio educativo estático en español (motricidad fina, Inicial 1 y 2): 8 páginas HTML con JS vanilla inline. Sin framework, backend, fetch, storage ni tests.

## Comandos

- `npm install` — una vez; el repo no incluye lockfile, así que en un clon limpio usa `npm install` (no `npm ci`).
- `npm run build:css` — recompila `assets/tailwind.css` desde `src/tailwind.css` + `tailwind.config.js`. **Obligatorio tras cambiar clases Tailwind en cualquier HTML o tocar la config**; es one-shot (no watch).
- Servir: `npx serve .` o `python -m http.server 8000`. También se puede abrir con `file://`, salvo el reproductor de `videos.html` (ver abajo).

No hay `dev`, `lint`, `test` ni build de HTML. Verificación: abrir las páginas y comprobar que todo `href="*.html"` resuelve.

## Tailwind

- Las 8 páginas enlazan `assets/tailwind.css`; no editar ese archivo a mano, se sobrescribe.
- `tailwind.config.js` solo escanea `./*.html` (`content`). Una clase nueva debe aparecer literal en un HTML raíz (no concatenada) y requiere rebuild; las clases dentro de plantillas JS sí se detectan porque están en el HTML.
- Paleta/radios propios (`primary`, `secondary`, `surface`, `text`, `rounded-4xl/5xl`), `font-sans: Quicksand` y plugin `@tailwindcss/forms`.
- CSS global propio → `src/tailwind.css` + rebuild. Los estilos de fondo/animaciones siguen duplicados en el `<style>` de cada página.
- `@apply` solo funciona en `src/tailwind.css`; los bloques `<style>` de las páginas son CSS plano y no pasan por Tailwind.
- Es Tailwind **3.4**, no v4: `shadow-xs`, `shadow-2xs` y `backdrop-blur-xs` no existen y se ignoran silenciosamente; para esos efectos usa `shadow-sm` / `backdrop-blur-sm`.

## Mapa del proyecto

Líneas orientativas (verificadas al crear esta guía). Si no coinciden, busca el ancla (`#id`, `const`, `function`) dentro del archivo. Antes de leer un archivo completo, localiza aquí el rango; para editar, abre solo la sección/ancla relevante.

```text
MotriKids/
├─ index.html          367  Portada y accesos
├─ juegos.html         457  35 juegos externos en 4 secciones filtrables
├─ recursos.html      1672  60 fichas + pizarra
├─ dibujo.html        1424  88 láminas (38 PDF + 50 imágenes) + pizarra
├─ videos.html        1177  Catálogo YouTube + reproductor
├─ vocales.html        172  Vocales + voz
├─ ingles.html        4042  Hub de Inglés: 20 juegos, 12 fichas y 13 videos
├─ numeros.html        187  Números + voz (legado, fuera del nav)
├─ assets/
│  ├─ favicon.svg
│  ├─ mascota.svg
│  ├─ nav-star.svg
│  ├─ juegos/              35 portadas JPG (720 px) de los juegos de KodomiClub
│  ├─ dibujo/
│  │  ├─ pdf/              88 PDFs A4 para imprimir
│  │  ├─ previews/         88 portadas (PNG de PDF, JPG de imagen)
│  │  └─ imagenes/         50 JPG de alta resolución para la pizarra
│  └─ tailwind.css          generado (no editar)
├─ src/
│  └─ tailwind.css       3  entrada de Tailwind
├─ tailwind.config.js   23  content, paleta, plugin forms
├─ package.json         11  único script: build:css
├─ AGENTS.md                esta guía
└─ README.md            48  desactualizado
```

### Anclas por archivo

- `index.html`: header 145 · `#mobileNav` 175 · hero 190 · main 263 · tarjetas 283-335 · footer 340 · script 358.
- `juegos.html`: header 145 · `#mobileNav` 175 · hero 190 · main 216 · `#filtrosJuegos` 218 · `#gameFilters` 231 · `#juegos-linea` 235 · footer 239 · script 257 · `SECCIONES` 261 · `ETIQUETAS` 288 · `JUEGOS` 305 · `crearTarjeta` 350 · `renderizarJuegos` 368 · `filtrarJuegos` 425.
- `videos.html`: header 46 · `#mobileNav` 64 · main 88 · filtros 95-107 · `#videoGrid` 110 · grupos 111/355/539/683/877 · footer 1064 · script 1082 · `closePlayer` 1093 · `playVideo` 1099 · filtros 1131 · hash 1169.
- `vocales.html`: header 38 · `#mobileNav` 56 · hero 65 · main 80 · tarjetas 86-130 · footer 134 · script 152 · voz 160.
- `numeros.html`: header 38 · `#mobileNav` 56 · hero 65 · main 80 · tarjetas 86-145 · footer 149 · script 167 · voz 175. Página legada: ya no está enlazada desde el nav.
- `ingles.html`: `<style>` 14 · print CSS 1442 · header 1522 · `#mobileNav` 1552 · hero 1567 · main/tabs 1621-1728 · `#view-juegos` 1667 · `#view-recursos` 1688 · `#view-videos` 1709 · footer 1730 · `#gameModal` 1750 · `#resourceModal` 1782 · `#printContainer` 1813 · script 1815 · `PREPOSICIONES` 1900 · `CATEGORIAS_JUEGOS` 1969 · `JUEGOS` 2035-2380 · `CATEGORIAS_RECURSOS` 2382 · `RECURSOS` 2420 · `CATEGORIAS_VIDEOS` 2528 · `VIDEOS` 2571 · `renderizarJuegos` 2708 · `renderizarRecursos` 2818 · `renderizarVideos` 2951 · motor/voz 2980-3200 · `iniciarJuego` 3202 · `cerrarJuego` 3221 · `mostrarFinal` 3247 · `renderizarQuiz` 3316 · `renderizarMemoria` 3421 · `renderizarSort` 3507 · `renderizarBuild` 3596 · fichas 3650-3860 · `abrirRecurso` 3841 · `imprimirRecurso` 3860 · `mostrarVista` 3871 · `iniciarIngles` 3957.
- `recursos.html`: print CSS 164 · header 233 · `#mobileNav` 264 · hero 280 · filtros 322 · main 372 · grids 402/434/466/498 · `#drawModal` 509 · `#paintCanvas` 628 · `#printContainer` 652 · footer 659 · script 679 · `generarLaberintoReal` 688 · `ACTIVIDADES` 816 · `grafoData` 821 · `laberintoConfigs` 903 · `vnData` 940 · `rfData` 1022 · `TRAZOS_NUMEROS` 1106 · `renderizarCatalogo` 1140 · filtros 1252 · pizarra 1272-1645 · `abrirPizarra` 1446 · `imprimirFichaDirecta` 1580 · deep link 1655.
- `dibujo.html`: print CSS 178 · header 260 · `#mobileNav` 293 · hero 310 · filtros 359 · `#categoryFilters` 373 · main 392 · `#drawModal` 403 · `#paintCanvas` 551 · `#printContainer` 587 · footer 596 · script 617 · `ACTIVIDADES` 626 · `CATEGORIAS_BIBLIOTECA` 631 · `RECURSOS_BIBLIOTECA` 638-728 · `normalizarTexto` 734 · `escapeHtml` 738 · `PANELES_BIBLIOTECA` 743 · `ESTRELLAS_BIBLIOTECA` 751 · `crearSeccionesBiblioteca` 758 · `renderizarCatalogo` 805-932 · `filtrarCategoria` 938 · pizarra 956-1398 · `abrirPizarra` 1122 · `descargarDibujo` 1240 · `imprimirDesdeModal` 1312 · `imprimirFichaDirecta` 1322 · arranque 1405 · deep link 1409.

### Reglas de estructura

- Archivos grandes por SVG/tarjetas inline: `ingles.html` (~156 KB), `videos.html` (~143 KB), `recursos.html` (~132 KB) y `dibujo.html` (~111 KB). Busca por id/clase en vez de leerlos enteros.
- Header, navs y footer están **duplicados en las 8 páginas**; al tocarlos, actualiza las 8. Link activo: `text-purple-700 border-b-2 border-purple-700 pb-1` en el nav horizontal; `text-purple-700 font-bold` en `#mobileNav`. El último item del nav es Inglés (`ingles.html`, icono `fa-language`); ya no hay enlace a Números.
- Links internos relativos (`juegos.html`), no absolutos (`/juegos.html`), para que funcione abriendo el HTML directo o sirviéndolo desde cualquier subcarpeta.
- `vocales.html` y `numeros.html` no están enlazadas desde el nav; se llega solo por URL directa. `numeros.html` queda como página legada.
- Google Fonts (Quicksand) y Font Awesome 6 se cargan por CDN; no hay dependencias locales para eso.

## Datos y comportamiento

- `recursos.html`: 60 fichas generadas desde 4 arrays (`grafoData`, `laberintoConfigs`, `vnData`, `rfData`, 15 c/u). Añadir actividades ahí, no en el markup.
- `dibujo.html`: 88 láminas en 4 categorías: `pdf_colorear` (38 PDFs de gatos, Acción de Gracias, flores, Bluey, perritos, dragones y mariposas), `colorear_numeros` (16), `puntos_marcadores` (23) y `repasar_trazos` (11). `ACTIVIDADES` arranca vacío y se llena desde `RECURSOS_BIBLIOTECA`; `crearSeccionesBiblioteca()` genera chips, secciones y grids antes de `renderizarCatalogo()`.
- La pizarra (capas SVG + canvas) está copiada casi igual en `recursos.html` y `dibujo.html`; replica los cambios en ambas. En `dibujo.html` todas las láminas son verticales: lienzo 600x800 (3:4, wrapper 440 px) y se imprimen en A4 vertical con la cabecera de datos del estudiante (nombre, fecha, edad, título e instrucciones) usando `fondo`/`preview`. El motor conserva el modo horizontal 800x500 para SVG, ya sin uso.
- `ingles.html` es el hub de Inglés con tres pestañas internas (`juegos`, `recursos`, `videos`). `JUEGOS` define 20 juegos locales en 5 categorías (emociones, preposiciones, vocales, animales y familia, 4 c/u) con cuatro motores: `quiz`, `memory`, `sort` y `build`; `iniciarJuego()`/`renderizarJuego()` despachan al motor y `mostrarFinal()` cierra la ronda. La voz usa `speechSynthesis` en `en-US`. Las 12 fichas (`RECURSOS`, 4 categorías) se generan con `construirRecurso()` y se imprimen en A4; los 13 videos (`VIDEOS`, 5 categorías) usan fachadas como `videos.html`. Para añadir contenido, edita los arrays, no el markup.
- `ingles.html`: las estrellas premian la ronda resuelta sin fallos. En `quiz`/`sort`/`build` un fallo marca `estadoJuego.falloRonda` y la ronda ya no suma; en memoria cada fallo resta una estrella (mínimo 0).
- Deep links: `recursos.html?trazar=<id>` (usado por `vocales.html` y `numeros.html`), `dibujo.html?dibujar=<id>` e `ingles.html?juego=<slug>` / `ingles.html?vista=juegos|recursos|videos` (también acepta el hash de la vista).
- `videos.html`: fachadas `data-video-id` que crean el iframe de YouTube bajo demanda; `data-no-embed` marca videos no embebibles. No inventar IDs. Bajo `file://` el click abre YouTube en otra pestaña (error 153); prueba el reproductor por HTTP. Los conteos de las pills y de cada grupo se calculan al cargar desde los `<article>`.
- Los catálogos de `recursos`, `dibujo`, `juegos`, `videos` e `ingles` comparten el bloque «Explora por categoría»: título centrado, pills con icono, `border-b-4` y estado activo de color (morado, rosa, teal o rosa según página); cada sección va dentro de un panel pastel `rounded-[32px]` con gradiente y borde de su categoría. Al añadir una sección, replica pills + panel y recompila Tailwind. Los paneles y el filtro llevan estrellas decorativas `fa-star` con `float-slow`/`float-fast`/`twinkle`; el panel necesita `isolate` y las estrellas van en un contenedor `absolute inset-0 -z-10` para quedar detrás del contenido. En `dibujo.html` los colores de esas estrellas se definen en `ESTRELLAS_BIBLIOTECA`; en `juegos.html`, en el campo `star` de `SECCIONES`.
- `juegos.html` es un catálogo de enlaces externos a kodomiclub.com, no juegos locales. `JUEGOS` define 35 juegos repartidos en 4 secciones (`numeros` 9, `lenguaje` 8, `logica` 9, `mundo` 9); `renderizarJuegos()` genera chips, cabeceras y tarjetas, y `filtrarJuegos()` oculta secciones. Cada tarjeta usa una portada local en `assets/juegos/<slug>.jpg` (copia optimizada del `og:image` oficial de KodomiClub, 720×378); no se enlazan imágenes externas.
- Contenido visible en español; mantener UTF-8 (acentos, ñ, emoji).

`README.md` está desactualizado (aún dice Tailwind por CDN y no menciona `dibujo.html` ni `ingles.html`).
