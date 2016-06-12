<?php include 'database.php'; ?>
<?php
    if(isset($_POST['name']) && isset($_POST['shout'])) {
        // Prevention of SQL injection
        $name = mysqli_real_escape_string($con, $_POST['name']);
        $shout = mysqli_real_escape_string($con, $_POST['shout']);
        $date = mysqli_real_escape_string($con, $_POST['date']);
    }
    // Set time zone and generate time stamp
    date_default_timezone_set('America/New_York');
    $date = date('h:i:s a',time());
    // Post to table
    $query = "INSERT INTO shouts (name, shout, date)
    VALUES('$name','$shout', '$date')";
    // Show line from table in shoutbox
    if(!mysqli_query($con, $query)){
        echo 'Error: '.mysqli_error($con);
    } else {
        echo '<li>'.$name.': '.$shout.' ['.$date.'] </li>';
    }
?>