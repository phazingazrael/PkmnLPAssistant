# OBS CLR Browser Pokemon Let's Play Assistant

I created this assistant as something for myself to use in an upcoming Let's Play series, but after seeing it's usefulness I decided to offer it to the community.

Currently it only supports up to 5th generation pokemon games, the reason behind this was a lack of consistant 6th and now 7th generation sprites. If I am able to locate more consistent sprites or someone can point me in the right direction I will happily update its functionality.

Imagery for the pokemon party slots are interchangeable, However to keep 'sizing' for my current layout I reccomend keeping the image dimensions at 119px x 139px.

# Installing
## Prerequisites.
You MUST have OBS installed, I personally reccomend OBS Studio.  
You MUST obtain a CLR Browser Plugin for OBS  
-- If you already have OBS installed, try to add a BrowserSource to any scene.  
-- If successful you have a CLR Browser Plugin already.  
-- If not successful you need to get a CLR Browser Plugin.  

## Method 1. Locally hosting the files.

1. Download and install an AMP (Apache, MySql, PHP) stack of your choice, I recommend xampp as installing and using it are very easy and simple.  
--  A list of alternatives and various types of AMP Stacks can be found [here](https://en.wikipedia.org/wiki/List_of_Apache%E2%80%93MySQL%E2%80%93PHP_packages)  
2. Download the assistant.  
3. Go to your AMP stack's install folder (see step 1).
-- My xampp stack installed at C:\xampp by default.  
4. Extract or Copy the Assistant files to your web documents folder.  
-- Dependant on how you downloaded the Assistant, Extract refers to zip downloaded from repo page, Copy refers to cloning the repo through another software. I suspect the zip download will be the majority case.
-- xampp's folder for web files is named 'htdocs', If you aren't certain where these files should go the website from which you got your AMP stack should have it listed on their site under support/FAQ/help or a similar area.
-- If there are any pre existing files inside the directory I reccomend creating a new directory, I named mine 'xampp_backup', to prevent any issues or problems from occurring.  
4. Open your AMP Stack software and start the services to give full webpage handling.
-- xampp will only need apache started to run this assistant, I cannot vouch for other software however.
-- This step will need to be done each time you use the assistant, otherwise you'll get an error page.  
5. Open up a web browser such as Google Chrome, Mozilla Firefox, or Apple's Safari Browser to name a few.  
6. Inside your web browser go to localhost and wait for the page to load.  
7. Once loaded Follow the directions it shows to add the source to your OBS Scene.  
8. Profit!

## Method 2. Remotely hosting the files.

 1. Web hosting.
 -- Find Yourself a web hosting solution. I reccomend [000Webhost](https://www.000webhost.com/971860.html) as they are a free option.
 -- If you already have a web hosting solution, Great! Continue on.  
 2. Write down, put it into a text document, etc. your website's URL (ex: myUsername.Host.com)   
 3. Using either the host's solution or an FTP client upload your files to a designated directory.
 -- Could be your base directory (the main page for your site)
 -- Could be a new directory (such as lpAssistant)  
 4. Go to your site in a new browser window or tab.
 -- If you created a special directory for the files add it to the end of your websites url (ex: myUsername.Host.com/lpAssistant )  
 5. Once loaded Follow the directions it shows to add the source to your OBS Scene
-- Under the source options I reccomend setting the FPS section to "1" to properly allow automatic updates to the display.  
 6. Profit!

# Using the Assistant
Once you've gotten the Assistant installed and running all you'll need to do is click on a drop down menu and find the desired Pokemon. For simplicity I made the drop down able to be searched through, after all there are almost 1,000 Pokemon these days.

After selecting your pokemon the display will automatically update.

If you wish to reset the team that you currently have there is a button near the bottom of the controls which will clear any team information you've set.

# Future updates to the Assistant
 Currently I have a few updates that I will be doing to the Assistant over time, some minor changes, some additions to it as well.

The first update I'll likely be doing is a code cleanup; Currently the code is a mess, and very non W3C compliant. This is the highest priority for me currently, in all likelihood I will just rewrite everything now that I've gotten functionality completed.

Additions that I plan on including are as follows;
1. Currently the team is a static file, meaning you only have one choice of a team, I wish to make it dynamic so that a user may have multiple team files saved and easily load them in to make changes as a Lets Play progresses.
2. I'm looking into how difficult It'll be to set up a custom theme system, one where you'll create it yourself or have someone create it for you, to switch from my 'minimal' theme to one of your choosing. This addition will likely tie into the complete rewrite that I have planned, it makes the most sense to me.

# Contact
If you wish to contact me about this project please do one of the following;  
Contact me through the email listed on my profile page.  
Contact me on Discord @PhazingAzrael.



# Credits
The party slots are currently using an image from [the-godlings-rapture](http://http://the-godlings-rapture.deviantart.com/) over on Deviantart.
-- [Direct Link](http://the-godlings-rapture.deviantart.com/art/Fakedex-Template-FREE-TO-USE-313103826) to their template that I used. (I chose to use the 'normal' template for this project as a 'minimal' theme.)

I obtained the Pokemon Sprites from [Dragonfly Cave](https://www.Dragonflycave.com)

Pokemon Typing images were sourced from [Veekun](https://veekun.com/)

Javascript Libraries used Include;
[jQuery](https://jquery.com/)  
[jQuery UI](https://jqueryui.com/)
[Select2](https://select2.github.io/)
