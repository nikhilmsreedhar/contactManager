<?php

$inData = getRequestInfo();

$serverName = "192.3.62.202";
$dBUsername = "API";
$dBPassword = "I4m4robot!";
$dBName = "cop4331_database";

$ID = $inData["ID"];
$ContactID = $inData["ContactID"];


$conn = new mysqli($serverName, $dBUsername, $dBPassword, $dBName);
if ($conn->connect_error)
{
    returnWithError( $conn->connect_error );
}
else
{
    $sql = ("DELETE FROM Contacts WHERE ID =4 AND ContactID =3");
    if ($conn->query($sql) === TRUE) {
        returnWithError("");
    } else {
        returnWithError($conn->error);
    }
}

function getRequestInfo()
{
    return json_decode(file_get_contents('php://input'), true);
}

function sendResultInfoAsJson( $obj )
{
    header('Content-type: application/json');
    echo $obj;
}

function returnWithError( $err )
{
    $retValue = '{"error":"' . $err . '"}';
    sendResultInfoAsJson( $retValue );
}

?>
