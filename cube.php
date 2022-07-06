<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cube-Animation</title>
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="cube.css">
</head>

<body>
    <h2>Cube Animation</h2>
    <div class="container">
        <div class="cube">
            <div class="cube-face cube-face-front">Front</div>
            <div class="cube-face cube-face-back">Back</div>
            <div class="cube-face cube-face-left">Left</div>
            <div class="cube-face cube-face-right">Right</div>
            <div class="cube-face cube-face-top">Top</div>
            <div class="cube-face cube-face-buttom">Buttom</div>
        </div>
    </div>
    <div class="readio-Group">
        <label for="cube-selfradio1">
            <input type="radio" name="rotate" id="cube-selfradio1" value="front" checked>Front
            <label for="cube-selfradio2">
                <input type="radio" name="rotate" id="cube-selfradio2" value="back">Back
                <label for="cube-selfradio3">
                    <input type="radio" name="rotate" id="cube-selfradio3" value="left">Left
                    <label for="cube-selfradio4">
                        <input type="radio" name="rotate" id="cube-selfradio4" value="right">Right
                        <label for="cube-selfradio5">
                            <input type="radio" name="rotate" id="cube-selfradio5" value="top">Top
                            <label for="cube-selfradio6">
                                <input type="radio" name="rotate" id="cube-selfradio6" value="buttom">Buttom
    </div>

    <script src="cube.js"></script>
</body>

</html>