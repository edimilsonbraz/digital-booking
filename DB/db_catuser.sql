-- MySQL Script generated by MySQL Workbench
-- Thu Feb 16 22:40:13 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_prod
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db_prod` ;

-- -----------------------------------------------------
-- Schema db_prod
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_prod` DEFAULT CHARACTER SET utf8 ;
USE `db_prod` ;

-- -----------------------------------------------------
-- Table `db_prod`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`categoria` (
  `categoria_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `qualificacaoCategoria` VARCHAR(255) NOT NULL,
  `descricaoCategoria` VARCHAR(255) NOT NULL,
  `urlimagemCategoria` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`categoria_id`),
  UNIQUE INDEX `categoria_id_UNIQUE` (`categoria_id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `db_prod`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`usuario` (
  `usuario_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomeusuario` VARCHAR(45) NOT NULL,
  `sobrenomeUsuario` VARCHAR(45) NOT NULL,
  `emailUsuario` VARCHAR(255) NOT NULL,
  `senhaUsuario` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE INDEX `usuario_id_UNIQUE` (`usuario_id` ASC) VISIBLE,
  UNIQUE INDEX `emailUsuario_UNIQUE` (`emailUsuario` ASC) VISIBLE);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
