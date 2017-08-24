<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";



	$sql1="SELECT * FROM login WHERE email ='$data->email' ";
$result = $conn->query($sql1);
if ($result->num_rows != 1) {
$sql = "INSERT INTO login (user, email, password, repassword)
VALUES ('$data->user', '$data->email', '$data->password', '$data->repassword')";
if($data->user){
	$qry = $conn->query($sql);

}

   echo json_encode(['status'=>'success']);
 }else {

   echo json_encode(['status'=>'error']);
} 

$conn->close();

?>