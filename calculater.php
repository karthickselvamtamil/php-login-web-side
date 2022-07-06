<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculater</title>
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="calculater.css">
</head>
<body>

     <div class="container">
        <div class="calculater">
            <marquee scrollamount="" direction="left" width="280px">
                Welcome-I am Calculater</marquee>
            <input type="text" placeholder="0" id="output-screen">
            <button onclick="Clear()">C</button>
            <button onclick="del()">Del</button>
            <button onclick="display('/')">/</button>
            <button onclick="display('%')">%</button>
            <button onclick="display('7')">7</button>
            <button onclick="display('8')">8</button>
            <button onclick="display('9')">9</button>
            <button onclick="display('*')">*</button>
            <button onclick="display('4')">4</button>
            <button onclick="display('5')">5</button>
            <button onclick="display('6')">6</button>
            <button onclick="display('-')">-</button>
            <button onclick="display('1')">1</button>
            <button onclick="display('2')">2</button>
            <button onclick="display('3')">3</button>
            <button onclick="display('+')">+</button>
            <button onclick="display('.')">.</button>
            <button onclick="display('0')">0</button>
            <button onclick="calculate()" class="equal">=</button>
        </div>
    </div>
    <script src="calculater.js"></script>
</body>

</html>