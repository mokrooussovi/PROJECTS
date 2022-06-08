// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {

        // Variable for text content to be displayed on page
        let welcomeParagraph = [`Welcome to the site!\n
                    The website demonstrates Live Site setup and DOM Manipulation \.\n
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

 

    // named function option
    function Start()
    {
        console.log("App Started!");

   

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
 
        }
       
    }

    window.addEventListener("load", Start);
})();