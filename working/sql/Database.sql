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

/* Create the catalog Items table */
CREATE TABLE `eppel_homegoods`.`items` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Item ID' ,
    `name` VARCHAR(64) NOT NULL DEFAULT '' ,
    `caption` VARCHAR(64) NOT NULL DEFAULT '' ,
    `description` TEXT NOT NULL DEFAULT '' ,
    `available` SMALLINT UNSIGNED NOT NULL DEFAULT '0' ,
    `price` DECIMAL(10, 2) NOT NULL DEFAULT '0.00' ,
    `imageurls` TEXT NOT NULL DEFAULT '' ,
    PRIMARY KEY (`id`),
    UNIQUE `name` (`name`)
)
ENGINE = InnoDB
COMMENT = 'Stores basic information about a catalog item';
