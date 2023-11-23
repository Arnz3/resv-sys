CREATE TABLE `reservering` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `voornaam` varchar(255),
  `naam` varchar(255),
  `email` varchar(255),
  `telefoon` varchar(15) ,
  `datum` date ,
  `aantal` int,
  `aankomst` time,
  `opm` varchar(255),
  `annulatie` varchar(255),
  `status` varchar(255) DEFAULT 'untouched'  -- untouched/goedgekeurd/afgewezen
);


CREATE TABLE `history` (
  `id` int PRIMARY KEY,
  `voornaam` varchar(255),
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
  `wachtwoord` varchar(255),
  `salt` varchar(255)
);


SET GLOBAL event_scheduler="ON";

CREATE DEFINER=`root`@`localhost` EVENT `archive_resv` ON SCHEDULE EVERY 1 MINUTE STARTS '2023-11-23 16:38:33' ON COMPLETION PRESERVE ENABLE COMMENT 'moves reservations where the date expired to history table' DO BEGIN
  INSERT INTO history (id, naam, voornaam, email, telefoon, datum, aantal, aankomst, status) 
  SELECT id, naam, voornaam, email, telefoon, datum, aantal, aankomst, status 
  FROM reservering WHERE datum < CURRENT_DATE();
  DELETE FROM reservering WHERE datum < CURRENT_DATE();
END

