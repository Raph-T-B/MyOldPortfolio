<?php 
	$etat="Enable";

	function Disable()
      {
		global $etat;
        $etat = "Disable";
      }
	function Enable()
      {
		global $etat;
        $etat = "Enable";
      }
	
	if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['DisableBtn'])) {
		Disable();
	}

	if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['EnableBtn'])) {
		Enable();
	}
?>

<!Doctype html>
<html lang="fr">
	<head>
		<title>Minecraft-Server</title>
		<meta charset="UTF-8"> 
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
	</head>
	<body class="w3-content">
		<h1 class="w3-centered">OPEN/CLOSE connection port</h1>
		<form method="post">
			<button type="submit" name="EnableBtn" >Enable</button>
		</form>
		<form method="post">
			<button type="submit" name="DisableBtn">Disable</button>
		</form>
		<h2>Etat d'ouverture des ports : <?= $etat ?></h2>
	</body>

</html>
