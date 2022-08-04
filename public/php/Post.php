<?php

    const error400_badinput = array(
        'status' => 400,
        'message' => 'Invalid parameters',
        'success' => false,
    );

    // Retrieves and placed data into _POST
    // Returns true on success, false on error
    function getPost () {
        $_POST = json_decode(file_get_contents('php://input'), true);
        return json_last_error() == JSON_ERROR_NONE;
    }

    function getGet () {
        $_GET = json_decode(file_get_contents('php://input'), true);
        return json_last_error() == JSON_ERROR_NONE;
    }
    
    // Function for stricly sanitizing a POST[key] from a regex pattern
    // $pattern is a regex pattern, post-formatted for you as "/\A$pattern\Z/"
    // $key is for indexing $_POST
    // $len is the max length for the input
    function sanitize ($pattern, $key, $len) {
        if (preg_match("/\\A$pattern\\Z/", $_POST[$key], $matches)) {
            if (strncmp($_POST[$key], $matches[0], $len)==0) {
                return $matches[0];
            }
        }
        return false;
    }

    function sanitizeGet ($pattern, $key, $len) {
        if (preg_match("/\\A$pattern\\Z/", $_GET[$key], $matches)) {
            if (strncmp($_GET[$key], $matches[0], $len)==0) {
                return $matches[0];
            }
        }
        return false;
    }

?>
