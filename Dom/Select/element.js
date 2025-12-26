 let idselect = document.getElementById("divParagraph")
    console.log(idselect);
    console.log("next");

    let byName=document.getElementsByName("2024Range")
    console.log(byName);


    // Select Tage Name:
    let byTagName=document.getElementsByTagName("div")
    console.log(byTagName);


    // h3
    let h3Element=document.getElementsByTagName("h3")
    console.log(h3Element);


    // By Class
    let byClass=document.getElementsByClassName("name")
    console.log(byClass);



    console.log(byClass.value);



    let headContainer=document.getElementById("headContainer")
    console.log(headContainer);


    // now for getting teh nested Elemeent
    let nestedH4=headContainer.getElementsByTagName("h4")
    console.log(nestedH4);



          // Query selector:
      let firstQuer=document.querySelectorAll("h3")
      console.log(firstQuer);

      let idSelect=document.querySelector("#divParagraph")
      console.log(idSelect);


      // Multiple Selector:
      let multipleSelector=document.querySelectorAll("div, h4, input")
      console.log(multipleSelector);