<?php
    session_start();
    require_once 'SQL.php';
    require_once 'Post.php';

    function attemptEmailChange () {
        if (!isset($_SESSION['uid'])) return array(
            'status' => 403,
            'message' => 'You must log in first',
            'success' => false,
        );
        if (!getPost()) return array(
            'status' => 500,
            'message' => 'Failed to retrieve the query parameters',
            'success' => false,
        );
        $email = sanitize('(\w+\.)?\w{3,24}@[a-z]{3,8}\.[a-z]{2,4}', 'email', 32);
        if ($email===false || !filter_var($email, FILTER_VALIDATE_EMAIL)) return error400_badinput;
        $res = query("UPDATE users SET email=? WHERE uid=?;",
            $email, $_SESSION['uid']);
        global $ERR_MSG;
        if ($res === false) return array(
            'status' => 500,
            'message' => $ERR_MSG,
            'success' => false,
        );
        if ($res === true) return array(
            'status' => 200,
            'message' => 'Email changed successfully',
            'success' => true,
        );
        return array(
            'status' => 500,
            'message' => 'Unexpected result',
            'success' => false,
        );
    }

    echo json_encode(attemptEmailChange());

?>
