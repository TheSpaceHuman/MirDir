<?php error_reporting(0);

	// $test = [
	// 	'to' =>  $_POST['to'],
	// 	'subj' => $_POST['subj'],
	// 	'name' => $_POST['name'],
	// 	'email' => $_POST['email'],
	// 	'phone' => $_POST['phone'],
	// ];
	
	// print_r($test);

	$mail = $_POST['to'] || "info@mir-dit.ru";
	$message = "<h2>Здравствуйте! С сайта  mir-dit.ru поступила: <br>".$_POST['subj']."</h2><hr>
		<p><strong>Имя:</strong> ".$_POST['name']."</p>
		<p><strong>Электронная почта:</strong> ".$_POST['email']."</p>
		<p><strong>Номер телефона:</strong> ".$_POST['phone']."</p>	";
	$subject="Заявка с сайта mir-dit.ru ";
	mail($mail, $subject, $message, "Content-type: text/html; charset=utf-8 \r\n");
	
?>