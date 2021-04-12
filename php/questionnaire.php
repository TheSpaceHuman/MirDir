<?php;

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=windows-1251\r\n";
$headers .= "To: $to\r\n";
$headers .= "From: Mir-Dit";

// mail ($to, $subject, $message, $headers);


$to = $_POST['to'] || "info@mir-dit.ru";
$title = "<h1>Новые письмо от пользоватлея mir-dit.ru</h1><h2>".$_POST['subj']."</h2>";
$content = "<p><strong>ФИО:</strong> ".$_POST['name']."</p>"."<p><strong>Адрес электронной почты:</strong> ".$_POST['email']."</p>"."<p><strong>Номер телефона:</strong> ".$_POST['phone']."</p>"."<p><strong>Предпочтительный способ связи с Вами:</strong> ".$_POST['communication']."</p>"."<p><strong>Специальность:</strong> ".$_POST['specialty']."</p>"."<p><strong>Имеете ли Вы образование или опыт в сфере IT?:</strong> ".$_POST['experience']."</p>"."<p><strong>Область последней работы:</strong> ".$_POST['lastWork']."</p>"."<p><strong>Укажите направление обучения, которое хотите пройти у нас:</strong> ".$_POST['directionStudy']."</p>"."<p><strong>Чего Вы хотите достичь, получив это обучение?:</strong> ".$_POST['purposeTraining']."</p>"."<p><strong>Внимательны ли Вы к деталям?:</strong> ".$_POST['mindfulness']."</p>"."<p><strong>Готовы ли Вы постоянно обучаться чему-либо новому и развиваться?:</strong> ".$_POST['develop']."</p>"."<p><strong>Умеете ли Вы донести свою мысль до других людей?:</strong> ".$_POST['communicationWithPeople']."</p>"."<p><strong>Откуда Вы о нас узнали?:</strong> ".$_POST['hearAboutUs']."</p>"."<p><strong>Почему Вы выбрали нашу компанию?:</strong> ".$_POST['chooseOurCompany']."</p>";
$message = $title.''.$content;
$subject= $_POST['subj'] || 'Анкета';

mail($to, $subject, $message, "Content-type: text/html; charset=utf-8 \r\n");

// require_once "smtpauth.php";
// MailSmtp ($to, $subject, $message, $headers);

?>
