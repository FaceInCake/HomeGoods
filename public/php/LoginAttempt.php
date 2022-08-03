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
    // loggedin => bool : Is the user now officially logged in
    // status => int : Your usual http response status code
    // message => string : Short phrase describing the result
    function attemptLogin () {
        if (!getPost()) return array(
            'status' => 500,
            'loggedin' => false,
            'message' => 'Failed to retrieve the query parameters'
        );
        if (isset($_SESSION['uid'])) return array(
            'status' => 400,
            'loggedin' => true,
            'message' => 'You are already logged in'
        );        
        $username = sanitize('\w{4,24}', 'username', 24);
        if ($username === false) return error400_badinput;
        $password = sanitize('.{8,32}', 'password', 32);
        if ($password === false) return error400_badinput;
        $res = query("SELECT uid, username, password FROM users WHERE username=?;", $username);
        if ($res->num_rows != 1) return error400_incorrect;
        $row = $res->fetch_assoc();
        $hash = $row['password'];
        if (! password_verify($password, $hash)) return error400_incorrect;
        // We're good!
        $_SESSION['uid'] = $row['uid'];
        return array(
            'status' => 200,
            'loggedin' => true,
            'message' => 'Successfully logged in',
            'uid' => $row['uid'],
        );
    }

    echo json_encode(attemptLogin());

?>
