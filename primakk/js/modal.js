$(document).ready(function() {
    $( '.zakaz_btn').click( function() {
        $( '.modal' ).css( 'display', 'block');
    });

    $('.btn-modal-close').click(function(){
        $( '.modal' ).css( 'display', 'none' );
    });
});