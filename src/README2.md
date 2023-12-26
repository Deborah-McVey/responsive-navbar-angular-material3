angular 17 globally installed in cmd
project set up in VS Code
VS terminal:
cd to folder on my computer
create project:
cli commands new project --no-strict --no-standalone --style=css --routing=false
said no to: Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? n
no app.routes.ts, no app.config.ts, no app.config.server.ts
open folder in VS Code
ng add @angular/material
indigo/pink theme
made from karthikkgunasekaran's github project "angular-material-flexlayout-navbar" 
https://github.com/karthikkgunasekaran/angular-material-flexlayout-navbar
from January 1, 2019
I changed his/her "services" component to "staff" due to naming conventions, and "products" to "dental"
feature x 5 and featuremodule
nav x 2 (top and side) and navmodule
material module for angular material imports
create app-routing.module.ts
each component --skip-tests --skip-import
will need to install flex-layout (npm i @angular/flex-layout)
ng s -o
blue top nav (color="primary")
inspect
sidenav shows up when width under 960
