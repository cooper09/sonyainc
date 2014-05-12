

		<?php
		include ("config.php");
		
		if (isset($_POST['email']) && isset($_POST['password'])) {
			// The form has been submitted, so let's check the details
			
			$email = cleaninput($_POST['email']); // Clean the email address
			$password = md5($_POST['password']);	 // Password has been MD5 hashed		
			//$password = ($_POST['password']);
			
			echo "Hashed password: ". $password ."<br/><br/>";
				
			$sql = "select * from testTable where email='$email' and password='$password'";
			$result = mysql_query($sql) or die("ERROR: unable to query the database. ".$sql."-->");
			mysql_close();		

			if (mysql_num_rows($result)>0) {
				// We've got a record, so the user has provided good details
				echo "user found<br/>";

	static $http = array (
       100 => "HTTP/1.1 100 Continue",
       101 => "HTTP/1.1 101 Switching Protocols",
       200 => "HTTP/1.1 200 OK",
       201 => "HTTP/1.1 201 Created",
       202 => "HTTP/1.1 202 Accepted",
       203 => "HTTP/1.1 203 Non-Authoritative Information",
       204 => "HTTP/1.1 204 No Content",
       205 => "HTTP/1.1 205 Reset Content",
       206 => "HTTP/1.1 206 Partial Content",
       300 => "HTTP/1.1 300 Multiple Choices",
       301 => "HTTP/1.1 301 Moved Permanently",
       302 => "HTTP/1.1 302 Found",
       303 => "HTTP/1.1 303 See Other",
       304 => "HTTP/1.1 304 Not Modified",
       305 => "HTTP/1.1 305 Use Proxy",
       307 => "HTTP/1.1 307 Temporary Redirect",
       400 => "HTTP/1.1 400 Bad Request",
       401 => "HTTP/1.1 401 Unauthorized",
       402 => "HTTP/1.1 402 Payment Required",
       403 => "HTTP/1.1 403 Forbidden",
       404 => "HTTP/1.1 404 Not Found",
       405 => "HTTP/1.1 405 Method Not Allowed",
       406 => "HTTP/1.1 406 Not Acceptable",
       407 => "HTTP/1.1 407 Proxy Authentication Required",
       408 => "HTTP/1.1 408 Request Time-out",
       409 => "HTTP/1.1 409 Conflict",
       410 => "HTTP/1.1 410 Gone",
       411 => "HTTP/1.1 411 Length Required",
       412 => "HTTP/1.1 412 Precondition Failed",
       413 => "HTTP/1.1 413 Request Entity Too Large",
       414 => "HTTP/1.1 414 Request-URI Too Large",
       415 => "HTTP/1.1 415 Unsupported Media Type",
       416 => "HTTP/1.1 416 Requested range not satisfiable",
       417 => "HTTP/1.1 417 Expectation Failed",
       500 => "HTTP/1.1 500 Internal Server Error",
       501 => "HTTP/1.1 501 Not Implemented",
       502 => "HTTP/1.1 502 Bad Gateway",
       503 => "HTTP/1.1 503 Service Unavailable",
       504 => "HTTP/1.1 504 Gateway Time-out"
   );
   header($http[0]);
   header ("Location: http://sonyainc.net/todo/");

				
			} else {
				// No records returned - so it's an invalid username and password combination
				echo "user not found<br/>";
			}
		
		} else {
		?>	
		<form action="login.php" method="post">
			<label>Email <input type="text" name="email" placeholder="Email address" /></label>
			<label>Password <input type="password" name="password" /></label>
			<label>&nbsp; <input type="submit" value="Log In" /></label>
		</form>
		<?php } ?>
	

<?php

	function cleaninput($inp) { 
		// This function cleans out any bad strings before insert to database
		if(is_array($inp)) 
			return array_map(__METHOD__, $inp); 
	
		if(!empty($inp) && is_string($inp)) { 
			return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $inp); 
		} 
	
		return $inp; 
	} 
	
?>
