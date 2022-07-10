// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build function to iterate through UFO data and append to table row
function buildTable(data) {
    // Clear the table of data by building with empty string
    tbody.html("");
    data.forEach((dataRow) => {
        // Find <tbody> tag and add a table row (tr)
        let row =tbody.append("tr");
        // Loop through each field in dataRow argument. These fields will become table data with <td>. Object.values tells JS to reference one object from array. dataRow argument
        // tells JS we want values to go into the dataRow. forEach(val) specifies that we want object per row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            //extract only the value 
            cell.text(val);
        }
        );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);