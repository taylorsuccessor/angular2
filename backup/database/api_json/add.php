<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO shopes (name, email, num, r1, car, area, dates, timee)
VALUES ('$data->name', '$data->email' , '$data->num' , '$data->r1' , '$data->car'  , '$data->area' , '$data->dates' , '$data->timee')";
if($data->name ){
	$qry = $conn->query($sql);
}
$conn->close();
?>