<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  // Check that all required fields are filled out
  if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("HTTP/1.1 400 Bad Request");
    echo "Please fill out all required fields.";
    exit;
  }

  // Set up email headers and body
  $to = "potato3gg@gmail.com";
  $subject = "New contact form submission from $name";
  $body = "Name: $name\nEmail: $email\n\n$message";

  // Send the email
  if (mail($to, $subject, $body)) {
    header("HTTP/1.1 200 OK");
    echo "Thanks for contacting us! We'll get back to you soon.";
  } else {
    header("HTTP/1.1 500 Internal Server Error");
    echo "Oops! Something went wrong and we couldn't send your message.";
  }
} else {
  header("HTTP/1.1 403 Forbidden");
  echo "You don't have permission to access this page.";
}
?>
