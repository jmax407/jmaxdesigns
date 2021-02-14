<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];


	$mailTo = "julius@jmaxdesigns.com";
	$headers = "From: ".$mailFrom;
	$txt = .$name." sent you an email from jmaxdesigns.com. It says" ", \n\n".$message;


	mail($mailTo, $txt, $headers);
	header("Location: index.php?mailsent");

}