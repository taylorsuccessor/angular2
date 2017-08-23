<?php
include "db.php";
$sql = "SELECT * FROM shopes ";
$shhhql = "SELECT count(*) as total FROM shopes";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(['rows'=>$data,'totalNumber'=>99]);
} else {
    echo "0";
}
$conn->close();
?>
