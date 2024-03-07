<?php
$url = "http://google.com";
$html = file_get_contents($url);
if($html !== false){
    echo $html;
} else {
    echo "Unable to fetch HTML from the URL.";
}
?>