<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "SELECT * FROM login WHERE email = '$data->email' ";
$result = $conn->query($sql);
if ($result->num_rows == 1) {
  // correct login
if($data->email){
	// $qry = $conn->query($sql);
 while($row=mysql_fetch_array($result))
    {
      $email=md5($row['email']);
      $pass=md5($row['password']);
    }
}


 }else {

echo 'not sucss';
} 



$conn->close();
?>