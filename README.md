# SUPERWIKI Educational Project

## Author: Malik Hussein Ali (malik.hussein.ali.68@gmail.com)

This project is an example of how we can use NodeJS together with ReactJS. 

Its foundation is a NodeJS application, but in the **client/** directory of this application we have a ReactJS application created with Vite. The Vite configuration file (vite.config.ts) has been modified to output its build results directly into the **public/** directory of the NodeJS application, which is served as the base for static files by the NodeJS application.

This way, NodeJS can serve both the API and the pages at the same time. It just requires that API routes are prefixed with **/api/**, while the SPA (Single Page Application) runs from **public/** without any prefix.

Compressed archives with this initial boilerplate can be found at:

- ZIP format:
- tar.gz format: