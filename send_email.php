<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "jodicksonjoshua@gmail.com";
        $subject = "New Subscription";
        $message = "New subscription from: " . $email;
        $headers = "From: noreply@yourdomain.com\r\n" .
                   "Reply-To: noreply@yourdomain.com\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Send email to site owner
        if (mail($to, $subject, $message, $headers)) {
            // Send confirmation email to the user
            $userSubject = "Subscription Confirmation";
            $userMessage = "Thank you for subscribing to our newsletter!";
            $userHeaders = "From: noreply@yourdomain.com\r\n" .
                           "Reply-To: noreply@yourdomain.com\r\n" .
                           "X-Mailer: PHP/" . phpversion();

            if (mail($email, $userSubject, $userMessage, $userHeaders)) {
                echo "Thank you for subscribing! A confirmation email has been sent to your email address.";
            } else {
                echo "Failed to send confirmation email.";
            }
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request method.";
}
?>
