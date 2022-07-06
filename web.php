<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joker-Boy</title>
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="web.css">
</head>

<body>
    <!-- ========== Start header ========== -->
    <header class="header1">💻Web Developing👨🏻</header>
    <span id="info"></span>
    <header class="header">
        <div>
            <h2><span class="font-color font-anim">WebDesign</span><span class="font-tamil   color-anim"> ( தமிழ் )</span>
            </h2>
        </div>
        <div>
            <ul class="menu">
                <li class="item"><a href="#" class="active">home</a></li>
                <li class="item">
                    <a href="calculater.php" target="_blank">calculater</a>
                </li>
                <li class="item"><a href="cube.php" target="_blank">cube</a></li>
                <li class="item "><a href="box.php" target="_blank">Box</a></li>
                <li class="item "><a href="slide.php" target="_blank">>slide</a></li>
                <li class=><a href="#" class="btn btn-primary">contact-us</a></li>
            </ul>
        </div>

        </div>
    </header>
    <!-- ========== End header ========== -->
    <!-- ========== Start Main ========== -->
    <main id="main">
        <div class="input-container">
            <input type="search" placeholder=" 💖I like Coding" class="input-lang" id="input-lg" autofocus required>
            <button type="button" id="input-btn" class="input-button">Save</button>
        </div>

        <ul class="lang-container" id="lang-container">
            <li class="lang-list">
                <div class="li-lang"><span>⁕ </span>HTML-5</div>
                <span class="li-delete" onclick="removeValue(event)">✖</span>
            </li>
            <li class="lang-list">
                <div class="li-lang"><span>⁕ </span>CSS-3</div>
                <span class="li-delete" onclick="removeValue(event)">✖</span>
            </li>
            <li class="lang-list">
                <div class="li-lang"><span>⁕ </span>JavaScript</div>
                <span class="li-delete" onclick="removeValue(event)">✖</span>
            </li>
        </ul>
    </main>
    <!-- ========== End Main ========== -->
    <script src="web.js"></script>

</body>

</html>