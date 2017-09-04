

function setup() {

}

var display = window.location.hostname;


var team = [
    {
        "imageFile": "",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "",
        "Type1": "",
        "Type2": ""
    }, {
        "imageFile": "",
        "Type1": "",
        "Type2": ""
    }
];
console.log(team);


var currentBadges = {
    badge1: "",
    badge2: "",
    badge3: "",
    badge4: "",
    badge5: "",
    badge6: "",
    badge7: "",
    badge8: ""
};

$(document).ready(function () {
        //$('.displayLink').val(display + '/display.html', "value");
        do{
            $('.displayLink').val(display + '/display.html', "value");  
        }
        while($('.displayLink').val() === "");
    /* Party selection functionality */

    /* Fill the selects with pokemon data */
    var pokeFill = function () {
        for (var i = 0, len = pokemon.length; i < len; i++) {
            var type1 = pokemon[i].types[0];
            var type2 = pokemon[i].types[1];
            $('<option t1="' + type1 + '" t2="' + type2 + '" value="img/dex/' + pokemon[i].number + '.png">' + pokemon[i].number + '. ' + pokemon[i].name + '</option>').appendTo('.pkmSelect');
        }
    };
    pokeFill();
    /*set jquery ui styling */
    $("select").select2();
    $('#resetTeam').button();

    /* party selection */
    $("#P1").change(function () {
        var Type1 = $('option:selected', this).attr('t1');
        var Type2 = $('option:selected', this).attr('t2');
        $("#pokemon1").find('img').attr("src", $(this).val());
        $("#pokemon1").find('#type1').removeClass().addClass('t' + Type1);
        $("#pokemon1").find('#type2').removeClass().addClass('t' + Type2);


        console.log(team);
        team[0].imageFile = $(this).val();
        team[0].Type1 = Type1;
        team[0].Type2 = Type2;
        var newData = JSON.stringify(team);
        jQuery.post('./saveJson.php', {
            newData: newData
        }, function (response) {

        });


    });
    $("#P2").change(function () {
        var Type1 = $('option:selected', this).attr('t1');
        var Type2 = $('option:selected', this).attr('t2');
        $("#pokemon2").find('img').attr("src", $(this).val());
        $("#pokemon2").find('#type1').removeClass().addClass('t' + Type1);
        $("#pokemon2").find('#type2').removeClass().addClass('t' + Type2);

        team[1].imageFile = $(this).val();
        team[1].Type1 = Type1;
        team[1].Type2 = Type2;
        var newData = JSON.stringify(team);
        jQuery.post('./saveJson.php', {
            newData: newData
        }, function (response) {

        });
    });
    $("#P3").change(function () {
        var Type1 = $('option:selected', this).attr('t1');
        var Type2 = $('option:selected', this).attr('t2');
        $("#pokemon3").find('img').attr("src", $(this).val());
        $("#pokemon3").find('#type1').removeClass().addClass('t' + Type1);
        $("#pokemon3").find('#type2').removeClass().addClass('t' + Type2);

        team[2].imageFile = $(this).val();
        team[2].Type1 = Type1;
        team[2].Type2 = Type2;
        var newData = JSON.stringify(team);
        jQuery.post('./saveJson.php', {
            newData: newData
        }, function (response) {

        });
    });
    $("#P4").change(function () {
        var Type1 = $('option:selected', this).attr('t1');
        var Type2 = $('option:selected', this).attr('t2');
        $("#pokemon4").find('img').attr("src", $(this).val());
        $("#pokemon4").find('#type1').removeClass().addClass('t' + Type1);
        $("#pokemon4").find('#type2').removeClass().addClass('t' + Type2);

        team[3].imageFile = $(this).val();
        team[3].Type1 = Type1;
        team[3].Type2 = Type2;
        var newData = JSON.stringify(team);
        jQuery.post('./saveJson.php', {
            newData: newData
        }, function (response) {

        });
    });
    $("#P5").change(function () {
        var Type1 = $('option:selected', this).attr('t1');
        var Type2 = $('option:selected', this).attr('t2');
        $("#pokemon5").find('img').attr("src", $(this).val());
        $("#pokemon5").find('#type1').removeClass().addClass('t' + Type1);
        $("#pokemon5").find('#type2').removeClass().addClass('t' + Type2);

        team[4].imageFile = $(this).val();
        team[4].Type1 = Type1;
        team[4].Type2 = Type2;
        var newData = JSON.stringify(team);
        jQuery.post('./saveJson.php', {
            newData: newData
        }, function (response) {

        });
        ;
    });
    $("#P6").change(function () {
        var Type1 = $('option:selected', this).attr('t1');
        var Type2 = $('option:selected', this).attr('t2');
        $("#pokemon6").find('img').attr("src", $(this).val());
        $("#pokemon6").find('#type1').removeClass().addClass('t' + Type1);
        $("#pokemon6").find('#type2').removeClass().addClass('t' + Type2);

        team[5].imageFile = $(this).val();
        team[5].Type1 = Type1;
        team[5].Type2 = Type2;
        var newData = JSON.stringify(team);
        jQuery.post('./saveJson.php', {
            newData: newData
        }, function (response) {

        });
    });
    /* reset the team structure */
    $('#resetTeam').click(function () {

        var teamBase = [
            {
                "imageFile": "",
                "Type1": "",
                "Type2": ""
            }, {
                "imageFile": "",
                "Type1": "",
                "Type2": ""
            }, {
                "imageFile": "",
                "Type1": "",
                "Type2": ""
            }, {
                "imageFile": "",
                "Type1": "",
                "Type2": ""
            }, {
                "imageFile": "",
                "Type1": "",
                "Type2": ""
            }, {
                "imageFile": "",
                "Type1": "",
                "Type2": ""
            }
        ];
        var resetTeam = JSON.stringify(teamBase);

        jQuery.post('./saveJson.php', {
            newData: resetTeam
        }, function (response) {
            console.log(teamBase);
        });
        location.reload();

    });



});