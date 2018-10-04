jQuery(document).ready( function() {
    
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'https://rawgit.com/NyanSandbox/what-is-your-name/master/media/assets/particles/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });

})