# Marvelous
This project was created to make an attempt to use the **Marvel's API**.
The Marvel's API is used to create the project. Details about characters is extracted from the API.

###### [Marvel API](https://developer.marvel.com/)

## Updated Notes
There is 2 ways of calling the marvel API
- Using client side application - which we created in our case for which we require public apikey to be passed as url parameter as you can see in the app. Also need to set the domain in the marvel api pointing to your domain.
- Using server side application - which requires 2 extra parameters other than apikey that is a md5 hash and private key.


#### Usage
This is the localhost version where you require both pubic as well as private key if you run your app usng live server as the marvel api will think its coming from some server so reuires both but if you run your html using open with and as chrome, it will treat the application as client side.
Only public key is required to generate hash in case you try to host the project.

###### Try Now : [Marvelo]http://marvelo.herokuapp.com/
