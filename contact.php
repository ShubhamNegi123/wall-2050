<?php
$to = "wallcommunication@gmail.com";
$name = $_REQUEST['name'] ;

$phone = $_REQUEST['phone'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$services = $_REQUEST['services'];
$subject = "Message from: $name";
$headers = "wallcommunication@gmail.com";
$body = "From: $name \n\n Email: $email \n\n Phone: $phone \n\n  
message: $message \n\n services : $services";
$sent = mail($to, $subject, $body);
if($sent)
{echo "<script language=javascript>window.location = 'index.html';</script>";}
else
{echo "<script language=javascript>window.location = 'index.html';</script>";}


?>

