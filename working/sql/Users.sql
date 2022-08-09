/* Some example users for testing with */

INSERT INTO `users` (`uid`, `username`, `email`, `password`, `admin`) VALUES

/* Admin account. Password is 'sauceCapePlotHair'  */
(1, 'admin', 'example@email.com', '$2a$12$qm8v8z3UUcOxKp2uxwa3r.wyKkYMIeEiRRjy9yDEXuJAhStDnYi8C', 1),

/* User account. Password is 'exampleAccountPassword'  */
(2, 'user', 'fake@email.com', '$2a$12$liCGQko2XICRsPf5DvkMKOb.kayHM7r66LYrsJSjHLsZrQJUwYfju', 0);
