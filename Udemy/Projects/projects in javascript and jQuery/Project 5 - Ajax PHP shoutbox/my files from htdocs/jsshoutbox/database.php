<?php
// Connect to MySQL
$con = mysqli_connect("localhost", "root", "", "jsshoutbox");
// Test connection
if(mysqli_connect_errno()) {
    echo 'Failed to connect: '.mysqli_connect_error();
}
?>