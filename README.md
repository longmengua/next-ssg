# SSG

### SSG (static site generation) introduction

When using SSG with Next.js, the page is pre-rendered at compile time. That means that the user won’t have to wait for the page to load at the browser; the page will simply be rendered.

For data fetcng, Next.js provides three different functions:

- getStaticProps : The page will be pre-rendered at build time
- getServerSideProps:  The page will be pre-rendered at runtime
- getStaticPaths : This function generates a list of pages that will be pre-rendered at build time

The biggest disadvantage of using SSG is that the build time can get very long. You won’t have a problem when you have only a few statically-generated pages, but as your application grows, the build time will increase.

The worst case scenario is when you have hundreds of statically-generated pages. The build time will take a long time, and if you have dynamic content on those pages, you can end up with too many builds.

### Launch up

- firstly, run next build
- secondly, after generate .next related files, run next export -o build/
- thirdly, install serve lib globally.
- fourth, after installed, launch up app by 'serve build/' command. 
- finally, using lighthoust chrom pulign to test the performance of the website.

##### Reference links

- https://blog.logrocket.com/ssg-vs-ssr-in-next-js/
- https://developers.google.com/web/tools/lighthouse
