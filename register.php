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
	<?php

		if (isset($_POST['firstname']) && isset($_POST['password'])) {
			// The form has been submitted, so let's create the account in the database
			
			$firstname = $_POST['firstname'];
			$surname = $_POST['surname'];
			$email = $_POST['email'];
			$password =  md5($_POST['password']);			
		
			echo "First name retrieved: " . $firstname ."<br/>";
			
		$dbh=mysql_connect ("localhost", "root","root") or die('Cannot connect to the database because: ' . mysql_error());
mysql_select_db ("testDB"); 
		
		$insert_sql = "INSERT INTO testTable (first, last, email, password ) VALUES( '$firstname','$surname','$email', '$password')";
		
	 $result = mysql_query($insert_sql) or die('sql error: ' .mysql_error());
	 
	 mysql_close($dbh);	

	 echo("results: " . $result );		
		
		} else {
		?>	


<div class="gridContainer clearfix">
  <div id="LayoutDiv1">
    <p>Generic Mobile/Responsive App - HTML5</p>
    <p>&nbsp;</p>
  </div>
  <div id="LayoutDiv2">
    
    <form action="register.php" method="post">
			<label>Firstname <input type="text" name="firstname" placeholder="First name" /><span>Enter your first name</span></label><br/>
			<label>Surname <input type="text" name="surname" placeholder="Last name" /><span>Enter your family name</span></label><br/>
			<label>Email <input type="text" name="email" placeholder="Email address" /><span>Enter valid address</span></label><br/>
			<label>Password <input type="password" name="password" /><span>Minimum 6 characters</span></label><br/>
			<label>&nbsp; <input type="submit" value="Register" /></label>
		</form>
	<?php } ?>
    <p>&nbsp;</p>
  </div>
</div>
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

</body>
</html>
