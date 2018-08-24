09/08/2018
####gitHub: [gitHub/FDMcreative](https://github.com/FDMcreative/)
####website: [FDMcreative.com](http://www.fdmcreative.com) 
####email: [federico.delmonte@gmail.com](federico.delmonte@gmail.com)

---

# Instagram Clone
### *Let's try to recreate Instagram.*

-

This is an instagram clone (with some modification to accomodate my needs and the functionalities I wanted to implement).

The following functionalities are present:

- register with a profile image uploaded on AWS
- login
- login with GitHub oauth
- logout
- user's profile page displaying different profile image according to the type of login (register/oauth)
- homepage with a random image from the photos' database
- uploading user's images on AWS
- edit and delete image for the user who created them a page with all the photos uploaded
- the images open in a modal
- the images have a star rating given by whom uploaded them
- possibility to comment the images
- edit and delete comments for the user who created them

-

Difficulties:

- Setting up AWS public bucket (policy) to store the uploaded images.
- Setting up the GitHub oauth (to verify if id and secret need to be changed for every new app).
- Setting up all the secure routes for users and their comments.
- Implementing modal for the images.
- Selecting and displaying a random image on the homepage.
- Recreating an instagram-clone user experience.

Not working:

- ```<%= photo.createdBy.username %>``` doesn't show the username of whom uploaded the photo.
- Filter images by username.