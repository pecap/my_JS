$(document).ready(function(){
    // declaring variables
    var x = "x";
    var o = "o";
    var turns = 0;
    // the 'spot' variables representing tiles
    var spot1 = $('#spot1');
    var spot2 = $('#spot2');
    var spot3 = $('#spot3');
    var spot4 = $('#spot4');
    var spot5 = $('#spot5');
    var spot6 = $('#spot6');
    var spot7 = $('#spot7');
    var spot8 = $('#spot8');
    var spot9 = $('#spot9');
    // the 'click' event logic
    $('#board li').on('click', function(){
    // checking for 3 in a row 'o'
        if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
           spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
           spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
           spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
           spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
           spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
           spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
           spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
          ){
            alert('Winner: O!');
            $('#board li').text(' ');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
    // checking for 3 in a row 'x'
        }else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
           spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
           spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
           spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
           spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
           spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
           spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
           spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
          ){
            alert('Winner: X!');
            $('#board li').text(' ');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
    // checking for tie game
        }else if (turns == 9){
            alert('Tie Game. play again?');
            $('#board li').text(' ');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
    // if not win or tie, check if tie is free
        }else if ($(this).hasClass('disable')){
            alert('This spot is already filled');
    // if free, if even turn add 'o' to tile than check for 3 in a row
        }else if (turns%2==0){
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
               spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
               spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
               spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
               spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
               spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
               spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
               spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
            ){
            alert('Winner: O!');
            turns = 0;
    // move to next turn, add 'x' and check for 3 in a row
            }
        }else {
            turns++;
            $(this).text(x);
            $(this).addClass('disable x');
            if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
               spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
               spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
               spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
               spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
               spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
               spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
               spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
            ){
                alert('Winner: X!');
                turns = 0;
            }
        }
    });
    // Reset handler
    $('#reset').on('click', function(){
        $('#board li').text(' ');
        $('#board li').removeClass('disable');
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
        turns = 0;
    });
});
