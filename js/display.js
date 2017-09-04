function ref()
{
    var team;

    $.getJSON('./load/team.json', function (json) {
        team = json;
    });

    // Set pokemon data here

    // First pokemon
    $('#pokemon1').attr('src', team[0].num);
    $("#pokemon1").find('#type1').removeClass().addClass('t' + team[0].Type1);
    $("#pokemon1").find('#type2').removeClass().addClass('t' + team[0].Type2);

    // Second pokemon
    $('#pokemon2').attr('src', team[1].num);
    $("#pokemon2").find('#type1').removeClass().addClass('t' + team[1].Type1);
    $("#pokemon2").find('#type2').removeClass().addClass('t' + team[1].Type2);

    // Third pokemon
    $('#pokemon3').attr('src', team[2].num);
    $("#pokemon3").find('#type1').removeClass().addClass('t' + team[2].Type1);
    $("#pokemon3").find('#type2').removeClass().addClass('t' + team[2].Type2);

    // Fourth pokemon
    $('#pokemon4').attr('src', team[3].num);
    $("#pokemon4").find('#type1').removeClass().addClass('t' + team[3].Type1);
    $("#pokemon4").find('#type2').removeClass().addClass('t' + team[3].Type2);

    // Fifth pokemon
    $('#pokemon5').attr('src', team[4].num);
    $("#pokemon5").find('#type1').removeClass().addClass('t' + team[4].Type1);
    $("#pokemon5").find('#type2').removeClass().addClass('t' + team[4].Type2);

    // Sixth pokemon
    $('#pokemon6').attr('src', team[5].num);
    $("#pokemon6").find('#type1').removeClass().addClass('t' + team[5].Type1);
    $("#pokemon6").find('#type2').removeClass().addClass('t' + team[5].Type2);

    /*$.getJSON('load/badges.json', function (badges) {
     $('#badge1').attr('src', badges.badge1);
     $('#badge2').attr('src', badges.badge2);
     $('#badge3').attr('src', badges.badge3);
     $('#badge4').attr('src', badges.badge4);
     $('#badge5').attr('src', badges.badge5);
     $('#badge6').attr('src', badges.badge6);
     $('#badge7').attr('src', badges.badge7);
     $('#badge8').attr('src', badges.badge8);
     });*/
}
setInterval('ref()', 1000);