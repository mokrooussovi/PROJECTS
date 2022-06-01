// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {

        // Variable for text content to be displayed on page
        let paragraph1 = [`Welcome to our site!\n
                    The website demonstrates Live Site setup and DOM Manipulation \.\n
                    Let\`s start!\n`];
        let pageHeader = `Welcome Message:`;
        let titlePage = `Welcome to Group3 Lab 1 Site!`;

        console.log("Home Page");
 

        // TO-DO: adjust to insert into div w/in main instead of outside (maybe...)
        // Target the main element to start inserting new content in
        let MainContent = document.body.getElementsByClassName('container')[0];
        let ImgContent = document.body.getElementsByTagName('img')[0];

        // Create a new paragraph element to insert text in
        let ParaOne = document.createElement("p");
        ParaOne.setAttribute("id", "ParaOne");
        ParaOne.setAttribute("class", "mt-3");
        
        // Build the paragraph by adding the string array together
        ParaOne.textContent = paragraph1;
        ParaOne.innerHTML += ParaOne.textContent;

        // Insert new elements onto document
        MainContent.insertBefore(ParaOne, ImgContent);
        SetTitle(titlePage, MainContent);
        SetHeading(pageHeader, MainContent);
        
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