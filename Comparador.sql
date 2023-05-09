-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 09-05-2023 a las 10:29:44
-- Versión del servidor: 8.0.16
-- Versión de PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `myDb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Comparador`
--

CREATE TABLE `Comparador` (
  `Marca` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Modelo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Potencia` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Peso` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Precio` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Consumo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Cilindrada` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `Comparador`
--

INSERT INTO `Comparador` (`Marca`, `Modelo`, `Potencia`, `Peso`, `Precio`, `Consumo`, `Cilindrada`) VALUES
('Audi', 'A1', '150', '1365', '32600,00', '4.2', '2.0'),
('Audi', 'A3', '150', '1405', '36670,00', '4,3', '1.6'),
('Audi', 'A4', '204', '1600', '61800,00', '26.2', '2.0'),
('Audi', 'A5', '250', '1660', '65910,00', '7.9', '2.0'),
('BMW', 'SERIE 3', '245', '1650', '51800,00', '6.5', '2.0'),
('BMW ', 'SERIE 4', '340', '1600', '82000,00', '6.7', '3.0'),
('BMW', 'SERIE 5', '395', '1840', '103000,00', '8.2', '4.4'),
('BMW', 'SERIE 8', '550', '1820', '120000,00', '10.6', '4.4'),
('CHEVROLET', 'Corvette', '495', '1200', '80000,00', '10.4', '3.5'),
('CHEVROLET', 'Camaro', '480', '1800', '50000,00', '9.7', '4.2'),
('CHEVROLET', 'Blazer', '180', '1900', '21000,00', '8.0', '2.0'),
('CHEVROLET', 'Colorado', '250', '2300', '30000,00', '9.2', '2.5'),
('DACIA', 'Sandero', '90', '1550', '10000,00', '5.5', '1.0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
