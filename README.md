# AngularAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Integrating Tauri App in Angular

Run the following commands:  

1. npm install --save-dev @tauri-apps/cli  
2. inside package.json:  
   "scripts": {
   "tauri": "tauri"
   }  
3. npx tauri init  
4. npx tauri dev  
5. "allowlist": {
   "all": true
   },  
6. To get .exe and .msi file:
   npx tauri build
7. Before that make sure you have 2 things installed:
   a) Rust https://www.rust-lang.org/tools/install
   b) VS code developer tools https://visualstudio.microsoft.com/visual-cpp-build-tools/ (add the 1st option of C++)
