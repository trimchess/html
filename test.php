
<?php
// Liest eine Datei in ein Array. Hier gehen wir über HTTP, um den
// HTML-Quelltext einer URL zu bekommen
$lines = file('http://www.example.com/');

// Durchgehen des Arrays und Anzeigen des HTML-Quelltexts inkl. Zeilennummern
foreach ($lines as $line_num => $line) {
    echo "Line #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br>\n";
}

// Ein weiteres Beispiel: Einlesen einer Webseite in einen String.
// Siehe auch file_get_contents().
$html = implode ('', file ('http://www.example.com/'));

// Benutzung des optionalen flags-Parameters seit PHP 5
$trimmed = file('somefile.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
?>
