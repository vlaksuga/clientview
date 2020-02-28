<?php
error_reporting(-1);
ini_set('display_errors', 1);

require './aws/aws-autoloader.php';
use Aws\Exception\AwsException;
use Aws\MediaLive;


$credentials = new Aws\Credentials\Credentials('AKIAZO5VA5G3JGFTX5EA', 'ZkQWo9Bik7sNzpSgcgN47v5+0fNK6nUccp+p9a15');


$client = new MediaLive\MediaLiveClient(array(
    'region'      => 'ap-northeast-2',
    'version'     => '2017-10-14',
    'credentials' => $credentials
));




if($_GET["cmd"]=="STATE"){

	$result = $client->describeChannel([
		'ChannelId' => '5380007'
	]);

	echo $_GET["callback"] ."(\"".$result["State"]."\")";
}

if($_GET["cmd"]=="STOP"){


	$result = $client->stopChannel([
		'ChannelId' => '5380007'
	]);
	echo $_GET["callback"] ."(\"".$result["State"]."\")";
}


if($_GET["cmd"]=="START"){


	$result = $client->startChannel([
		'ChannelId' => '5380007'
	]);

	echo $_GET["callback"] ."(\"".$result["State"]."\")";
}



