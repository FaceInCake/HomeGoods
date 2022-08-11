<?php
    session_start();
    require_once 'SQL.php';
    require_once 'Post.php';

    const error400_incorrect = array(
        'status' => 400,
        'loggedin' => false,
        'message' => 'Incorrect username or password'
    );

    // Returns:
    // status => int : Your usual http response status code
    // message => string : Short phrase describing the result
    // success => bool : Whether the new account was created or not
    function attemptSignup () {
        if (!getPost()) return array(
            'status' => 500,
            'message' => 'Failed to retrieve the query parameters',
            'success' => false,
        );
        if (!isset($_SESSION['admin']) || $_SESSION['admin']!==true) return array(
            'status' => 403,
            'message' => 'You are not allowed here >:(',
            'success' => false,
        );
        $name = sanitize('.{4,}', 'name', 64);
        if ($name === false) return error400_badinput;
        $caption = sanitize('.{4,}', 'caption', 64);
        if ($caption === false) return error400_badinput;
        $description = sanitize('(.|\n){4,}', 'description', 65535);
        if ($description === false) return error400_badinput;
        $available = sanitize('\d{1,5}', 'available', 5);
        if ($available === false) return error400_badinput;
        $price = sanitize('\d{1,8}\.\d{0,2}', 'price', 11);
        if ($price === false) return error400_badinput;
        $images = sanitize('.{4,}', 'images', 65535);
        if ($images === false) return error400_badinput;
        $keywords = sanitize('[a-z]+(;[a-z]+)*', 'keywords', 65535);
        if ($keywords === false) return error400_badinput;

        $res = query("INSERT INTO items (name, caption, description, available, price, imageurls, keywords) VALUES (?,?,?,?,?,?,?);",
            $name, $caption, $description, $available, $price, $images, $keywords);
        if ($res === false) return array(
            'status' => 500,
            'message' => $ERR_MSG,
            'success' => false,
            'newid' => -1,
        );
        if (is_int($res)) return array(
            'status' => 200,
            'message' => 'item created successfully',
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
