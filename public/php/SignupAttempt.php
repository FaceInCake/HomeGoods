<?php
    session_start();
    require_once 'SQL.php';
    require_once 'Post.php';

    const error400_badinput = array(
        'status' => 400,
        'loggedin' => false,
        'message' => 'Invalid parameters'
    );

    const error400_incorrect = array(
        'status' => 400,
        'loggedin' => false,
        'message' => 'Incorrect username or password'
    );

    // Returns:
    // status => int : Your usual http response status code
    // message => string : Short phrase describing the result
    // success => bool : Whether the new account was created or not
    // newid => int : The new user id, if `success` is true
    function attemptSignup () {
        if (!getPost()) return array(
            'status' => 500,
            'message' => 'Failed to retrieve the query parameters',
            'success' => false,
            'newid' => -1,
        );
        if (isset($_SESSION['uid'])) return array(
            'status' => 400,
            'message' => 'You are already logged in',
            'success' => false,
            'newid' => -1,
        );
        $username = sanitize('\w{4,24}', 'username', 24);
        if ($username === false) return error400_badinput;
        $password = sanitize('.{8,32}', 'password', 32);
        if ($password === false) return error400_badinput;
        $email = sanitize('(\w+\.)?\w{3,24}@[a-z]{3,8}\.[a-z]{2,4}', 'email', 32);
        if ($email===false || !filter_var($email, FILTER_VALIDATE_EMAIL)) return error400_badinput;

        $res = query("SELECT username FROM users WHERE username=?;", $username);
        if ($res->num_rows == 1) return array(
            'status' => 200,
            'message' => 'That username is already taken',
            'success' => false,
            'newid' => -1,
        );
        $res = query("INSERT INTO users (username, password, email) VALUES (?,?,?);",
            $username, password_hash($password, PASSWORD_BCRYPT), $email);
        global $ERR_MSG;
        if ($res === false) return array(
            'status' => 500,
            'message' => $ERR_MSG,
            'success' => false,
            'newid' => -1,
        );
        if (is_int($res)) return array(
            'status' => 200,
            'message' => 'Account created successfully',
            'success' => true,
            'newid' => $res,
        );
        return array(
            'status' => 500,
            'message' => 'Unexpected result',
            'success' => false,
            'newid' => -1,
        );
    }

    echo json_encode(attemptSignup());

?>
