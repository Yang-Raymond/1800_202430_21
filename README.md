# Project Title
Scamp Order Portal

## 1. Project Description  
This browser based web application was designed to help gas station owners order fuel online through Scamp, replacing the current inefficient call-in system. The app will allow users to place orders, view order history, and access station documentation. Scamp dispatchers will use the app to manage orders and stations through an admin page.

## 2. Names of Contributors
List team members and/or short bio's here ... 
* Ryan Chu
* Raymond Yang
* Jackson Lawrence
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* ...

## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project. How do others start using your code or application?

Here are the steps for a dealer (gas station owner) ...
* Select the login button on the Home page (index.html).
* Login - Username: testStation@test.com // Password: 123456
* Teh user will be directed to the Welcome page. Select "Create Load Here" to go to the Create Load page or navigate the navbar.
* On the Create Load page, select a delivery window and trailer size - the user will be forced to adhere to restrictions.
* The trailer will appear with amounts populated, select the product types by compartment.
* Add any comments if necessary.
* Check the "Special Requests" box if the user wishes to break restrictions - please include comments as to why.
* Click "Reset" to delete the order, click "Submit" once the order is complete.
* A prompt will appear letting the user know the order has submitted.
* Navigate to the Order History page, click on "Pending" where all pending orders will populate - including the one just submitted.
* Select "Approved" or "Rajected" to view previous orders that were accepted or denied.
* The user can select each load using the dropdown arrow on the right to view an order summary.
* Navigate to the Station Info page, here the user can view documents (SDC and JMP) along with the restrictions and rules.
* Select "Logout" in the top right of the navbar to quit.

Here are the steps for a dispatcher ...
* Select the login button on the Home page (index.html).
* Login - Username: admin@scampadmin.com // Password: Password 
* You will be directed to the Admin Welcome page. Select either Manage Stations or Manage Orders.
* If Manage Orders was selected, the user will be brought to the Orders page.
* Here will be a list of all pending orders awaiting approval or rejection - once reviewed the dispatcher will make a decision.
* The user will view the order summary using the dropdown arrow on the right and select "Approve" or "Reject".
* The order will then be moved to the "Approved" or "Rejected" tabs.
* The user can navigate to the Manage Stations page by selecting it in the sidebar, or by selecting home and repeating the third step.
* Once on the Manage Stations tab, the user will see all station accounts. They can edit an account on the right and fill out the fields.
* To create an account for a new dealer, the user will select "Create Station Account" where they will have to fill out the fields.
* Select "Logout" in the top right of the navbar to quit.

## 5. Known Bugs and Limitations
Here are some known bugs:
* User can enter whatever they want.
* The slideshow on the Welcome page has two white flashes while switching images. Afterwards, it works perfectly.
* ...

## 6. Features for Future
What we'd like to build in the future:
* The ability to change restrictions for each station using the Admin page.
* The ability to have an order input into Scamps dispatching program called "SAFE" once it has been approved on the Manage Orders page.
* ...
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url - it is the Home page
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo.
├── images                   # Folder for all images and icons.
    /account-icon.png        # Acknowledge source
    /Account.jpeg            #
    /create-load-icon.png    #
    /Helijet.jpg             #
    /order-history-icon.png  #
    /SCAMP-Mech.jpg          #
    /Scamp-Station.jpg       #
    /SCAMP-Tech-3.jpg        #
    /SCAMP-Trans.png         #
    /ScampLogo.jpg           #
    /ScampOffice.jpg         #
    /ScampTablet.jpg         #
    /ScampTruck.jpg          #
    /station-info-icon.png   #
    /truckFront.png          #
├── pages                    # Folder for each viewable page.
    /aboutUs.html            # 
    /account.html            #
    /adminOrder.html         #
    /adminStation.html       #
    /adminWelcome.html       #
    /contactUs.html          #
    /createOrder.html        #
    /login.html              #
    /orderHistory.html       #
    /stationInfo.html        #
    /welcome.html            #
├── scripts                  # Folder for scripts.
    /account.js              #
    /accountButtons.js       #
    /adminOrder.js           #
    /adminStation.js         #
    /adminWelcome.js         #
    /calendar.js             #
    /createOrder.js          #
    /createOrderFirestore.js #
    /firebaseAPI.js          #
    /indexNavbar.js          #
    /login.js                #
    /orderHistory.js         #
    /skeleton.js             #
    /stationInfo.js          #
    /userVerification.js     #
    /welcome.html            #
├── styles                   # Folder for styles.
    /aboutUs.css             # 
    /account.css             #
    /adminOrder.css          #
    /adminStation.css        #
    /adminWelcome.css        #
    /calendar.css            #
    /contactUs.css           #
    /createOrder.css         #
    /indexNavbar.css         #
    /login.css               #
    /orderHistory.css        #
    /stationInfo.css         #
    /style.css               #
    /welcome.html            #
├── text                     # Folder for our two navbars, along with a notes file.
    /indexNavbar.html        # Our navbar for the lading pages - all pre-login pages (index.html, aboutUs.html, contactUs.html)
    /navbar.html             # Our navbar for once a dealer has logged into their account - all post-login pages.
    /stations.html           # A notes file containing details from real Scamp dealer stations.



```


