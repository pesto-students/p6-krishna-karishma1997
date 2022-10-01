                Week 1 Assignemnt
1.	What is the main functionality of the browser?
	Browsers are used to display and access websites on the internet.
	It converts web pages and websites into human readable content.
	A web browser allows the user to access the data from the internet.

2.	High-Level Components of a browser.
	User interface
	Browser engine
	Networking
	Data storage
	Java script interpreter

3.	Rendering engine and its use
-> Produces the visual representation of an URL.
-> It is responsible for displaying the web page. The rendering engine parses the HTML and CSS and displayed the parsed content on the screen.

4.	Parsers (HTML, CSS, etc)
Parser means converting and analyzing a program into a format that the runtime environment can run. 
The parser parses the HTML into DOM tree. Html parsing involves tokenization and tree construction. Html tokens include tags, attributes, names, and values. If the document is prepared then it starts to parse. The parser parses the token into the document and builds up the document tree.

5.	Script processor 
Script processor is the performance of the behaviors or events combined in the knowledge structure.
Script processor allows you to specify your own processor logic for a simple processor using Javascript or Groovy. The script is entered as an option on the script processor.
      6. Tree construction
The browser combines the DOM and the CSSOM and generates the render tree with the elements that are needed to be displayed.
		To construct the render tree we start at the root of the DOM tree. Traverse each visible. For each visible node, find the appropriate matching CSSOM rules and apply them. Then emit the visible nodes with content and their computed styles.

 7. Order of script processing
-> Pre-Process page and Process page
-> Child Post Process page
-> Post Process page
	
 8. Layout: It looks into the elements and figures out where it needs to go on the page. It will see the sizes and position of the elements and try to calculate the line breaks, placement of each of the elements and the relationship between the elements. It is a slow process.
Paint: Now that we know how the things look like and where they should go, we draw some pixels on the screen. Paint actually creates the picture of the layout that needs to be rendered. 


