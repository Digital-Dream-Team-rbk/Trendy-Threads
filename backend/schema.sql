-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Trendy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Trendy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Trendy` ;
USE `Trendy` ;

-- -----------------------------------------------------
-- Table `Trendy`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trendy`.`admin` (
  `adminid` INT NOT NULL AUTO_INCREMENT,
  `adminname` VARCHAR(255) NOT NULL,
  `adminmail` VARCHAR(255) NOT NULL,
  `adminpw` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`adminid`));


-- -----------------------------------------------------
-- Table `Trendy`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trendy`.`products` (
  `productid` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(255) NOT NULL,
  `productprice` DECIMAL(10,2) NOT NULL,
  `productquantity` INT NOT NULL,
  `productcategory` VARCHAR(255) NOT NULL,
  `adminid` INT NOT NULL,
  PRIMARY KEY (`productid`),
  INDEX (`adminid` ASC) VISIBLE,
  CONSTRAINT ``
    FOREIGN KEY (`adminid`)
    REFERENCES `Trendy`.`admin` (`adminid`));


-- -----------------------------------------------------
-- Table `Trendy`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trendy`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `userpw` VARCHAR(255) NOT NULL,
  `useremail` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`userid`));


-- -----------------------------------------------------
-- Table `Trendy`.`product_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trendy`.`product_user` (
  `productid` INT NOT NULL,
  `userid` INT NOT NULL,
  PRIMARY KEY (`productid`, `userid`),
  INDEX (`userid` ASC) VISIBLE,
  CONSTRAINT ``
    FOREIGN KEY (`productid`)
    REFERENCES `Trendy`.`products` (`productid`),
  CONSTRAINT ``
    FOREIGN KEY (`userid`)
    REFERENCES `Trendy`.`users` (`userid`));


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

