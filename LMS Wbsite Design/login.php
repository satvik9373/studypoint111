<?php 
if(isset($_POST['submit'])){
    $to = "email@example.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $pass = $_POST['pass']; // this is the sender's Email address
    $message2 = "Here Is Your Password"$pass;
    mail($to,$message);
    mail($from,$message2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $from . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>