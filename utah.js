function showTab(index) {

    // Retrieve tab content elements
    let tabContents =
        document.getElementsByClassName("tab-content");

    // Loop through all tab content elements
    for (let i = 0; i < tabContents.length; i++) {
    
        // Remove the "active" class from all tab content elements
        tabContents[i].classList.remove("active");
    }
    
    // Add the "active" class to the tab 
    // content element at the specified index
    tabContents[index].classList.add("active");
}
