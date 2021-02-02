<?php error_reporting(0);
    $mail = $_POST['to'] || "info@mir-dit.ru";
    $title = "<h1>Новые письмо от пользоватлея mir-dit.ru</h1><h2>".$_POST['subj']."</h2>";
    $content = "<p><strong>Имя:</strong> ".$_POST['name']."</p>"."<p><strong>Электронная почта:</strong> ".$_POST['email']"</p>"."<p><strong>Номер телефона:</strong> ".$_POST['phone']."</p>";
    $message = $title.''.$content;
    $subject="Заявка с сайта mir-dit.ru ";
	mail($mail, $subject, $message, "Content-type: text/html; charset=utf-8 \r\n");
?>