-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2017 at 11:33 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `json`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(14) NOT NULL,
  `user` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `repassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `user`, `email`, `password`, `repassword`) VALUES
(1, 'ddd', 'd@d.com', 'd', 'd'),
(2, 'aa', 'asd@a.com', 'a', 'a'),
(3, 'q', 'q@q.com', 'q', 'q'),
(4, 'a', 'a@a.com', 'a', 'a'),
(5, 's', 's@s.com', 's', 's'),
(6, 'qa', 'qa@q.com', 'qa', 'qa'),
(7, 'w', 'w@q.com', 'w', 'w'),
(8, 'z', 'zz@z.com', 'z', 'z');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id_msg` int(14) NOT NULL,
  `type` int(14) NOT NULL,
  `msg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id_msg`, `type`, `msg`) VALUES
(1, 1, 'new1'),
(2, 1, 'new2'),
(3, 2, 'ar1'),
(4, 2, 'ar2');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pro_id` int(14) NOT NULL,
  `pro_name` varchar(255) NOT NULL,
  `price` varchar(14) NOT NULL,
  `shop_id` int(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`pro_id`, `pro_name`, `price`, `shop_id`) VALUES
(1, 'choc', '488', 1),
(2, 'xx', '99', 2),
(5, 'zz', '88$', 2),
(6, 'yy', '6$', 2);

-- --------------------------------------------------------

--
-- Table structure for table `shopes`
--

CREATE TABLE `shopes` (
  `shop_id` int(14) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `num` int(17) NOT NULL,
  `r1` varchar(200) NOT NULL,
  `car` varchar(100) NOT NULL,
  `area` varchar(200) NOT NULL,
  `dates` varchar(255) NOT NULL,
  `timee` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shopes`
--

INSERT INTO `shopes` (`shop_id`, `name`, `email`, `num`, `r1`, `car`, `area`, `dates`, `timee`) VALUES
(5, 'ssdf', 'isra2xzaa-soso94@hotmail.com', 4, 'F', 's2', 'f', '2017-08-16', '22:59'),
(6, 'ssdf', 'isra2xzaa-soso94@hotmail.com', 4, 'F', 's2', 'f', '2017-08-16', '22:59'),
(8, 'fcd', 'taylorsuccessor@gmail.com', 4, 'F', 's1', 'd', '2017-08-17', '13:58'),
(9, 'israa', 'fdf@h.com', 7, 'M', 's1', 'hb', '2017-08-11', '23:58'),
(10, 'fddfg', 'df@fr.com', 4, 'M', 's1', 'bgvf', '2017-08-17', '02:59'),
(11, 'israa', 'shopisra@shop.com', 4, 'M', 's4', 'ew', '2017-08-12', '14:01'),
(12, 'aaa', 'asd@a.com', 4, 'M', 's4', 'fd', '2017-08-25', '12:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_msg`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `shopes`
--
ALTER TABLE `shopes`
  ADD PRIMARY KEY (`shop_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id_msg` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `pro_id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `shopes`
--
ALTER TABLE `shopes`
  MODIFY `shop_id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
