<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "SELECT * FROM login WHERE email = '$data->email' and  password= '$data->password'";
$result = $conn->query($sql);
if ($result->num_rows == 1) {
  // correct login
if($data->email){
	$qry = $conn->query($sql);

}


   echo json_encode(['status'=>'success','msg'=>'php success']);
 }else {

   echo json_encode(['status'=>'error','msg'=>'php not success']);
} 



$conn->close();
?>