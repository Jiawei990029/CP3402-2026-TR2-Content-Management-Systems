<?php

include "header.php";

// Echo
echo "<h2>Welcome to StudySphere!</h2>";
echo "<p>This page demonstrates basic PHP programming.</p>";

// If / Else
$score = 80;
echo "<h3>If / Else Example</h3>";
if ($score >= 50) {
    echo "<p>Your score is $score. Result: Pass</p>";
} else {
    echo "<p>Your score is $score. Result: Fail</p>";
}

// For Loop
echo "<h3>For Loop</h3>";
for ($i = 1; $i <= 5; $i++) {
    echo "Week $i completed.<br>";
}

// While Loop
echo "<h3>While Loop</h3>";
$count = 1;
while ($count <= 3) {
    echo "Current task: $count<br>";
    $count++;
}

// Foreach Loop
echo "<h3>Foreach Loop</h3>";
$subjects = array("PHP","HTML","CSS","WordPress");
foreach ($subjects as $subject) {
    echo $subject . "<br>";
}

// Function
echo "<h3>Function Example</h3>";
function greet($name)
{
    return "Welcome, " . $name . "!";
}
echo greet("StudySphere User");

include "footer.php";

?>