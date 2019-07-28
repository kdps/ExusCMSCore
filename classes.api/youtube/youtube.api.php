<?php

class youtubeAPI {
	
	private $APIKey;
	
	function __construct($apiKey) {
		$this->APIKey = $apiKey;
	}
	
	function setAPIKey($APIKey) {
		$this->APIKey = $APIKey;
	}
	
	function getChannelSubscriberCount() {
		$url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='.$channel_id.'&fields=items/statistics/subscriberCount&key='.$this->APIKey;
		$response = $this->getJSON($url);
		
		if ($response) {
			return $response['items'][0]['statistics']['subscriberCount'];
		}
		
		return new stdClass();
	}
	
	function getChannelVideos($channelID, $maxResults) {
		if ($maxResults > 50) {
			$maxResults = 50;
		}
		
		$url = 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId='.$channelID.'&maxResults='.$maxResults.'&key='.$this->APIKey;
		$response = $this->getJSON($url);
		return $response;
	}
	
	function getJSON($url) {
		$response = file_get_contents($url);
		$response = json_decode($response);
		return $response;
	}
	
	function getVideoInfo($videoUrl) {
		$url = "http://www.youtube.com/oembed?url=".$videoUrl."&format=json";
		$curl = curl_init($url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		$curlData = curl_exec($curl);
		curl_close($curl);
		$data = json_decode($curlData, true);
		
		return $data;
	}
	
	
	function getChannelStatics($channel_id) {
		$url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" .$channel_id."&key=".$this->APIKey;
		$response = $this->getJSON($url);
		$data = $response->items;
		
		if ($data) {
			return $data[0]->statistics;
		}
		
		return new stdClass();
	}
	
	function getChannelVideoCounts($channel_id, $data):int {
		if (!$data) {
			$data = $this->getChannelStatics($channel_id);
		}
		
		return isset($data->videoCount) ? $data->videoCount : 0;
	}
	
	function getChannelSubscriberCounts($channel_id, $data):int {
		if (!$data) {
			$data = $this->getChannelStatics($channel_id);
		}
		
		return isset($data->subscriberCount) ? $data->subscriberCount : 0;
	}
	
	function getChannelViewCounts($channel_id, $data):int {
		if (!$data) {
			$data = $this->getChannelStatics($channel_id);
		}
		
		return isset($data->viewCount) ? $data->viewCount : 0;
	}
	
	function getChannelLikeCounts($channel_id, $data):int {
		if (!$data) {
			$data = $this->getChannelStatics($channel_id);
		}
		
		if (!isset($data)) {
			$data = new stdClass();
		}
		
		return isset($data->likeCount) ? $data->likeCount : 0;
	}
	
	function getChannelDislikeCounts($channel_id, $data):int {
		if (!$data) {
			$data = $this->getChannelStatics($channel_id);
		}
		
		return isset($data->dislikeCount) ? $data->dislikeCount : 0;
	}
	
	function getChannelFavoriteCounts($channel_id, $data):int {
		if (!$data) {
			$data = $this->getChannelStatics($channel_id);
		}
		
		return isset($data->favoriteCount) ? $data->favoriteCount : 0;
	}
	
	function getChannelCommentCounts($channel_id, $data):int {
		if (!$data) {
			$data = $this->getChannelStatics($channel_id);
		}
		
		return isset($data->commentCount) ? $data->commentCount : 0;
	}
	
	function getVideoStatics($channel_id) {
		$url = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=".$channel_id."&key=".$this->APIKey;
		$response = $this->getJSON($url);
		$data = $response->items;
		$data = array_shift($data);
		
		if ($data) {
			return $data->statistics;
		}
		
		return new stdClass();
	}
	
	function getVideoViewCounts($videoID):int {
		$data = $this->getVideoStatics($videoID);
		
		return isset($data['viewCount']) ? $data['viewCount'] : 0;
	}
	
	function getVideoLikeCounts($videoID):int {
		$data = $this->getVideoStatics($videoID);
		
		return isset($data['likeCount']) ? $data['likeCount'] : 0;
	}
	
	function getVideoDislikeCounts($videoID):int {
		$data = $this->getVideoStatics($videoID);
		
		return isset($data['dislikeCount']) ? $data['dislikeCount'] : 0;
	}
	
	function getVideoFavoriteCounts($videoID):int {
		$data = $this->getVideoStatics($videoID);
		
		return isset($data['favoriteCount']) ? $data['favoriteCount'] : 0;
	}
	
	function getVideoCommentCounts($videoID):int {
		$data = $this->getVideoStatics($videoID);
		
		return isset($data['commentCount']) ? $data['commentCount'] : 0;
	}
	
	
}