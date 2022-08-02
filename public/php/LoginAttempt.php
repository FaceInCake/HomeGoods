<?php
    session_start();
    require_once '.env';

    if ($_SESSION["loggedin"]) {
        echo json_encode(array(
            "result" => "Already logged in"
        ));
    } else {
        echo json_encode(array(
            "result" => "Attempted log in"
        ));
        $_SESSION["loggedin"] = true;
    }

?>
