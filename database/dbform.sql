# Host: localhost  (Version 8.0.1-dmr-log)
# Date: 2021-05-24 23:22:39
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "form_config"
#

DROP TABLE IF EXISTS `form_config`;
CREATE TABLE `form_config` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `texto_tam_exato` int(11) DEFAULT NULL,
  `texto_tam_minimo` int(11) DEFAULT NULL,
  `texto_tam_maximo` int(11) DEFAULT NULL,
  `texto_palavras_min` int(11) DEFAULT NULL,
  `texto_palavras_max` int(11) DEFAULT NULL,
  `email_dominio` varchar(255) DEFAULT NULL,
  `data_minima` timestamp NULL DEFAULT NULL,
  `data_maxima` timestamp NULL DEFAULT NULL,
  `qtd_respostas_min` int(11) DEFAULT NULL,
  `qtd_respostas_max` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Structure for table "forms"
#

DROP TABLE IF EXISTS `forms`;
CREATE TABLE `forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `data_minima` timestamp NULL DEFAULT NULL,
  `data_maxima` timestamp NULL DEFAULT NULL,
  `qtd_opcoes_lista_suspensa` int(11) DEFAULT NULL,
  `qtd_respostas_min` int(11) DEFAULT '1',
  `qtd_respostas_max` int(11) DEFAULT NULL,
  `id_form_config` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_form_config` (`id_form_config`),
  CONSTRAINT `forms_ibfk_1` FOREIGN KEY (`id_form_config`) REFERENCES `form_config` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

#
# Structure for table "form_info"
#

DROP TABLE IF EXISTS `form_info`;
CREATE TABLE `form_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `opcao` varchar(255) DEFAULT NULL,
  `id_form` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_form` (`id_form`),
  CONSTRAINT `form_info_ibfk_1` FOREIGN KEY (`id_form`) REFERENCES `forms` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
