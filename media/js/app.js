$(document).ready( function() {

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // Load Particles.JS with custom options
    particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/voidpointer0x00/what-is-your-name@1032316065ab8e806bb58ecb2108f5b5a1813d27/media/assets/particles/particlesjs-config.json', function() {
        console.log(`
        / Sex, drugs & rock'n'roll? — Bugs, hex & \\
        \\ source control                          /
         -----------------------------------------
         \\
          \\
           \\ >()_
              (__)__ _
        `);
    });

    function createMessage(name) {
      switch (name.toLowerCase()) {
        case 'вишенка':
        case 'дина':
          return ':3 Ты мне нравишься, ';
          break;

        default:
          return 'Ты никому не нравишься, ';
          break;
      }
    }

    // When click on success button
    $( '#success' ).click( function(){
        // def name of user
        const name = $('#nameInput').val();

        // Open modal with troll >:D
        $('#bu-ga-ga').modal({keyboard : false})
        // Remove text in modal, if exist
        $('#NoOneLikesYou').text('');
        // Every .5 sec add message to modal
        let message = createMessage(name);
        let interval = setInterval(function(){
          $('#NoOneLikesYou').append(message + name + '!<br>');
        }, 500);
        // when modal hidden
        $('#bu-ga-ga').on('hidden.bs.modal', function (e) {
            // stop troll
            clearInterval(interval);
        })
      });
})
