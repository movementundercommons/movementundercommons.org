# About

This repository holds source code for the redesigned website for The Movement Undercommons. The resulting redesign was a collaborative process between Steven Geofrey, Grisha Coleman, Jack Rifkin, and Amira Samiy. The developer of this repository is Steven Geofrey (s.geofrey@northeastern.edu, https://fluidencodings.com). 

# Build

To build from source, run `npm run build`. To build while ignoring errors from TypeScript linting, run `npm run buildIgnore`. To run a local development server for the source code, run `npm run dev`. Building and running development servers requires most recently updated Node (21.3.0+) and npm (10.2.4+), due to latest requirements from the underlying Vite package environment. The resulting build output is placed in a folder named `dist/`.

# Construction

This application is built using React, TypeScript, and Vite. Client-side routing within the application is handled with React Router. View transition animations between routes are handled with the Motion library.

The following routes are handled by React Router:
* `/`: the Landing page ("Project" navigation item)
* `/portraits`: the Portraits page
* `/technology`: the Technology page
* `/people`: the People page
* `/publications`: the Publications page

Routing is handled within `src/main.tsx`, with routes defined in `src/routing.tsx`.

Within the `src/sections/` subfolder, there are components representing content for each of the routes outlined above:
* `src/sections/Landing.tsx`: the Landing page
* `src/sections/People.tsx`: the People page
* `src/sections/Portraits.tsx`: the Portraits page
* `src/sections/Publications.tsx`: the Publications page
* `src/sections/Technology.tsx`: the Technology page

In addition, the `src/sections/SubSectionContainer.tsx` is a component that is used as the entry point for all of the subpages, i.e., every page that is not the Landing page. This is to ensure standard design and rendering of each of the subpages.

Within the subfolder `src/components/`, there are secondary components defined that are used and recycled throughout the pages of the website. This includes the landing page hero/header (`src/components/Hero.tsx`), page navigation bars (`src/components/StickyHeader.tsx`, `src/components/HamburgerMenu.tsx`), and the footer (`src/components/Footer.tsx`), among others.

Within the subfolder `src/assets/`, there are media files (images, videos) used throughout the site.

The `public/` folder holds the following items:
* `public/publications/`: subfolder holding PDF files of publications listed on the "Publications" page
* `opengraph-card-image.jpg`: An image to use as a link preview image for OpenGraph standards, e.g., social media previews
* `.htaccess`: An .htaccess file to managing client-side routing. See the section "Client-Side Routing" below for details.

# Client-side Routing

Internal routing within the application is handled by React Router, which uses hash-based routing to manipulate the URL displayed in the browser. For example, when on the Portraits page, the URL in the browser is `[base URL]/portraits`. However, this routing is handled entirely client-side, i.e., all routes are served up from the same `index.html` file in the build output. 

On servers that have their own server-side route handling, this clash can cause problems. For example, if you try to go directly to the URL `[base URL]/portraits`, a hosting server may redirect the URL to a 404 or default domain. This is because the server is looking for a static asset at that URL, but there is no such static asset that exists.

To correct this problem, the server needs to be instructed to redirect all explicit URLs for routes (`/portraits`, `/technology`, etc.) back to the build's `index.html` file so that it can handle client-side routing directly.

An `.htaccess` file is offered in the `public/` folder as a candidate, if needed for the deployment server. An alternative candidate is the following:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
```

# Metadata and link previews

OpenGraph metadata are defined in `index.html`. This repository includes an optional image to use for preview cards (`public/opengraph-card-image.jpg`), however in order for it to work, an absolute URL must be provided in `index.html` since relative URLs do not reliably work for link previews. Update the metadata to an absolute URL that reflects the known base URL for the application at deployment.

# Unused components

A subfolder named `src/unusedLegacy` holds code for components that were used previously in development but ultimately not used in the final production build. They are preserved for legacy purposes in the source distribution but are not imported into the production build.