<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$servername = "localhost";
$username = "coinoneuser";
$password = "Coinoneuser@123";
$dbname = "coinonereact";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$email = $data['email'];
$description = $data['description'];
if(isset($name)){
    $sql = "INSERT INTO reacttest (name, email, description) VALUES ('$name', '$email', '$description')";
    $conn->query($sql);
}
$result = $conn->query("SELECT * FROM reacttest");
while ($row = $result->fetch_assoc()) {
        $records[] = $row;
    }
    $response["data"] = $records;
    $response["success"] = true;

$conn->close();
// print_r($records);
echo json_encode($response);
?>
