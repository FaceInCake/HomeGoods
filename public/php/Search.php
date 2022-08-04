<?php
    session_start();
    require_once 'SQL.php';
    require_once 'Post.php';

    function attemptSearch () {
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
        $q = sanitize('\w*', 'query', 64);
        if ($q === false) return array(
            'status' => 400,
            'message' => 'Bad search paramater',
            'success' => false,
        );
        $res = query("SELECT * FROM items WHERE name LIKE '%_{$q}_%';");
        if ($res === false) return array(
            'status' => 500,
            'message' => 'Internal server error',
            'success' => false,
        );
        $rows = $res->fetch_all(MYSQLI_ASSOC);
        if ($rows !== false) {
            $assoc = array();
            foreach ($rows as $i => $value) {
                $assoc["$i"] = $value;
            }
            return $assoc;
        }
        return array(
            'status' => 500,
            'message' => 'Internal server error',
            'success' => false,
        );
    }

    echo json_encode(attemptSearch());

?>
