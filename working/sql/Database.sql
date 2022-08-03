/* Initialize the database with tables */

/* Create the Users table */
CREATE TABLE `eppel_HomeGoods`.`users` (
    `uid` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
    `username` VARCHAR(24) NOT NULL ,
    `email` VARCHAR(32) NOT NULL , 
    `password` BLOB NOT NULL , 
    `admin` BOOLEAN NOT NULL DEFAULT FALSE , 
    PRIMARY KEY (`uid`)
)
ENGINE = InnoDB
COMMENT = 'Stores general information about a user account';
