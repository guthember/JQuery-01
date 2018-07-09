/* 
így is ugyanazt fogja csinálni ha kihagyjuk a
---- (document).ready
előírást
(az összes előfordulő 'h1#welcome' elemre megcsinálja)

$( function() {
    let $welcome = $('h1#welcome');
    console.log('Betöltöttünk');
    $welcome.text('Üdv nálunk!');
    
});
*/


$(document).ready( function() {
    let $welcome = $('h1#welcome');
    console.log('Betöltöttünk');
    $welcome.text('Üdv nálunk!');
    
});