<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><!--bootstrap-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"><!--Googlefonts-->
    <link rel="stylesheet" href="css/style.css">

    <title>Document</title>
</head>
<body>
    <p>HELo</p>
    <?php
    include("attila.php");
    A();
    ?>
    <p></p>
    <div class="container-fluid m-0 bg-dark ">
        <div class="row">
            <div class=" col-3">
                <div class="sidebar row  d-flex text-center align-content-center ">
                    <div class="my-2 link ">
                        <a href="#"><ion-icon name="home-outline"></ion-icon> Home </a>
                    </div>
                    <div class="my-2 link">
                        <a href=""><ion-icon name="finger-print-outline"></ion-icon> About be</a>
                    </div>
                    <div class="my-2 link">
                        <a href=""><ion-icon name="code-download-outline"></ion-icon> Project</a>
                    </div>
                    <div class="my-2 link">
                        <a href=""><ion-icon name="chatbubbles-outline"></ion-icon> Contact</a>
                    </div>
                    <div class="my-2 link">
                        <a href=""><ion-icon name="settings-outline"></ion-icon> Service
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-5 d-flex justify-content-center  ">
                <div class="row align-items-center">
                    <div class="content">
                        <h1>HEllo my freind</h1>
                        <h3>I'am a .....</h3>
                        <p>Thank you for visiting my website, I hope I can provide you with a lot of useful information</p> 
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-center  ">
                <div class="row align-items-center">
                    <div class="img">
                        <img src="" alt="">                  
                    </div>
                </div>
            </div>
        </div>
    </div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>
</html>