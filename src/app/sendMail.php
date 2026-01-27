<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        // Payload is not send to $_POST Variable,
        // is send to php:input as a text
        $json = file_get_contents('php://input');
        //parse the Payload from text format to Object
        $params = json_decode($json);
    
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
    
        $recipient = 'post@michaelring.eu';  
        $subject = "Contact From $name <$email>";
        $messageToYou = "From: " . $name . "<br>" . $message;
    
        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@michaelring.eu";

        $success = mail($recipient, $subject, $messageToYou, implode("\r\n", $headers));

        if ($success) {
            // Confirmation email to the user with personalized headers
            $userSubject = "Vielen Dank für deine Nachricht";
            $userMessage = "Hallo $name,<br><br>vielen Dank für deine Nachricht! Ich habe sie erhalten und werde mich in Kürze bei dir melden.<br><br>Viele Grüße<br>Michael Ring";;
            
            // Separate headers for user email
            $userHeaders = array();
            $userHeaders[] = 'MIME-Version: 1.0';
            $userHeaders[] = 'Content-type: text/html; charset=utf-8';
            $userHeaders[] = "From: Michael Ring <noreply@michaelring.eu>";

            $encodedSubject = '=?UTF-8?B?' . base64_encode($userSubject) . '?=';
            
            mail($email, $encodedSubject, $userMessage, implode("\r\n", $userHeaders));
            
            echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
        }
        
        break;

    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}