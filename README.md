# Jane Loraine's Recipe Book
The website uses a core html file (index.html) to display Jane Loraine's Recipe Book as transcribed by students.
Each year of students will produce new XML to add to the website. The original XML will be processed into HTML using XSLT before being inserted into the website.
The website is styled using a CSS file (index.css). 

## Git pages
Github hosts repositories of code and is used by software developers for version control and sharing their code. The code for the Jane Loraine website is stored in a 
Github repository and access to this has been shared with staff members involved in the project. Github offers a service called Git Pages that enables you to host a website
directly from a repository. This is how the Jane Loraine project is hosted. You can view the website at:  https://atnu.github.io/jane-loraine/ .

## XSLT processing
The XML requires XSLT processing into HTML to be displayed. For the RSE version of the website we used a TEI stylesheet built-in to oXygen Editor, however a different stylesheet could be used in the future. The output of the 
processing should be an HTML file which must be called 'loraine.html'. Thi will contain the new additions and all previous year's work.

## Instructions for updating the website with new student work
Once an updated XML file with new student work is complete and checked, and has been processed using XSLT into HTML:
1. Navigate to the Jane Loraine repository (TODO Address here) in the browser. You will see the list of files and folders in the project.
2. Click on the previous year's HTML file (loraine.html) to open the file and click the rubbish bin symbol top right. Click on the green 'Commit changes' button to delete the file.
3. Click 'Upload files', then 'choose your files' and select the new HTML file from your computer. This must be called 'loraine.html'. If this title is not the same, the website won't work. The file then upload
4. To save the file you need to press the green 'Commit changes' button, leaving any other settings as they are.
5. You should then be able to navigate to the website and see the changes. If you can't see them straight away, try again in a couple of minutes.

## Instructions for adding new page images 
If there are new page images to add
1. Navigate to the Jane Lorain repository
2. Click the 'pages' folder
3. Follow steps 3 and 4 from above.

## Website date
The sample website contained a date in the footer. This has currently been removed as it requires editing of the main HTML page. However, if 
required, this can be added back into the footer section of the 'index.html' file. Instructions for editing a file in a Github repository can be foun d here: https://help.github.com/en/enterprise/2.18/user/managing-files-in-a-repository/editing-files-in-your-repository. 
This is a straightforward change, but if the HTML file is edited incorrectly the website may error, so this is probably best done by someone who has written HTML before.


