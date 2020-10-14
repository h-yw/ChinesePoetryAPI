CREATE DATABASE  IF NOT EXISTS `shici` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shici`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: shici
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `qu_jin_wanyan`
--

DROP TABLE IF EXISTS `qu_jin_wanyan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qu_jin_wanyan` (
  `id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `authorName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `authorId` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dynasty` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `appreciation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `translation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `intro` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `annotation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qu_jin_wanyan`
--

LOCK TABLES `qu_jin_wanyan` WRITE;
/*!40000 ALTER TABLE `qu_jin_wanyan` DISABLE KEYS */;
INSERT INTO `qu_jin_wanyan` VALUES ('9c41898501e1b550d4a9628ac6d07ea7','川拨棹','王喆','9c41898501e1b550570998c28ad4c723','金',NULL,'[\"三更里，瞥看银蟾圆不缺。吐出一轮光明，满天莹然有别。\",\"向南方也，玉花结。白鹿前来行得窃。便衔他新皎洁。\",\"将去圭峰山头，独自口中啮啮。害风儿，怎生说。\"]',NULL,NULL,NULL,NULL),('9c41898599928c1e082e150193630966','水云游','马钰','9c41898599928c1e3b712de40e095e05','金',NULL,'[\"不住不住。火院当离，深宜别户。害风仙、化我扃门，这修行须做。\",\"腥膻戒尽常餐素。挂体唯麻布。待百朝、锁钥开时，效吾师内顾。\"]',NULL,NULL,NULL,NULL),('9c41898599928c1e30ad68d1a581705b','迎仙客','马钰','9c41898599928c1e3b712de40e095e05','金',NULL,'[\"日中乌，月中兔。走飞子午何曾住。虎随龙，龙随虎。\",\"东西来往，自是明琼路。姹娘歌，婴子舞。玉堂里面金为主。\",\"云为朋，霞为侣。逍遥自在，开阐全真户。\"]',NULL,NULL,NULL,NULL),('9c41898599928c1e6aa1415d43fd4813','白观音','马钰','9c41898599928c1e3b712de40e095e05','金',NULL,'[\"谑号不勤勤，名为养拙人。穿衣慵举臂，吃饭懒抬唇。\",\"面垢但寻水，头蓬倦裹巾。尘劳不复梦，悟彻个中真。\"]',NULL,NULL,NULL,NULL),('9c41898599928c1e6aa1415d7f3c3282','白观音','马钰','9c41898599928c1e3b712de40e095e05','金',NULL,'[\"久视长生法，须当万事忘。守心猿易灭，防意马难狂。\",\"引虎居龙窟，调龙住虎房。两般成一物，跨鹤赴蓬庄。\"]',NULL,NULL,NULL,NULL),('9c41898599928c1ea1e0aa17cf4977d0','憨郭郎','马钰','9c41898599928c1e3b712de40e095e05','金',NULL,'[\"休要强贪名利，休要恋妻男。免轮回，生死苦，做痴憨。\",\"清净自然明道，神气自相参。功成朝玉帝，跨云骖。\"]',NULL,NULL,NULL,NULL),('9c41898599928c1efc013fa711f38a53','斗修行本名斗百花犯正宫','马钰','9c41898599928c1e3b712de40e095e05','金',NULL,'[\"同流宜斗修行，斗把刚强摧挫。斗降心忘，酒色财气人我。\",\"斗不还乡，时时斗悟清贫，逍遥。放慵闲过。斗要成功果。\",\"斗没纤尘，斗进长生真火。斗炼七返九还，灿烂丹颗。\",\"斗起慈悲、常常似斗无争，斗早得携云朵。\"]',NULL,NULL,NULL,NULL),('9c418985d8142b95481f4a70ccb884f6','双调·小圣乐','元好问','9c418985d8142b95160c8865cd758e8f','金','此曲上阕写盛夏纳凉，流连光景的赏心乐事，主写景。看作者铺叙的层次，可说是渐入佳境：作者先用大笔着色，铺写出池塘水阁的一片绿荫，并以「偏趁凉多」四字，轻轻点出夏令。然后，在此万绿丛中，点染上朵朵鲜红如罗的石榴花，令读者顿觉其景照眼欲明，进而，写鸟语蝉鸣。而这鸟儿，专指「乳燕雏莺」，是在春天诞生、此时刚刚孵出的新雏，其声稚嫩娇软而可喜。那蝉儿也是刚出虫蜕，踞高柳而长鸣，「居高声自远，非是藉秋风」（虞世南《蝉》）。在这一片新生命的合唱中，池塘水阁平添生趣。到此，作者妙笔生花，在热烈、喧闹的气氛中特别叙写了一场骤雨。这雨决非煞风景，它是过路的阵雨，既给盛夏带来凉意，又替画面作了润色。骤雨持续时间不长，却刚好「打遍新荷」，引人联想到「琼珠乱撒」的景照，真是「人在画图中」。此乃曲中一段绝妙好辞，无怪「一时传播」（《雨村曲话》卷上）。\n下曲即景抒怀，宣扬浅斟低唱，及时行乐的思想。主调既是低沉的，又是旷达的。在用笔上，作者一洗上阕的丹青色彩，换作白描抒写。「良辰美景」句总括前文，言如此好景，应尽情欣赏，不使虚过。「穷通前定」（命运的好坏乃前世注定）是一种宿命论的说法，作者这样说，旨在「何苦用张罗」，即反对费尽心机的钻营。这种旷达的外表，仍掩饰不住作者内心的苦闷，「命友邀宾玩赏」二句，谓人生乐趣在流连光景、杯酒，这是从六朝以来，封建士大夫在无所作用之际典型的人生态度。因为光阴似箭，日月如梭，会使他们感到心惊，而沉浸在「酩酊」大醉中，庶几可以忘怀一时，取得片刻的麻醉。\n应该指出，下阕表现的思想，即使在封建时代，也是并不高明的。然而在对于自然美的发现和再造上，作者却是做得相当出色和成功。数百年来读者津津乐道的，不是曲中论道之语，而是那「骤雨打新荷」的生机盎然的夏令境界，以及其中流露的浓厚的生活情趣。\n此曲写法与词相近，这是因为在宋元之交，词、曲均称乐府，都是被诸管絃，传于歌筵的，所以早期的词曲分疆并不甚严。《莲子居词话》认为此曲作词调，就是这个缘故。具有词味，也可算是此曲的一个特点。','[\"绿叶阴浓，遍池亭水阁，偏趁凉多。海榴初绽，朵朵簇红罗。乳燕雏莺弄语，对高柳鸣蝉相和。骤雨过，珍珠乱撒，打遍新荷。\",\"人生百年有几，念良辰美景，休放虚过。穷通前定，何用苦张罗。命友邀宾玩赏，对芳尊，浅酌低歌。且酩酊，任他两轮日月，来往如梭。\"]','[\"陶南村《辍耕录》：主人自有沧州趣，遊女乃歌白雪词。\"]','绿叶繁茂一片浓阴，池塘中布满水阁，这里最凉快。石榴花刚开，妖娆艳丽散发扑鼻的香气。老燕携带着小燕，叽叽地说着话，高高的柳枝上有蝉鸣相和。骤雨刹时飞来，像珍珠一般乱洒，打遍池塘里一片片新荷。\n人生能有多长时间，想想那良辰美景，好像刚刚做了一场梦一样。命运的好坏是由前生而定的，何必要自己苦苦操劳呢。邀请宾客朋友玩赏，喝酒唱歌，暂且喝个酩酊大醉，任凭它日月轮转，来往像穿梭。','《骤雨打新荷·绿叶阴浓》是金代散曲作家元好问的作品。此曲上阕写景，绘写夏日园亭的自然景色，辞采鲜明，气氛热烈，清新俊雅，佳句迭出，突出了园中盛夏的特徵；下阕抒怀，直写胸臆，感慨人生苦短和穷通有命，得出了及时行乐的结论，沉郁苍凉又不失旷达。全曲抒写其时其人的典型心曲，发人深思。','[\"骤雨打新荷：曲牌名，此曲调名本为《小圣乐》，或入双调、或入小石调。因为元好问之作「骤雨过，琼珠乱撒，打遍新荷」几句脍炙人口，故人们又称此曲为\\u201C骤雨打新荷\\u201D。\",\"水阁：临水的楼阁。\",\"海榴：即石榴。\",\"红罗：红色的轻软丝织品，此喻石榴花。\",\"乳燕雏莺：雏燕幼莺。乳燕，一作「老燕」。\",\"相和：相互谐调。\",\"撒：撒落。\",\"几：几许，此处指多长时间。\",\"良辰美景：美好的时光和景物。\",\"虚过：白白地度过。\",\"穷通前定：意为失意得意命运的好坏由前生而定。\",\"何用：用反问的语气表示不用、不须。\",\"命友：邀请朋友。\",\"芳尊：美酒。尊，即樽，酒杯。\",\"酩酊：大醉貌。\"]');
/*!40000 ALTER TABLE `qu_jin_wanyan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-14  8:37:28
