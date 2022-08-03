<?php

    require_once 'vars/.env';

    $DEBUG = true; // Configure me!

    $ERR_MSG = "";

    $ERR500 = "Error 500: Internal server error";

    function format ($s) : string {
        // String is equiv to null, return identifier for null
        if (!strlen($s)) return "NULL";
        // String is a number, return string as is with no q-marks
        if (preg_match("/\A[0-9]+(?:\.[0-9]+)\Z/", $s)) return $s;
        // Otherwise, just a string
        return "'$s'";
    }

    // Returns false on error
    // Check $ERR_MSG if you want
    // Returns the respose object on success
    function query ($q, ...$args) {
        global $DEBUG; global $ERR_MSG; global $ERR500;
        if ($DEBUG) mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
        global $DB_HOST; global $DB_USER; global $DB_PASS; global $DB_NAME;
        $con = new MySQLi($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
        if ($con->connect_errno) {
            if ($DEBUG) {
                $ERR_MSG = "Connection failed: " . $con->connect_error;
            } else {
                $ERR_MSG = $ERR500;
            }
            $con->close();
            return false;
        }
        $stmt = $con->prepare($q);
        if ($stmt === false) {
            if ($DEBUG) {
                $ERR_MSG = $con->error;
            } else {
                $ERR_MSG = $ERR500;
            }
            $con->close();
            return false;
        }
        $stmt->execute($args);
        $id = $con->insert_id;
        $res = $stmt->get_result();
        $stmt->close();
        $con->close();
        if ($res === false) {
            if ($id === 0) {
                if ($DEBUG) {
                    var_dump('$q\n');
                    $ERR_MSG = "Query failed: " . $con->error;
                } else {
                    $ERR_MSG = $ERR500;
                }
                return false;
            } else {
                return $id;
            }
        }
        return $res;
    }

?>
