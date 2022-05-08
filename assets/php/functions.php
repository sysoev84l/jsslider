<?php
function start() {
  header("X-XSS-Protection: 1; mode=block");
  header("Referrer-Policy: no-referrer");
  header("Referrer-Policy: strict-origin-when-cross-origin");
  header("X-Frame-Options:sameorigin");
  header("X-Permitted-Cross-Domain-Policies: none");
  header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
  header("X-Content-Type-Options: nosniff");
  header_remove('x-powered-by');
  error_reporting(-1);
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
}
?>