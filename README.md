## Version: Foundation6

Foundation Version: 6.3.0

Complete with Plugins

Troubleshooting: bioduds@gmail.com

Example: 

```javascript
Template.test.events({
  'click #ec-test-modal'( event, instance ) {
    console.log( "clicked MODAL TEST" );
    var $modal = new Foundation.Reveal($('#exampleModal1'));
    $modal.open();    
  }
});
```
```html
<template name="test">  
  <button class="success button">button</button>
  <p><a id="ec-test-modal" data-open="exampleModal1">Click me for a modal</a></p>
  <div class="reveal" id="exampleModal1" data-reveal>
    <h1>Awesome. I Have It.</h1>
    <p class="lead">Your couch. It is mine.</p>
    <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
    <button class="close-button" data-close aria-label="Close modal" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
```

Cheers.