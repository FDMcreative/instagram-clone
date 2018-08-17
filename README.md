09/08/2018
####gitHub: [gitHub/FDMcreative](https://github.com/FDMcreative/)
####website: [FDMcreative.com](http://www.fdmcreative.com) 
####email: [federico.delmonte@gmail.com](federico.delmonte@gmail.com)

---

# Instagram Clone
### *Let's try to recreate Instagram.*

-

This is an instagram clone (with some graphic modification).
The following functionalities are present: register with a profile image, login, login with GitHub oauth, logout, user profile page and new images upload.

-

Difficulties:

- Setting up AWS public bucket (policy) to store the uploaded images.
- Setting up the GitHub oauth (to verify if id and secret need to be changed for every new app).
- Recreating an instagram-clone user experience.

Not working:

- The .then() part of user deleteRoute is not working (res.unauthorized is not a function).