<?php
print_r ("<h1> These are HTTP HEADER Fields your WebBrowser sent </h1><p>-----------------------------------------------------------</p>");

//print_r ("<p>Host: ".getallheaders()['Host']."</p>");
//print_r ("<p>Connection: ".getallheaders()['Connection']."</p>");
//print_r ("<p>Cache_Control: ".getallheaders()['Cache-Control']."</p>");
//print_r ("<p>User_Agent: ".getallheaderls()['User-Agent']."</p>");
//print_r ("<p>Upgrade-Insecure-Requests: ".getallheaders()['Upgrade-Insecure-Requests']."</p>");
echo 'Current PHP version: ' . phpversion();
foreach (getallheaders() as $name => $value) {
    echo "$name: $value<br />";
	
	
}
echo $_SERVER['HTTP_DNT'];
//if (getallheaders()['DNT'] = 1){
//	print_r ("<h1><p>DNT: ".getallheaders()['DNT']."</p></h1>");
//}else{
//	print_r ("<p>DNT: ".getallheaders()['DNT']."</p>");
//}
//print_r ("<p>Accept-Encoding: ".getallheaders()['Accept-Encoding']."</p>");
//print_r ("<p>Accept-Language: ".getallheaders()['Accept-Language']."</p>");
//if (getallheaders()['DNT'] = 1){
//	print_r ("<p>-----------------------------------------------------------</p><h1> DNT seems to be ON </h1>");
//}else{
//	print_r ("<p>-----------------------------------------------------------</p><h1> DNT seems to be OFF </h1>");
//}
?>