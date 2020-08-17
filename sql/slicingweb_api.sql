-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2020 at 05:30 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `slicingweb_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'Drink'),
(2, 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `invoices` int(11) NOT NULL,
  `cashier` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `menu_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `invoices`, `cashier`, `date`, `menu_id`, `amount`) VALUES
(1, 222, 1, '2020-08-16 17:00:00', 3, 0),
(2, 222, 1, '2020-08-16 17:00:00', 9, 0),
(3, 222, 1, '2020-06-01 17:00:00', 8, 0),
(4, 222, 1, '2020-06-01 17:00:00', 6, 0),
(5, 223, 2, '2020-06-09 17:00:00', 3, 0),
(6, 223, 2, '2020-06-09 17:00:00', 9, 0),
(7, 223, 2, '2020-06-09 17:00:00', 2, 0),
(8, 223, 2, '2020-06-09 17:00:00', 6, 0),
(9, 224, 1, '2020-07-15 17:00:00', 7, 0),
(10, 224, 1, '2020-07-15 17:00:00', 1, 0),
(11, 224, 1, '2020-07-15 17:00:00', 6, 0),
(12, 225, 2, '2020-08-01 17:00:00', 5, 0),
(13, 225, 2, '2020-08-01 17:00:00', 4, 0),
(14, 225, 2, '2020-08-01 17:00:00', 8, 0),
(15, 226, 2, '2020-08-02 17:00:00', 8, 0),
(16, 226, 2, '2020-08-02 17:00:00', 2, 0),
(17, 226, 2, '2020-08-02 17:00:00', 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'Cashier'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `menu` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` text NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `menu`, `category_id`, `price`, `image`, `create_at`, `update_at`) VALUES
(1, 'Expresso', 1, 10000, '', '2020-08-07 03:49:03', '2020-08-07 03:49:03'),
(2, 'Coffe Latte', 1, 20000, '', '2020-08-07 03:49:03', '2020-08-07 03:49:03'),
(3, 'Cappucino', 1, 15000, '', '2020-08-07 03:49:07', '2020-08-07 03:49:07'),
(4, 'Red Velvet', 1, 30000, '', '2020-08-07 03:49:07', '2020-08-07 03:49:07'),
(5, 'Choco Rhum', 2, 35000, '', '2020-08-07 03:51:00', '2020-08-07 03:51:00'),
(6, 'Blackforest', 2, 30000, '', '2020-08-07 03:51:02', '2020-08-07 03:51:02'),
(7, 'Chiken Katsu', 2, 60000, '', '2020-08-07 03:52:23', '2020-08-07 03:52:23'),
(8, 'Salmon Truffle', 2, 65000, '', '2020-08-07 03:52:26', '2020-08-07 03:52:26'),
(9, 'Wiener Schnitzel', 2, 69000, '', '2020-08-07 03:54:04', '2020-08-07 03:54:04'),
(10, 'Rendang', 2, 50000, '', '2020-08-13 15:09:11', '2020-08-13 15:09:11'),
(11, 'Wedang Jahe', 1, 10000, '', '2020-08-13 15:17:07', '2020-08-13 15:17:07'),
(12, 'ayam goreng', 2, 25000, 'http://localhost:8000/images/1597579636336-image.png', '2020-08-16 12:07:16', '2020-08-16 12:07:16'),
(13, 'Ayam Taliwang', 2, 25000, 'http://localhost:8000/images/1597659353863-image.jpeg', '2020-08-16 12:32:57', '2020-08-16 12:32:57'),
(15, 'ayam goreng', 2, 25000, 'http://localhost:8000/images/1597581584420-image.png', '2020-08-16 12:39:44', '2020-08-16 12:39:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `level_id`) VALUES
(1, 'wildan', '$2b$10$cr/lUp.xf1I14UHQOjb/rece8nz7WQT8YoBSz6CDXIsnEyl0B/pTi', 1),
(2, 'pevita', '$2b$10$aXuRuVQgJLXqusriDS6txOSQeAM9DrERa1Ot6m.er.3gi0G3Bm.L6', 2),
(3, 'pacar pevita', '$2b$10$Y08mLPqsLtsbgLFyIgOXf..ZcJOhHUTbUtfKIUXuYVgBRAQLJe23K', 3),
(4, 'mia', '$2b$10$eCv3KFP3STnuQUFrVZqzH.6ZApgS1hnxgexNbBIVAchmqrdOoLgSW', 2),
(5, 'willy', '$2b$10$v6LNo0vIHpXNwU72v8CBiet1cntcOrkBlLVkc/njuZubsuR9DrIhe', 1),
(6, 'willly', '$2b$10$5X0xu0bLOVpY.L4XcYCx3eMyLaVSJYQ9Q6bzaw1h2eMTo91emla66', 1),
(7, 'will', '$2b$10$YmfHj98GDEaoQwex5t1H../oibdS8QEuDxzKbcVpkdEN9AkpkHyhO', 2),
(8, 'jafar', '$2b$10$1pbWnHGcb3FmfBzUs1jeS.f5/9Nc/4LAIly3bcw0EC3rY2tlB35mi', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
