// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {
        // Fill up the Home Page with all content
        HomePageContent();

        // Redirect to other pages
        HomePageButtons();
       
    }

    function HomePageContent()
    {
        // Variable for text content to be displayed on page
        let welcomeParagraph = [`Welcome to the site!\n
        The website demonstrates Live Site setup and DOM Manipulation.\n
        Let\`s start!\n`];
        let homePageHeader = `Content:  `;
        let homePageTitle = `Creating, insertion, or deletion elements!`;

        console.log("Home Page");

        //Step 1. Get an entry point (insertion / deletion point) reference
        let MainContent = document.body.getElementsByClassName('container')[0];
        let ImgContent = document.body.getElementsByTagName('img')[0];

        //Step 2. create an element to insert
        let WelcomeParagraphElement = document.createElement("p");
        WelcomeParagraphElement.setAttribute("id", "WelcomeParagraphElement");
        WelcomeParagraphElement.setAttribute("class", "mt-3");
        
        //Step 3. configure the new element
        WelcomeParagraphElement.textContent = welcomeParagraph;
        //WelcomeParagraphElement.innerHTML += WelcomeParagraphElement.textContent;

        //Step 4. Add / Insert the new element or To Insert before
        MainContent.insertBefore(WelcomeParagraphElement, ImgContent);
        //SetTitle(homePageTitle, MainContent);
        //SetHeading(homePageHeader, MainContent);
        WelcomeParagraphElement.before(homePageHeader);
        WelcomeParagraphElement.before(homePageTitle);

    }

    function HomePageButtons()
    {
        // next three buttons allow us to redirect homepage into AboutUs, Services, and Contact pages
        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        let OurServicesButton = document.getElementById("OurServicesButton");
        console.log(OurServicesButton);
        OurServicesButton.addEventListener("dblclick", function()
        {
            location.href = "services.html";
        });

        let ContactUsButton = document.getElementById("ContactUsButton");
        console.log(ContactUsButton);
        ContactUsButton.addEventListener("mouseover", function()
        {
            location.href = "contact.html";
        });
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");

        AboutUsPageContent();
    }

    function AboutUsPageContent()
    {
        // Variable for text content to be displayed on page
        let welcomeParagraph = [`Welcome to the site!\n
        The website demonstrates Live Site setup and DOM Manipulation.\n
        Let\`s start!\n`];
        let aboutPageHeader = `Content:  `;
        let aboutPageTitle = `Creating, insertion, or deletion elements!`;
 

        //Step 1. Get an entry point (insertion / deletion point) reference
        let MainContent = document.body.getElementsByClassName('container')[0];
        //let ImgContent = document.body.getElementsByTagName('img')[0];

        //Step 2. create an element to insert
        let WelcomeParagraphElement = document.createElement("p");
        WelcomeParagraphElement.setAttribute("id", "WelcomeParagraphElement");
        WelcomeParagraphElement.setAttribute("class", "mt-3");
        
        //Step 3. configure the new element
        WelcomeParagraphElement.textContent = welcomeParagraph;
        //WelcomeParagraphElement.innerHTML += WelcomeParagraphElement.textContent;

        //Step 4. Add / Insert the new element or To Insert before
        MainContent.insertBefore(WelcomeParagraphElement);
        //SetTitle(homePageTitle, MainContent);
        //SetHeading(homePageHeader, MainContent);
        WelcomeParagraphElement.before(aboutPageHeader);
        WelcomeParagraphElement.before(aboutPageTitle);
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }

    // named function option
    function Start()
    {
        console.log("App Started!");

   

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
       
    }

    window.addEventListener("load", Start);
})();