<?php
    session_start();
    require_once 'SQL.php';
    require_once 'Post.php';

    function attemptPasswordChange () {
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
        $password = sanitize('.{8,32}', 'password', 32);
        if ($password === false) return error400_badinput;
        $res = query("UPDATE users SET password=? WHERE uid=?;",
            password_hash($password, PASSWORD_BCRYPT), $_SESSION['uid']);
        global $ERR_MSG;
        if ($res === false) return array(
            'status' => 500,
            'message' => $ERR_MSG,
            'success' => false,
        );
        if ($res === true) return array(
            'status' => 200,
            'message' => 'Password changed successfully',
            'success' => true,
        );
        return array(
            'status' => 500,
            'message' => 'Unexpected result',
            'success' => false,
        );
    }

    echo json_encode(attemptPasswordChange());

?>
