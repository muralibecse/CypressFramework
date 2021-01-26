describe('Mouse acions', () =>{
  it('Right click', ()=>{
     //right click
     cy.visit('http://demo.guru99.com/test/simple_context_menu.html',{retryOnNetworkFailure:true,timeout:30000})
     cy.contains('right click me').rightclick()
  })

  //double click
  it('Double click', ()=>{ 
    cy.visit('http://demo.guru99.com/test/simple_context_menu.html',{retryOnNetworkFailure:true})
    cy.contains('Double-Click Me To See Alert').dblclick();
  })

  //mouse over
  it('Mouse over', ()=>{
      cy.visit('https://www.amazon.in',{retryOnNetworkFailure:true})
      cy.get('#nav-link-accountList').trigger('mouseover')
  })

  //drag and drop
  it('Drag and Drop', ()=>{
    cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html',{timeout:30000,retryOnNetworkFailure:true})
    cy.contains('Draggable 1').drag('#mydropzone')
    cy.contains('Draggable 2').drag('#mydropzone')
    cy.contains('Draggable 3').drag('#mydropzone')
    cy.contains('Draggable 4').drag('#mydropzone')
  })
})