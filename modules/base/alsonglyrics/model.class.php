<?php

	if(!defined("__FLOWER__")) exit();

	class alsonglyrics_Model extends alsonglyrics {
		
		function __construct($args) {
			$this->client = new HttpClient('lyrics.alsong.co.kr');
		}

		function getLysicsbyArtist($title, $artist) {
			$string = '<?xml version="1.0" encoding="UTF-8"?>
			<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope" xmlns:SOAP-ENC="http://www.w3.org/2003/05/soap-encoding" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns2="ALSongWebServer/Service1Soap" xmlns:ns1="ALSongWebServer" xmlns:ns3="ALSongWebServer/Service1Soap12"><SOAP-ENV:Body><ns1:GetResembleLyric2><ns1:stQuery><ns1:strTitle>'.$title.'</ns1:strTitle><ns1:strArtistName>'.$artist.'</ns1:strArtistName><ns1:nCurPage>0</ns1:nCurPage></ns1:stQuery></ns1:GetResembleLyric2></SOAP-ENV:Body></SOAP-ENV:Envelope>';
			
			$this->client->post('/alsongwebservice/service1.asmx', $string);
			return $this->client->getContent();
		}
		
		function getLysics($md5) {
			$string = '<?xml version="1.0" encoding="UTF-8"?>
			<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope" xmlns:SOAP-ENC="http://www.w3.org/2003/05/soap-encoding" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns2="ALSongWebServer/Service1Soap" xmlns:ns1="ALSongWebServer" xmlns:ns3="ALSongWebServer/Service1Soap12"><SOAP-ENV:Body><ns1:GetLyric7><ns1:encData>9cb8437c6b424cee5ac1988a55172e7e58beef5e68f58bd6bafb96c778d8b6f5d10d5d272f62340dc20fcad742cbf2e4b53af3d3b28fed5f1eba0580dc2daa43dce90c767c10ab3155d305a93375c4af050be1a9fb353675f146cc10c8cd45d601f2977a51bfe53fa1a978c45293667173cba53bda880de1df6424ec39c090e0</ns1:encData><ns1:stQuery><ns1:strChecksum>'.$md5.'</ns1:strChecksum><ns1:strVersion>3.46</ns1:strVersion><ns1:strMACAddress>c4fbce38fedc26c04ae83ca25296c0efd1e1a19dec57c2c7642cd7a30f914c67</ns1:strMACAddress><ns1:strIPAddress>192.168.0.5</ns1:strIPAddress></ns1:stQuery></ns1:GetLyric7></SOAP-ENV:Body></SOAP-ENV:Envelope>';
			
			$this->client->post('/alsongwebservice/service1.asmx', $string);
			return $this->client->getContent();
		}
		
	}
?>