# Jane Loraine's Recipe Book
This website has been created by the RSE team to display Jane Loraine's Recipe Book as transcribed by students.
Each academic year students will transcribe more of the book and their work will be added to the website. The students will produce XML to be added to the previous year's XML file.
The XML will be processed into HTML using XSLT before being inserted into the website. The website is styled using a CSS file (index.css). No additional frameworks have been used to make the styling as accessible as possible.

## GitHub pages
[GitHub](https://github.com/) hosts repositories (folders) of code and is used by software developers for version control and sharing their code. The code for the Jane Loraine website is stored in a 
[GitHub repository](https://github.com/ATNU/jane-loraine) and access to this has been shared with staff members involved in the project. Github offers a service called [GitHub Pages](https://pages.github.com/) that enables you to host a website
directly from a repository. This is how the Jane Loraine project is hosted. You can view the website at:  [https://atnu.github.io/jane-loraine/] .

## XSLT processing
The XML requires XSLT processing into HTML recognisable tags to be displayed. The developers used a TEI stylesheet built in to oXygen Editor. However a different stylesheet could be used in the future. The output of the 
processing should be an HTML file which must be called 'loraine.html'. This will contain the new additions and all previous year's work.

## Instructions for updating the website with new student work
Once an updated XML file with new student work is complete and checked, and has been processed using XSLT into HTML:
1. Navigate to the Jane Loraine repository ([https://github.com/ATNU/jane-loraine]) in a browser. You will see the list of files and folders in the project.
2. Click on the previous year's HTML file ('loraine.html') to open the file and click the rubbish bin symbol top right. Click on the green 'Commit changes' button to delete the file.
3. Click 'Upload files', then 'choose your files' and select the new HTML file from your computer. This must be called 'loraine.html'. If this title is not the same, the website won't work. You'll see a progress bar appear (depending on how fast your internet upload speed is).
4. Once uploaded, to save the changes you;ve made to the repository you need to press the green 'Commit changes' button, leaving any other settings as they are.
5. You should then be able to navigate to the website and see the changes. If you can't see them straight away, try again in a couple of minutes, it can take time to update.

## Instructions for adding new page images 
If there are new page images to add:
1. Navigate to the [Jane Loraine repository](https://github.com/ATNU/jane-loraine)
2. Click the 'pages' folder
3. Follow steps 3 and 4 from above.

## Website date
The sample website contained a date in the footer. This has currently been removed as it requires editing of the main HTML page to keep up to date. However, if 
required, this can be added back into the footer section of the 'index.html' file. Instructions for editing a file in a Github repository can be found here: [https://help.github.com/en/enterprise/2.18/user/managing-files-in-a-repository/editing-files-in-your-repository]. 
This is a straightforward change, but if the HTML file is edited incorrectly the website may error, so this is probably best done by someone who has written HTML before.

## Developers
Kate Court  
Fiona Galston
