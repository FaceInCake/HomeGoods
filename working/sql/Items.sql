-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Generation Time: Aug 09, 2022 at 08:35 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

INSERT INTO `items` (`id`, `name`, `caption`, `description`, `available`, `price`, `imageurls`, `keywords`) VALUES
(1, 'Fake Table', 'This table may look real, but it is not real.', 'This amazing table could be yours today! It features an incredible wooden top and four amazing wooden legs!', 99, '19.99', 'images/items/err5d7a2-900.jpg;', 'table;wooden'),
(2, 'Bottle Table', 'A table capable of holding a bottle and nothing else.', "Don\'t be fooled, the only thing this table is able to do is hold this bottle. Nothing else. Do not try to do anything else with the table. Dire consequences will occur.", 1, '39.99', 'images/items/bottleTable.webp;', 'table;wooden'),
(3, 'Forest Table', 'A natural forest born table', 'This table was found in the middle of a forest. For safety reasons it was not captured and instead photographed at a distance.', 2, '43.99', 'images/items/forestTable.webp;', 'table;wooden'),
(4, 'Table & Chair', 'A table with a therapy chair', 'Some tables often perform better with therapy chairs. They have also been seen experiencing less stress and anxiety overall. This makes this table one of the friendlier purchases.', 16, '34.88', 'images/items/chairTable.jpg;', 'table;chair;wooden'),
(5, 'Nail Table', 'Wooden table with a wire leg', 'A minimalist table, this table has a large wooden top, but a simple wire leg.', 43, '24.99', 'images/items/nailtable.jpg', 'table;wooden'),
(6, 'Secretive Table', 'A table with only their top half showing', 'Some tables are a bit shy about showing themselves. These tables are somewhat secretive for that reason. Here, you can see the lovely top of the table, but not what lies below.', 16, '28.94', 'images/items/halfTable.webp;', 'table;wooden'),
(7, 'Floor Table', 'A table with no legs, a floor table', 'This gorgeous floor table is great for those minimalists who dare not socialize with those \"chairs\".', 35, '18.49', 'images/items/floorTable.jpg', 'table;wooden');
