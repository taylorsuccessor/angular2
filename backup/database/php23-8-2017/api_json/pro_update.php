<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE product SET
pro_name ='$data->pro_name',  price ='$data->price'
WHERE pro_id = $data->pro_id ";
$qry = $conn->query($sql);
if($data->pro_name){
}
$conn->close();
?>
