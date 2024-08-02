<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "coinoneuser";
$password = "Coinoneuser@123";
$dbname = "coinonereact";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Perform SELECT query
$sql = "SELECT * FROM `reacttest`";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    // Fetch data and store in array
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    // Return data as JSON
    echo json_encode($data);
} else {
    echo json_encode(["message" => "No records found"]);
}

$conn->close();
?>





 

