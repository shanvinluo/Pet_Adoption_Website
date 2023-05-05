# Pet_Adoption_Website


This repository contains an Adopt A-Cat/Dog website. In this project, I used HTML5, CSS, Javascript and PHP to build the basic structure and some initial content of the website.

## Components
The structure of the website can be broken down into four components:

### Header
This component appears at the top of all pages on the website. It includes the name of the pet adoption service StableHeroes. Clicking on the logo/picture should take you to the home page. There is also an element that displays the current date and time and it updates in real time. 

### Side Menu
This component appears on the top of all pages. It includes the following contextual navigation links:

*Home page named index.php
*Create Account
*Find a dog/cat
*Dog Care
*Cat Care
*Have a pet to give away
*Contact Us

### Content Area
This component is the main area where the content of the website is displayed, there is a different and customized one for each page. This is where forms are filled out and any significant text appear.

### Footer
This component appears at the bottom of all pages on the website. It includes a link to a Privacy/Disclaimer Statement. It displays a message promising users that their information will not be sold or misused and protects the website builder from any incorrect information posted by a pet owner and so on.

## Pages
The following is a description of each page which will appear in the Content area of the website, as a result of clicking on one of the choices listed in the side menu.

### Home Page
This page is a welcome page and possesses a brief description of what the site is about. It also includes links to useful and relevant websites concerning caring about pets. 

### Create Account
When a user clicks on this menu option, a login creation page loads into the content area with text fields for a username and one for a password as well as a description of the allowed formats for usernames and passwords. This page uses PHP and js to create the functions of the Create Account page. When an account is created, the username and passwords of the new accounts are updated in a txt file. 

### Find a Dog/Cat
This link loads a form. To search, the user will need to complete the form. After submitting the form, matching options will be displayed. 

### Have a Pet to Give Away
In order to create a new entry for a pet, the user must first log in. When the user clicks on this menu option, they will be prompted to log in. The client-side code will ensure that both the username and password entered meet the criteria outlined in the "Create an account" section.
After the user clicks the Submit button, the server will check the login file to confirm that the login and password pair exists. If the pair is registered, a new session is started, and the form, which was already created in version 1, is loaded into the content area. If the login and password pair is not registered, a message will be sent back to the browser indicating that the login failed. Users can try to log in as many times as they wish.
Once the user has successfully logged in, they can fill out the form and submit it. When a form is submitted, the information is added to the available pet information file. The first entry in the file for each pet must be an integer, which serves as a counter and a unique ID for that entry, as well as the username of the pet owner, followed by the information from the form. Each entry is delimited by a colon (:) and each pet record is in one line.

### Catcare
Displays a page with information and links that shows information about how to take care of cats. 

### Dogcare
Displays a page with information and links that shows information about how to take care of dogs.

### Contact us:
Page with information about how to contact the company. 
