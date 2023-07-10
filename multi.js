    // The prompt() method displays a dialog box that prompts the user for input.
    let rows = prompt("How many rows for your multiplication table?");
    let cols = prompt("How many columns for your multiplication table?");

    // if the user not fill the fields, then a multiplication table 10x10 will be printed
    if(rows == "" || rows == null)
   		 rows = 10;
    if(cols == "" || cols == null)
   		 cols = 10;

  // call the function
    createTable(rows, cols);


    function createTable(rows, cols)
    {
      // j printed the rows and the multiplication. 
      let j=1;

      // the output that we will print in the end.
      // adding <table> open tag.
      let output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

      // i printed the first column 1-10
      for(i=1;i<=rows;i++)
      {

      // adding "<table><tr>"
      // open <tr> tag
      // building a table 
    	output = output + "<tr>";
        while(j<=cols)
        {
        // adding "<table><tr><td>1</td>"
        // building the table and multiplied between i and j.
  		  output = output + "<td>" + i*j + "</td>";
   		  j = j+1;
   		}
      // closer the </tr> tag
   		 output = output + "</tr>";
      //  rest the j = 1 for multiplicat the next number (i)
   		 j = 1;
    }
    // closing </table> tag
    output = output + "</table>";
    // prints the output
    // The write() method writes directly to an open (HTML) document stream.
    document.write(output);
    }