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
* On the admin page, editing and creating stations have no restrictions on inputted fields.
* The slideshow on the Welcome page has two white flashes while switching images. Afterwards, it works perfectly.
* On the create load page in firefox, selecting a trailer then refreshing the page allows the user to submit an order with 0 compartments
* On the create load page with special request selected, selecting a time for the start of the delivery window limited by period (Ex. 2am to 6am being banned for a restriction of 7am - 7pm) will not count as restricted when special request is unchecked, allowing an order with restriced delivery window be submitted
* On the create load page, there are varrious visual bugs associated with the calendar when submitting an order, clicking special request, or changing the date on the delivery window which may highlight a value red which intuitively should not be.
* On the create load page with special request selected, selecting a new trailer will generate compartments with restricted fuels until special request is unchecked then rechecked.

## 6. Features for Future
What we'd like to build in the future:
* The ability to change restrictions for each station using the Admin page.
* The ability to have an order input into Scamps dispatching program called "SAFE" once it has been approved on the Manage Orders page.
* A filter system for the "orderHistory.html" page. We had attempted to make a calendar that only shows orders between a selected date window but removed it as it was not functional. Additionally, maybe make a way to filter orders by product types.
* Further develop the billing process. We had planned to carry this out on an Account page but stopped as the billing process is very confusing in the fuel industry in general.
* Further develop the "contactUs.html" page so that there is a real-time chat with a Scamp employee. Designed for future potential dealers to get in contact with Scamp.
	
## 7. Contents of Folder
Content of the project folder:

 Top level of project folder: 
├── .gitignore               # Git ignore file.
├── index.html               # landing HTML file, this is what users see when you come to url - it is the Home page.
└── README.md

Firebase hosting files: 
├── .firebase
	/hosting..cache
├── .firebaserc
├── 404.html
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── storage.rules

It has the following subfolders and files:
├── .git                     # Folder for git repo.
├── images                   # Folder for all images and icons.
    /Account.jpeg            # https://media.licdn.com/dms/image/C5622AQFauv6ChJHeLg/feedshare-shrink_800/0/1656110853375?e=2147483647&v=beta&t=cnUShwznzhlhpg4ynkE67HQ97jUVRcfOEOudC02hDqU
    /create-load-icon.png    # https://icons8.com/icon/uSWplRVhqqlS/create
    /order-history-icon.png  # https://icons8.com/icon/61752/order-history
    /SCAMP-Mech.jpg          # https://scamptransport.com/wp-content/uploads/2022/05/3-980x567.jpg
    /Scamp-Station.jpg       # https://media.licdn.com/dms/image/v2/D5622AQEHUWHU_IUaSA/feedshare-shrink_800/feedshare-shrink_800/0/1730845658106?e=2147483647&v=beta&t=FKeP2qVE3Pijgzh5l-DTLFKzkxCIOjQWOHnIG0KnVoU
    /SCAMP-Tech-3.jpg        # https://scamptransport.com/wp-content/uploads/2022/05/18-3.png
    /SCAMP-Trans.png         # https://scamptransport.com/wp-content/uploads/2022/05/1-980x551.png
    /ScampLogo.jpg           # https://scamptransport.com/wp-content/uploads/2022/06/cropped-scamp_transport_favicon-300x300.png
    /ScampOffice.jpg         # https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPY3-F63zdlThNH59NoNutYNagoxm5Ov4Dew&s
    /ScampTruck.jpg          # https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBejHY6INcJcCaWZ4hENrRMegF_3ZBzq57Pg&s
    /station-info-icon.png   # https://icons8.com/icon/8712/gas-station"
    /truckFront.png          # made in ms paint

├── pages                    # Folder for each viewable page.
    /aboutUs.html            # Briefly explains our services to prevent confusion as Scamp has three other websites.
    /adminOrder.html         # Shows a list of all orders - for dispatch to review, then either approve or reject.
    /adminStation.html       # Shows a list of all stations - for dispatch to edit accounts or make new ones.
    /adminWelcome.html       # Welcome page for dispatchers - they are to select either Manage Orders or Mange Stations.
    /contactUs.html          # A prompt that recieves an email with a message.
    /createOrder.html        # Order page with multiple fields to be filled out.
    /login.html              # Login page for both dealers and dispatchers.
    /orderHistory.html       # Allows users to view their past orders sorted by the order's status.
    /stationInfo.html        # Displays basic information for that particular station such as restrictions or documentation.
    /welcome.html            # Welcome page for dealers - they can navigate the navbar or select the "Create Load Here" button.

├── scripts                  # Folder for scripts.
    /adminOrder.js           # Script for the "adminOrder.html" page.
    /adminStation.js         # Script for the "adminStation.html" page.
    /adminWelcome.js         # Script for the "adminWelcome.html" page.
    /calendar.js             # Script for the "createOrder.html" page, particularly for the delivery window.
    /createOrder.js          # Script for the "createOrder.html" page.
    /createOrderFirestore.js # Script for the "createOrder.html" page, particulary for storing a submitted order.
    /firebaseAPI.js          # Script for the firebase API.
    /indexNavbar.js          # Script for the "indexNavbar.html" page within the "text" folder (For one of our navbars).
    /login.js                # Script for the "login.html" page.
    /orderHistory.js         # Script for the "orderHistory.html" page.
    /skeleton.js             # Script for the "navbar.html" page within the "text" folder (For the other navbar).
    /stationInfo.js          # Script for the "stationInfo.html" page.
    /userVerification.js     # Script for the user's verification.
    /welcome.html            # Script for the "welcome.html" page.

├── styles                   # Folder for styles.
    /aboutUs.css             # Style for the "aboutUs.html" page.
    /adminOrder.css          # Style for the "adminOrder.html" page.
    /adminStation.css        # Style for the "adminStation.html" page.
    /adminWelcome.css        # Style for the "adminWelcome.html" page.
    /calendar.css            # Style for the "createOrder.html" page, particularly for the delivery window.
    /contactUs.css           # Style for the "contactUs.html" page.
    /createOrder.css         # Style for the "createOrder.html" page.
    /indexNavbar.css         # Style for the "indexNavbar.html" page within the "text" folder (For one of our navbars and mobile layout).
    /login.css               # Style for the "login.html" page.
    /orderHistory.css        # Style for the "orderHistory.html" page.
    /stationInfo.css         # Style for the "stationInfo.html" page.
    /style.css               # Style for the "navbar.html" page within the "text" folder (For the other navbar and mobile layout).
    /welcome.html            # Style for the "welcome.html" page.

├── text                     # Folder for our two navbars, along with a notes file.
    /indexNavbar.html        # Our navbar for the lading pages - all pre-login pages (index.html, aboutUs.html, contactUs.html)
    /navbar.html             # Our navbar for once a dealer has logged into their account - all post-login pages.
    /stations.html           # A notes file containing details from real Scamp dealer stations.
```