<?php
    session_start();
    require_once 'SQL.php';
    require_once 'Post.php';

    function getItem () {
        if (! isset($_SESSION['uid'])) return array(
            'status' => 403,
            'message' => 'You must be logged in',
            'success' => false,
        );
        if (!getPost()) return array(
            'status' => 500,
            'loggedin' => false,
            'message' => 'Failed to retrieve the query parameters'
        );
        $id = sanitize('\d+', "itemid", 10);
        if ($id === false) return error400_badinput;
        $res = query("SELECT * FROM items WHERE id=?;", $id);
        if ($res === false) return array(
            'status' => 500,
            'message' => 'Failed to fetch item',
            'success' => false,
        );
        $row = $res->fetch_assoc();
        return array(
            'status' => 200,
            'message' => 'Item retrieved',
            'success' => true,
            'item' => $row,
        );
    }

    echo json_encode(getItem());

?>
