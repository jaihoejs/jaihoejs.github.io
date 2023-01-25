<!DOCTYPE html>
<html lang="en">
<head>
    <title>Jaihoe Tutorial</title>
	
	<link rel="stylesheet" href="lib/codemirror.css">
	<link rel="stylesheet" href="theme/monokai.css">
	<script src="lib/codemirror.js"></script>
	
	<script type="text/javascript" src="mode/xml/xml.js"></script>
	<script type="text/javascript" src="mode/css/css.js"></script>
	<script type="text/javascript" src="mode/javascript/javascript.js"></script>

</head>

<body>

  <textarea id="htmlCode"></textarea>
  <script type="text/javascript">
		var editor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
			mode: "text/html",
			theme: "monokai",
			lineNumbers: true
		});
		
		
  </script>

</body> 

</html>