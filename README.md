# aristotles_apostles

Group Project with Adam Tolbert (https://github.com/aotolbert), Clay Palumbo (https://github.com/kelptape), and Garrett Poell (https://github.com/gpoell)

While it may appear that I (Adam Tolbert) did most of the contributions to the project, that is only because I we ran into so many merging difficulties, and since I was the owner, the quickest workaround ended up being to slack me the code and I would add it to my branch to prevent merge conflicts.

I believe this was primarily due the fact that we coded entirely on the same page (index.html) and Git had trouble reconciling multiple changes on one file, but lesson learned in the end.

This app utilizes Google Maps and multiple Third Party Ajax calls (https://openstates.org and https://propublica.org) to popluate the users page with data about their state and federal representatives based on the address that they input. 

Once the user inputs the address data the website inputs the data into the Google Maps API which pulls a latitude and longitude that matches the user's address. The app then takes that latitude and longitude and inserts them into an API Call URL to openStates.org. That then populates the state representatives listed under that latitude and longitude. The app then takes the state data from the address and queries a second API at propublica.org which populates the federal representatives and places them on the users screen.

This applicaton will work with any address in the US including Alaska and Hawaii.

=======
Group Project
https://aotolbert.github.io/aristotles_apostles/

