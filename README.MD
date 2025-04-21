# THE GAME

![Banner](/public/images/banner1.jpg)

Available online (free version = poor quality-refresh when needed!)
https://the-game-xh1r.onrender.com

##### Intro
This is a password strength meter gamification called Password Pet. It is designed to help and educate end users on passwords.

Instead of a traditional password strength meter, this is designed as a game to help users better understand what makes a password great and have some fun while doing it!

##### Description
_A detailed description of what the Password Pet application does - and how it may help end users_

* Intro Page
    * Shows description of the password pet platform (audio + background video for a gamification feeling)
    * Audio is available - but due to browser safety measures, it needs to be pressed in order to play (bottom left corner)
    * Press the continue button in order to proceed.

* Index Page
    * _Dragon_ For now only one dragon egg is available (hopefully this will soon be edited)
    * _Level_ level box which indicated the level of the password (1-5) (in the middle to the right)
    * _Password Pet_ Img of egg chosen - this will grow in size based on how strong the password the user chooses.
    * _Hashed password_ Need to be implemented, but will show a string of the hashed password 
    * _Help box_ Left top is the Password Guidance help box to guide users to a better password
    * _check box_ in the middle right next to the level are several checkboxes, indicating what you are missing in order to receive full points.
    * _Password box_ where users submit a username and the password of their choosing.

* Guidance Page
    * Will explain in more detail why the necessary steps are needed to take for acheaving ultimate password strength


* About Page
    * An about page where it describes further the purpose of the password pet and why it was designed/created.

* Test Page
    * Test your ability to remember the password you placed in!
    * If successful: you may enter the next stage
    * If unsuccessful: You have two options 
        1. click a button to go to guidance and learn more
        2. click the button to try again and go back to the index page.

* Final_stage Page
    * Here you may inspect your password pet further, and see how much speed, strength, stamina, and lifespan.
    * A button on the right corner indicates to test your password pet in the wild - where it will direct you to the final_boss page
    * If your password is below level 3 a toast notification will appear in the middle of the screen telling you your password is too weak to continue and urges you to create a new one.
    
* Final_Boss Page
    * on click - Test your password pet in the wild - this will check the password up against an online password bank, testing the password in brute force attack. using the Have I Been Pwned (HIBP) Passwords API.

* Safe/Pwned Page
    * Safe Page: if you got here: congratulations! You made it through the brute force attack!
        - this page will show a video w/sound of a dragon and an alert message with the good news.
    * Pwned Page: If you got here: Game over! Please try again!
        - this page shows a hacker w/sound and an alert message of you've been pawned.

##### How it works
* Start:
    * The game randomly picks an egg, and watch it grow into a mature strong dragon for better protection of your password.
    * The better the password the better the dragon! - use the guidance to help you achieve ultimate strength and Level up on your dragon.
    * You must remember your password - keep it easy to remember for the last check!
    * Life span - the higher the level the longer the life span of your dragon! - if life goes out you will need to feed your dragon with a new password - to stay strong and secure.

##### Hidden gems
* Ultimate power is achieved through extra password measures you take
    * 32 characters long - will grant you extra magic powers (need to add!)

##### dependencies
    bcryptjs: ^3.0.2,
    body-parser: ^1.20.3,
    cookie-parser: ~1.4.3,
    cors: ^2.8.5,
    debug: ~2.6.0,
    ejs: ^3.1.10,
    express: ^4.21.2,
    express-session: ^1.18.1,
    morgan: ^1.10.0,
    serve-favicon: ^2.5.0

## Contributing
This is a school assignment for studio2 in cyber security
ME + my group :) :butterfly: 
**Signed: Janne Marie Tvetene**