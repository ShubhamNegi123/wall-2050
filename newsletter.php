<?php
$to = "wallcommunication@gmail.com";
$email = $_REQUEST['email'] ;
$subject = " $email : Subscribe Our Newsletter";
$headers = "wallcommunication@gmail.com";

$sent = mail($to, $headers);
if($sent)
{echo "<script language=javascript>window.location = 'index.html';</script>";}
else
{echo "<script language=javascript>window.location = 'index.html';</script>";}

 $retrieval = mail ($to,$headers);
 if( $retrieval == true ) {
            echo "Message sent successfully...";
    }else {
        echo "Message could not be sent...";
    }   
?>
