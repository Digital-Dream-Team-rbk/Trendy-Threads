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
  `adminid` INT NULL DEFAULT NULL,
  `adminname` VARCHAR(255) NULL DEFAULT NULL,
  `adminmail` VARCHAR(255) NULL DEFAULT NULL,
  `adminpw` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`adminid`));


-- -----------------------------------------------------
-- Table `Trendy`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trendy`.`products` (
  `productid` INT NULL DEFAULT NULL,
  `productname` VARCHAR(255) NULL DEFAULT NULL,
  `productprice` DECIMAL(10,2) NULL DEFAULT NULL,
  `productquantity` INT NULL DEFAULT NULL,
  `productcategory` VARCHAR(255) NULL DEFAULT NULL,
  `adminid` INT NULL DEFAULT NULL,
  PRIMARY KEY (`productid`),
  INDEX (`adminid` ASC) VISIBLE,
  CONSTRAINT ``
    FOREIGN KEY (`adminid`)
    REFERENCES `Trendy`.`admin` (`adminid`));


-- -----------------------------------------------------
-- Table `Trendy`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trendy`.`users` (
  `userid` INT NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `userpw` VARCHAR(255) NULL DEFAULT NULL,
  `useremail` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`userid`));


-- -----------------------------------------------------
-- Table `Trendy`.`product_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trendy`.`product_user` (
  `productid` INT NULL DEFAULT NULL,
  `userid` INT NULL DEFAULT NULL,
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

