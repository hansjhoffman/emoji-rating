# Web Components
> #webComponents #useThePlatform

## Specs
1. Custom elements

```
class DatePicker extends HTMLElement {
  constructor() {
    super();
    //...
  }
}

customElements.define('date-picker', DatePicker)
```

2. HTML Templates (very performant)

```
<template id="date-picker-template">
  <style>
    /* css */
  </style>
  <div>/* some markup */</div>
  <slot></slot>
  <div>/* some markup */</div>
</template>
```

3. Shadow DOM

```
<date-picker><p>I appear in the slot</p></date-picker>

<date-picker>
  #shadow-root
  <style>
    /* css */
  </style>
  <div>/* some markup */</div>
  <slot> paragraph "appears" here </slot>
  <div>/* some markup */</div>
</date-picker>
```

## Available Tooling
* [Polymer](https://www.polymer-project.org/)
* [Glimmer](https://glimmerjs.com/)
* [Skate.js](https://github.com/skatejs/skatejs)
* [Stencil.js](https://stenciljs.com/)

## Support
* _requires polyfills_
  If web browser doesn't support web components, it will treat it as a div so
  you can use a fallback in that case.
  ```
  <web-share-wrapper
    text="Share this"
    sharetitle="This amazing thing was shared"
    sharetext="You should really click on the link to learn more"
    shareurl="http://example.com/amazing"
  >
    <a href="https://twitter.com/...url=SHARE_URL">
      Share on Twitter
    </a>
  </web-share-wrapper>
  ```

* [custom-elements-everywhere](https://custom-elements-everywhere.com/)

## Who's using WC's in production?
* [A-Frame](https://aframe.io/docs/0.8.0/introduction/)
* [YouTube](https://youtube.com/)
* [xfinity](https://www.xfinity.com/)
* [GitHub](https://www.github.com)
* [Netflix](https://www.netflix.com)

## Notes:
React is just doing document.createElement() under-the-hood
Web Components "kind of work" using ref's w/ React b/c it passes props as
attributes not properties which only supports "simple" data such as strings

attributes:
`<date-picker value="5" disabled></date-picker>`

properties:
```
const el = document.querySelector('date-picker');
el.value = 99;
el.disable = false;
el.range = ['2018-01-01', '2019-01-01'];
```
