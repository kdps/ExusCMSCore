-- Adminer 4.6.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `def_addon`;
CREATE TABLE `def_addon` (
  `activate_addon` varchar(250) DEFAULT NULL,
  `type` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `def_album`;
CREATE TABLE `def_album` (
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `album` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`srl`),
  UNIQUE KEY `album` (`album`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


SET NAMES utf8mb4;

DROP TABLE IF EXISTS `def_artist`;
CREATE TABLE `def_artist` (
  `artist` varchar(250) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


DROP TABLE IF EXISTS `def_category`;
CREATE TABLE `def_category` (
  `list_order` bigint(11) NOT NULL,
  `type` varchar(11) COLLATE utf8mb4_bin NOT NULL,
  `category_srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `module` varchar(11) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `sub_srl` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`category_srl`),
  KEY `list_order` (`list_order`),
  KEY `category_srl` (`category_srl`),
  KEY `module` (`module`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


DROP TABLE IF EXISTS `def_comment`;
CREATE TABLE `def_comment` (
  `member_srl` bigint(11) NOT NULL,
  `regdate` varchar(250) NOT NULL,
  `blame` bigint(11) NOT NULL DEFAULT '0',
  `vote` bigint(11) NOT NULL DEFAULT '0',
  `step` bigint(11) NOT NULL DEFAULT '0',
  `absolute_pos` bigint(11) NOT NULL DEFAULT '0',
  `depth` bigint(11) NOT NULL DEFAULT '0',
  `comment_srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `parent_srl` bigint(11) NOT NULL DEFAULT '0',
  `content` longtext NOT NULL,
  `module` varchar(250) NOT NULL,
  `document_srl` bigint(11) NOT NULL,
  `nick_name` varchar(250) NOT NULL,
  UNIQUE KEY `comment_srl_2` (`comment_srl`),
  KEY `comment_srl` (`comment_srl`),
  KEY `module` (`module`),
  KEY `document_srl` (`document_srl`),
  KEY `comment_srl_document_srl` (`comment_srl`,`document_srl`),
  KEY `document_srl_comment_srl` (`document_srl`,`comment_srl`),
  KEY `module_comment_srl` (`module`,`comment_srl`),
  KEY `comment_srl_module` (`comment_srl`,`module`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `def_document`;
CREATE TABLE `def_document` (
  `nick_name` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `tag` text COLLATE utf8mb4_bin,
  `category` bigint(11) DEFAULT '0',
  `blamed` bigint(11) NOT NULL DEFAULT '0',
  `voted` bigint(11) NOT NULL DEFAULT '0',
  `extravar` text COLLATE utf8mb4_bin,
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `content` longtext COLLATE utf8mb4_bin NOT NULL,
  `membersrl` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '0',
  `module` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `regdate` varchar(14) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `readed` bigint(11) NOT NULL DEFAULT '0',
  `srl_bd` bigint(11) NOT NULL,
  PRIMARY KEY (`srl`),
  KEY `srl_bd` (`srl_bd`),
  KEY `srl` (`srl`),
  KEY `module` (`module`),
  KEY `category` (`category`),
  KEY `readed` (`readed`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


DROP TABLE IF EXISTS `def_document_music`;
CREATE TABLE `def_document_music` (
  `artist` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `playtime` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `bitrate` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `member_srl` bigint(11) NOT NULL,
  `file_sequence` varchar(250) COLLATE utf8mb4_bin DEFAULT '',
  `star_cnt` bigint(11) NOT NULL DEFAULT '0',
  `star` bigint(11) NOT NULL DEFAULT '0',
  `album_only` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `album_sort_target` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `genre_only` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `title` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `title_only` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `tag` text COLLATE utf8mb4_bin,
  `category_srl` bigint(11) DEFAULT '0',
  `blamed` bigint(11) NOT NULL DEFAULT '0',
  `voted` bigint(11) NOT NULL DEFAULT '0',
  `srl` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` longtext COLLATE utf8mb4_bin NOT NULL,
  `nick_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `module` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `regdate` varchar(14) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `readed` bigint(11) NOT NULL DEFAULT '0',
  `srl_bd` bigint(20) NOT NULL,
  `thumbmd5` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`srl`),
  KEY `srl_bd` (`srl_bd`),
  KEY `srl` (`srl`),
  KEY `module` (`module`),
  KEY `category` (`category_srl`),
  KEY `readed` (`readed`),
  KEY `srl_srl_bd` (`srl`,`srl_bd`),
  KEY `srl_bd_srl` (`srl_bd`,`srl`),
  KEY `file_sequence` (`file_sequence`),
  KEY `module_srl` (`module`,`srl`),
  KEY `module_srl_bd` (`module`,`srl_bd`),
  KEY `srl_module` (`srl`,`module`),
  KEY `srl_bd_module` (`srl_bd`,`module`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


DROP TABLE IF EXISTS `def_editor_component`;
CREATE TABLE `def_editor_component` (
  `activate_component` varchar(250) NOT NULL,
  `type` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `def_extrafile`;
CREATE TABLE `def_extrafile` (
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `target_srl` bigint(11) NOT NULL,
  `extrakey` varchar(250) NOT NULL,
  `origin` varchar(250) NOT NULL,
  `files` varchar(250) NOT NULL,
  PRIMARY KEY (`srl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `def_extrakey`;
CREATE TABLE `def_extrakey` (
  `title` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `default` text COLLATE utf8mb4_bin NOT NULL,
  `module` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `val` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`srl`),
  UNIQUE KEY `val` (`val`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO `def_extrakey` (`title`, `default`, `module`, `srl`, `type`, `val`) VALUES
('확장변수1',	'A,B,C,D',	'index',	1,	'option',	'var1'),
('확장변수2',	'스타크래프트,디아블로',	'index',	2,	'radio',	'var2'),
('확장변수3',	'',	'index',	3,	'color',	'var3'),
('확장변수4',	'',	'index',	4,	'date',	'var4'),
('확장변수5',	'',	'index',	5,	'datetime-local',	'var5'),
('확장변수6',	'',	'index',	6,	'month',	'var6'),
('확장변수7',	'',	'index',	7,	'week',	'var7'),
('확장변수8',	'',	'index',	8,	'time',	'var8'),
('확장변수9',	'',	'index',	9,	'file',	'var9');

DROP TABLE IF EXISTS `def_extravar`;
CREATE TABLE `def_extravar` (
  `val` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `target_srl` bigint(11) NOT NULL,
  `value` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`srl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


DROP TABLE IF EXISTS `def_file`;
CREATE TABLE `def_file` (
  `module` varchar(11) COLLATE utf8_bin NOT NULL,
  `keyres` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `down` bigint(11) NOT NULL DEFAULT '0',
  `origin` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `target` bigint(20) NOT NULL,
  `files` varchar(250) COLLATE utf8_bin NOT NULL,
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`srl`),
  KEY `target` (`target`),
  KEY `srl` (`srl`),
  KEY `down` (`down`),
  KEY `module` (`module`),
  KEY `target_module` (`target`,`module`),
  KEY `srl_target` (`srl`,`target`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


DROP TABLE IF EXISTS `def_file_sequence`;
CREATE TABLE `def_file_sequence` (
  `member_srl` varchar(20) DEFAULT NULL,
  `target_srl` varchar(20) DEFAULT NULL,
  `srl` bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`srl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `def_lysics`;
CREATE TABLE `def_lysics` (
  `lysics` text COLLATE utf8mb4_bin NOT NULL,
  `target_srl` bigint(11) NOT NULL,
  `module` varchar(250) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


DROP TABLE IF EXISTS `def_member`;
CREATE TABLE `def_member` (
  `oauth_type` varchar(250) COLLATE utf8_bin NOT NULL DEFAULT '',
  `is_oauth` tinyint(1) NOT NULL DEFAULT '0',
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `is_accepted` varchar(1) COLLATE utf8_bin NOT NULL DEFAULT 'N',
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(60) COLLATE utf8_bin NOT NULL,
  `nick_name` varchar(40) COLLATE utf8_bin NOT NULL,
  `is_admin` tinyint(1) NOT NULL,
  `minfo` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`srl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `def_member` (`oauth_type`, `is_oauth`, `email`, `is_accepted`, `srl`, `user_id`, `password`, `nick_name`, `is_admin`, `minfo`) VALUES
('',	0,	'admin',	'N',	1,	'admin',	'$2y$10$/3SYTzm56RndbbskuV6S5.BHpKNugvSD0Yztns./jMx/BnP/uEfri',	'admin',	1,	'a:1:{s:8:\"playlist\";N;}'),
('',	0,	'test',	'N',	2,	'test',	'$2y$10$BHnW2KmnU9FUnmgx.PHGweOjc9NXQohhfben8mgWKWj.DEI05Pq22',	'test',	1,	'');

DROP TABLE IF EXISTS `def_menu`;
CREATE TABLE `def_menu` (
  `menu_srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `type` varchar(250) NOT NULL,
  `link` varchar(250) NOT NULL,
  PRIMARY KEY (`menu_srl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `def_module`;
CREATE TABLE `def_module` (
  `mlayout` varchar(250) COLLATE utf8_bin NOT NULL,
  `layout` varchar(250) COLLATE utf8_bin NOT NULL,
  `module` varchar(250) COLLATE utf8_bin NOT NULL,
  `title` varchar(250) COLLATE utf8_bin NOT NULL,
  `srl` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `bdname` varchar(250) COLLATE utf8_bin NOT NULL,
  `skin` varchar(250) COLLATE utf8_bin NOT NULL,
  `m.skin` varchar(250) COLLATE utf8_bin NOT NULL,
  `isdef` varchar(1) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`srl`),
  UNIQUE KEY `bdname` (`bdname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `def_module` (`mlayout`, `layout`, `module`, `title`, `srl`, `bdname`, `skin`, `m.skin`, `isdef`) VALUES
('senkawa',	'senkawa',	'music',	'테스트',	1,	'index',	'music',	'0',	NULL),
('',	'senkawa',	'music',	'갤러리',	4,	'musicvideo',	'music',	'0',	NULL),
('',	'senkawa',	'music',	'자유게시판',	7,	'free',	'default',	'0',	NULL),
('',	'',	'member',	'유저 모듈',	8,	'member',	'default',	'0',	NULL),
('',	'',	'files',	'파일 모듈',	9,	'files',	'default',	'0',	NULL),
('',	'',	'zlibunpack',	'ZLIB 압축해제 유틸리티',	10,	'zlibunpack',	'default',	'0',	NULL),
('',	'senkawa',	'admin',	'관리자',	11,	'admin',	'default',	'0',	NULL),
('',	'',	'page',	'메인 페이지',	13,	'home',	'default',	'0',	'1'),
('',	'senkawa',	'rss',	'RSS',	16,	'rss',	'default',	'default',	NULL),
('',	'senkawa',	'comment',	'댓글',	17,	'comment',	'default',	'default',	NULL),
('',	'',	'search',	'검색',	18,	'search',	'Default',	'0',	NULL),
('',	'',	'nonogram',	'노노그램',	19,	'nonogram',	'',	'',	NULL),
('',	'',	'notification',	'알림 모듈',	20,	'notification',	'default',	'0',	NULL),
('',	'',	'message',	'메시지 모듈',	21,	'message',	'default',	'0',	NULL),
('',	'',	'youtube',	'유튜브',	22,	'youtube',	'',	'',	NULL);

DROP TABLE IF EXISTS `def_module_config`;
CREATE TABLE `def_module_config` (
  `module` varchar(11) COLLATE utf8mb4_bin NOT NULL,
  `config` text COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO `def_module_config` (`module`, `config`) VALUES
('index',	'{\"search_engine\":\"N\",\"bd_query\":\"JOIN\",\"popular_count\":\"5\",\"list_count\":\"20\",\"star_max\":\"5\",\"anony_write\":\"N\",\"anony_comment\":\"N\",\"anony_vote\":\"N\",\"anony_blamed\":\"N\",\"anony_star\":\"N\",\"use_image_watermark\":\"N\",\"watermark_xy_type\":\"user_custom\",\"convert_watermark\":\"N\",\"image_watermark\":\"\",\"x_watermark\":\"\",\"y_watermark\":\"\",\"r_watermark\":\"\",\"g_watermark\":\"\",\"b_watermark\":\"\",\"thumbnail_width\":\"150\",\"thumbnail_height\":\"150\",\"title_length\":\"50\",\"list_view_on\":\"\",\"image_ignore_overlab\":\"\",\"none_id3\":\"2\",\"comment_count\":\"10\",\"comment_depth\":\"5\",\"best_comment\":\"1\",\"worst_comment\":\"1\",\"top_html\":\"\",\"bottom_html\":\"\",\"image_viewer\":\"lightbox\",\"gallery_skin\":\"flat\",\"thumbnail_bottom_margin\":\"\",\"thumbnail_top_margin\":\"\",\"thumbnail_lr_margin\":\"\",\"list_player\":\"btn\",\"autoplay\":\"1\",\"hide_liststyle\":\"0\",\"artist_length\":\"50\",\"show_only_title\":\"0\",\"category_view\":\"0\",\"hz_view\":\"0\",\"playlist_btn_view\":\"0\",\"cdown_btn_view\":\"0\",\"mdown_btn_view\":\"0\",\"play_btn_view\":\"0\",\"singer_view\":\"0\",\"tag_view\":\"0\",\"tag_show\":\"0\",\"user_starrate\":\"\",\"show_sns\":\"\",\"download_show\":\"0\",\"voted_show\":\"0\",\"blamed_show\":\"0\",\"related_view\":\"0\",\"hide_filesize\":\"0\",\"hide_downcnt\":\"0\",\"tmp_hide_comment\":\"0\",\"tmp_hide_related\":\"0\",\"tmp_hide_extravars\":\"0\",\"hide_comment\":\"0\"}'),
('admin',	'{\"deny_forbid_access\":\"Y\",\"deny_forbid_accesslog\":\"\",\"lock_site\":\"\",\"jsbody_minify\":\"\",\"js_minify\":\"\",\"css_minify\":\"\",\"lock_content\":\"\",\"deny_notmodified\":\"Y\",\"system_lang\":\"ko\"}'),
('notice',	'{\"search_engine\":\"N\",\"search_type\":\"N\",\"top_html\":\"\",\"bottom_html\":\"\",\"image_viewer\":\"fancybox\",\"limit_view\":\"\",\"bd_query\":\"N\",\"gallery_skin\":\"flat\",\"popular_count\":\"20\",\"list_count\":\"20\",\"star_max\":\"10\",\"anony_write\":\"N\",\"anony_comment\":\"N\",\"anony_vote\":\"N\",\"anony_blamed\":\"N\",\"anony_star\":\"N\",\"use_image_watermark\":\"N\",\"watermark_xy_type\":\"bottom\",\"convert_watermark\":\"Y\",\"image_watermark\":\"Exuscms - Watermarks\",\"x_watermark\":\"5\",\"y_watermark\":\"5\",\"r_watermark\":\"\",\"g_watermark\":\"\",\"b_watermark\":\"\",\"thumbnail_width\":\"157\",\"thumbnail_height\":\"157\",\"thumbnail_bottom_margin\":\"15\",\"thumbnail_top_margin\":\"15\",\"thumbnail_lr_margin\":\"15\",\"view_player\":\"\",\"jwplayer_skin\":\"modieus\",\"list_player\":\"btn\",\"autoplay\":\"1\",\"title_length\":\"55\",\"artist_length\":\"14\",\"image_ignore_overlab\":\"\",\"comment_count\":\"10\",\"comment_depth\":\"5\",\"list_view_on\":\"\",\"none_id3\":\"1\",\"best_comment\":\"1\",\"worst_comment\":\"1\",\"tmp_hide_extravars\":\"1\",\"stream_audio\":\"0\",\"download_show\":\"0\",\"cdown_btn_view\":\"0\",\"mdown_btn_view\":\"0\",\"multiorder_option\":\"no,title,nick_name,voted,regdate,readed\",\"hide_liststyle\":\"0\",\"category_view\":\"0\",\"hz_view\":\"0\",\"playlist_btn_view\":\"0\",\"play_btn_view\":\"0\",\"singer\":\"1\",\"tag_view\":\"0\",\"tag_show\":\"0\",\"voted_show\":\"0\",\"blamed_show\":\"0\",\"related_view\":\"0\",\"hide_filesize\":\"0\",\"hide_downcnt\":\"0\",\"tmp_hide_comment\":\"0\",\"tmp_hide_related\":\"0\",\"hide_comment\":\"0\",\"show_only_title\":\"0\",\"singer_view\":\"0\",\"sns_mode\":\"1\",\"show_sns\":\"\",\"user_starrate\":\"\"}');

DROP TABLE IF EXISTS `def_notification`;
CREATE TABLE `def_notification` (
  `target_document_srl` bigint(11) NOT NULL,
  `is_valid` tinyint(1) NOT NULL,
  `srl` int(11) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `target_member_srl` bigint(20) NOT NULL,
  `sender_member_srl` bigint(20) NOT NULL,
  PRIMARY KEY (`srl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `def_origin`;
CREATE TABLE `def_origin` (
  `srl` bigint(11) NOT NULL AUTO_INCREMENT,
  `album` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`srl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO `def_origin` (`srl`, `album`) VALUES
(1,	'None');

DROP TABLE IF EXISTS `def_point`;
CREATE TABLE `def_point` (
  `point` bigint(11) NOT NULL DEFAULT '0',
  `member_srl` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 2019-02-01 04:52:33
