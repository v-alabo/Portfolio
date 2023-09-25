<?php
ini_set("display_errors", "1");
ini_set("display_startup_errors", "1");
error_reporting(E_ALL);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

//Load Composer's autoloader
require 'vendor/autoload.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


   
if(isset($_POST['send'])){
    // Gather form data
    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $message = htmlentities($_POST['message']);
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);
    // SMTP configuration
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com'; // Change to your SMTP server
    $mail->Username = 'victoralabo99@gmail.com';
    $mail->Password = 'rejpgbtmzywkgdap';
    $mail->SMTPSecure = 'ssl'; // Change to 'tls' or 'ssl' as needed
    $mail->Port = 465; // Change to your SMTP port (usually 465 for SSL)

    // Recipients
    $mail->setFrom($email,$name);
    $mail->addAddress('victoralabo99@gmail.com ', 'LETSINVEST'); // Add a recipient
    $mail->Subject = ("$email");
    $mail->Body = $message;
    $mail->send();

    header("Location: ./response.php");
}
?>