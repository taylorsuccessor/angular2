<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "DELETE FROM shopes WHERE shop_id = $data->id ";
$result = $conn->query($sql);
$conn->close();
?>
