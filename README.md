# math4kids
kw software hackathon Zürich 2016

#update all package to the latest:
npm i -g npm-check-updates
npm-check-updates -u
npm install

#use polyfills
* Install with npm install web-animations-js --save
* Add to polyfills.ts => import 'web-animations-js/web-animations.min';

use polyfills for mobile web browser. Android and iOS chrome has no support for animation yet.
