function ref()
{

    $.getJSON('./load/team.json', function (team) {
        // Set pokemon data here
            
        // First pokemon
        $('#pokemon1').find('img').attr('src', team[0].imageFile);
        $("#pokemon1").find('.type1').removeClass().addClass('t' + team[0].Type1);
        $("#pokemon1").find('.type2').removeClass().addClass('t' + team[0].Type2);

        // Second pokemon
        $('#pokemon2').find('img').attr('src', team[1].imageFile);
        $("#pokemon2").find('.type1').removeClass().addClass('t' + team[1].Type1);
        $("#pokemon2").find('.type2').removeClass().addClass('t' + team[1].Type2);

        // Third pokemon
        $('#pokemon3').find('img').attr('src', team[2].imageFile);
        $("#pokemon3").find('.type1').removeClass().addClass('t' + team[2].Type1);
        $("#pokemon3").find('.type2').removeClass().addClass('t' + team[2].Type2);

        // Fourth pokemon
        $('#pokemon4').find('img').attr('src', team[3].imageFile);
        $("#pokemon4").find('.type1').removeClass().addClass('t' + team[3].Type1);
        $("#pokemon4").find('.type2').removeClass().addClass('t' + team[3].Type2);

        // Fifth pokemon
        $('#pokemon5').find('img').attr('src', team[4].imageFile);
        $("#pokemon5").find('.type1').removeClass().addClass('t' + team[4].Type1);
        $("#pokemon5").find('.type2').removeClass().addClass('t' + team[4].Type2);

        // Sixth pokemon
        $('#pokemon6').find('img').attr('src', team[5].imageFile);
        $("#pokemon6").find('.type1').removeClass().addClass('t' + team[5].Type1);
        $("#pokemon6").find('.type2').removeClass().addClass('t' + team[5].Type2);
    });
}
setInterval('ref()', 1000);