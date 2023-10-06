CREATE TABLE `reservering` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `naam` varchar(255),
  `email` varchar(255),
  `telefoon` varchar(15) ,
  `datum` date ,
  `aantal` int,
  `aankomst` time,
  `opm` varchar(255),
  `status` varchar(255) DEFAULT 'untouched'  -- untouched/goedgekeurd/afgewezen/geannuleerd
);


CREATE TABLE `history` (
  `id` int PRIMARY KEY,
  `naam` varchar(255),
  `email` varchar(255),
  `telefoon` varchar(15) ,
  `datum` date ,
  `aantal` int,
  `aankomst` time,
  `opm` varchar(255),
  `status` varchar(255) -- untouched/goedgekeurd/afgewezen/geannuleerd
);


CREATE TABLE `blacklist` (
  `email` varchar(255),
  `telefoon` int
);


CREATE TABLE `user` (
  `gebruikersnaam` varchar(255) PRIMARY KEY,
  `wachtwoord` varchar(255)
);

/*
CREATE USER 'klant'@'%' IDENTIFIED BY 'kl@ntV!k!ng2023';
GRANT INSERT ON <database>.reservering TO 'klant'@'%';
GRANT SELECT,INSERT ON <database>.email_voorkeur TO 'klant'@'%';
GRANT SELECT,INSERT ON <database>.telefoon_voorkeur TO 'klant'@'%';

CREATE USER 'moderator'@'%' IDENTIFIED BY 'Ty@zZeSp3ci@leStoel';
GRANT INSERT,SELECT,DELETE ON *.* TO 'moderator'@'%'
*/
