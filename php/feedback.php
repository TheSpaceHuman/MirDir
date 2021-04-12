<?php;

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=windows-1251\r\n";
$headers .= "To: $to\r\n";
$headers .= "From: Mir-Dit";

$to = $_POST['to'] || "info@mir-dit.ru";
$title = "<h1>Новые письмо от пользоватлея mir-dit.ru</h1><h2>".$_POST['subj']."</h2>";
$content = "<p><strong>Имя:</strong> ".$_POST['name']."</p>"."<p><strong>Электронная почта:</strong> ".$_POST['email']."</p>"."<p><strong>Номер телефона:</strong> ".$_POST['phone']."</p>";
$message = $title.''.$content;
$subject= $_POST['subj'] || "Заявка с сайта mir-dit.ru";

mail($to, $subject, $message, "Content-type: text/html; charset=utf-8 \r\n");

// require_once "smtpauth.php";
// MailSmtp ($to, $subject, $message, $headers);

?>