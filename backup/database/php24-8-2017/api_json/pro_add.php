<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO product (pro_name, price, shop_id)
VALUES ('$data->pro_name', '$data->price','$data->shop_id')";
if($data->pro_name){
	$qry = $conn->query($sql);
}
$conn->close();
?>