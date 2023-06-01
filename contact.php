<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'addi.yannis@gmail.com';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = 'Nouveau message de contact';

    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
