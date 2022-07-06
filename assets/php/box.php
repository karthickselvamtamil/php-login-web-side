<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box-Animation</title>
    <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="/assets/css/box.css">
</head>
<body>
    <div class="container">
            <div class="box">
                <div class=" box-face box-face-front">Front</div>
                <div class=" box-face box-face-back">Back</div>
                <div class=" box-face box-face-left">Left</div>
                <div class=" box-face box-face-right">Right</div>
                <div class=" box-face box-face-top">Top</div>
                <div class=" box-face box-face-buttom">Buttom</div>
            </div>
    </div>
    <div class="radio-group">
        <label for="box1">
            <input type="radio" name="box-select" id="box1" value="front" checked>Front
        </label>
        <label for="box2">
            <input type="radio" name="box-select" id="box2" value="back">Back
        </label>
        <label for="box3">
            <input type="radio" name="box-select" id="box3" value="left">Left
        </label>
        <label for="box4">
            <input type="radio" name="box-select" id="box4"value="right">right
        <label for="box5">
            <input type="radio" name="box-select" id="box5" value="top">Top
        </label> 
        <label for="box6">
            <input type="radio" name="box-select" id="box6" value="buttom">Buttom
        </label>
    </div>
       <script src="/assets/js/box.js">
       </script>
</body>
</html>