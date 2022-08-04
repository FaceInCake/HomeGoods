<?php
    session_start();
    require_once 'SQL.php';
    require_once 'Post.php';

    function getEmail () {
        if (! isset($_SESSION['uid'])) return array(
            'status' => 403,
            'message' => 'You must be logged in',
            'success' => false,
            'email' => '',
        );
        $res = query("SELECT email FROM users WHERE uid=?;", $_SESSION['uid']);
        if ($res === false) return array(
            'status' => 500,
            'message' => 'Failed to fetch email',
            'success' => false,
            'email' => '',
        );
        $row = $res->fetch_assoc();
        return array(
            'status' => 200,
            'message' => 'Email retrieved',
            'success' => true,
            'email' => $row['email'],
        );
    }

    echo json_encode(getEmail());

?>
