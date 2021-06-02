<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer.php';
require 'Exception.php';
require 'SMTP.php';

try {
    $mail = new PHPMailer();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mir-dit@yandex.ru';
    $mail->Password   = 'qaz12345';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    // Vars
    $mailTo = $_POST['mailTo'];
    $body = $_POST['body'];
    $subject = $_POST['subject'];
    // Send
    $mail->setFrom('mir-dit@yandex.ru', 'MirDit');
    $mail->addAddress($mailTo, 'Обработка писем');
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: " + $mail->ErrorInfo;
}
