<!DOCTYPE html>
<html>
    <head>
        <title>JS shoutbox</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="js/script.js"></script>
    </head>
    <body>
        <div id="container">
            <header>
                <h1>JS shoutbox</h1>
            </header>
            <div id="shouts">
                <ul>
                    <li></li>
                </ul>
            </div>
            <footer>
                <form>
                    <label>Name: </label>
                    <input type="text" id="name">
                    <label>Shout Text</label>
                    <input type="text" id="shout">
                    <input type="submit" id="submit" value="shout">
                </form>
            </footer>
        </div>
    </body>
</html>