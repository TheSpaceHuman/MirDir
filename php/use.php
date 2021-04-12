<?php

if (isset($_POST['submit'])) {

  $to      = $_POST['to'];
  $subject = $_POST['subj'];
  $message = $_POST['msg'];
  
  // Заголовки сообщения, в них определяется кодировка сообщения, поля From, To и т.д.
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=windows-1251\r\n";
  $headers .= "To: $to\r\n";
  $headers .= "From: Имя отправителя <from@domen.ru>";
  
  // mail ($to, $subject, $message, $headers);
 
  require_once "smtpauth.php";
  MailSmtp ($to, $subject, $message, $headers);

} 

?>