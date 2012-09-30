<!doctype html>
<!--[if lt IE 7]> <html class="ie6 oldie"> <![endif]-->
<!--[if IE 7]>    <html class="ie7 oldie"> <![endif]-->
<!--[if IE 8]>    <html class="ie8 oldie"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="">
<!--<![endif]-->
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Generic HTML5 Mobile App</title>
<link href="boilerplate.css" rel="stylesheet" type="text/css">
<link href="css/fluid.css" rel="stylesheet" type="text/css">
<!-- 
To learn more about the conditional comments around the html tags at the top of the file:
paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/

Do the following if you're using your customized build of modernizr (http://www.modernizr.com/):
* insert the link to your js here
* remove the link below to the html5shiv
* add the "no-js" class to the html tags at the top
* you can also remove the link to respond.min.js if you included the MQ Polyfill in your modernizr build 
-->
<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<script src="respond.min.js"></script>
</head>
<body>

<body>
		<?php
		
		include ("config.php");
		
		if (isset($_POST['email']) && isset($_POST['password'])) {
			// The form has been submitted, so let's check the details
			
			$email = cleaninput($_POST['email']); // Clean the email address
			$password = md5($_POST['password']);	 // Password has been MD5 hashed		
			//$password = ($_POST['password']);
			
			echo "Hashed password: ". $password ."<br/><br/>";
				
			$sql = "select * from testTBL where field3='$email' and field4='$password'";
			$result = mysql_query($sql) or die("ERROR: unable to query the database. <!--".$sql."-->");
			mysql_close();		

			if (mysql_num_rows($result)>0) {
				// We've got a record, so the user has provided good details
				echo "user found<br/>";
				
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
	</body>
</html>

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
