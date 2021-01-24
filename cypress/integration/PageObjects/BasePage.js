// import AmazonHomePage from "../PageObjects/AmazonHomePage"
// import AmazonMainPage from "../PageObjects/AmazonMainPage"

 export default class BasePage{


    type(object,text){
            cy.get(object).as("object")
            cy.get("@object").then(($object)=>{
                console.log("Clicked the object")
                .type(text)
            })
    }

//     init(){
//         const amazonPage = new AmazonHomePage()
//         const amazonMainPage = new AmazonMainPage()
//     }
    
  
 }


