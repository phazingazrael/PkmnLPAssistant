<?php
$file = './load/team.json';
$base = '[
    {
        "imageFile": "img/noPokemon.png",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "img/noPokemon.png",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "img/noPokemon.png",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "img/noPokemon.png",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "img/noPokemon.png",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "img/noPokemon.png",
        "Type1": "",
        "Type2": ""
    }
]';

if(!is_file($file)){
    //Save our content to the file.
    file_put_contents($file, $base);
    header("Location: /index.html"); /* Redirect browser */
}
    
?>