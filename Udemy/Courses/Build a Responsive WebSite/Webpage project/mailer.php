<?php
      
        // Get the form fields, remove html tags and whitespace
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
      
    	// Check the data
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    	header("Location: http://127.0.0.1/index.php?success=-1#form");
    	exit;
	}

		// Set the recipient email address. update this to YOUR desired email address
	$recipient = "hello@webdesigncourse.co";

		// Set the email subject
	$subject = "New contact from $name";

		// Build the email content
	$email_content = "name: #name\n";
	$email_content .= "Email: #email\n\n";
	$email_content .= "Message: \n$message\n";

		// Build the email headers
	$email_headers = "Form: $name <$email>";

		// Send the email
	mail($recipient, $subject, $email_content, $email_headers);

		// Redirect to the index.html page with success code
	header("Location: http://127.0.0.1/index.php?success=1#form");

?>