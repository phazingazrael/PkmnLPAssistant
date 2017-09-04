<?php
$updatedData = $_POST['newData'];
// please validate the data you are expecting for security
file_put_contents('load/team.json', $updatedData);
//return the url to the saved file
?>

