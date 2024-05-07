Project topic: blockchain as a secure and efficient identification system
Finalised-BID-Walled-EN.docx
Prototype: due to the size and complexity of the system, our team concluded that it was not feasible to demonstrate it in a prototype in two weeks, so we could only show a small part of it in an onepager-like prototype (how personal data will be encrypted). To make the prototype work, the bundle.js will hash all the data by running index.html (e.g. VSCode-> GoLive), clicking Submit after filling in the form (to view and check this, follow the instructions on the "webpage".)

Repository: https://github.com/agyorki93/BlockChainHTML
Documentation: Finalised-BID-Walled-EN.docx
Onepager tutorial: https://bidwalled.devnet-xfabric.com/
PowerPoint presentation: Hackathon.pptx
Prototype description: BlockChainHTML/readme.txt

Prototype File Structure:

Main Folder
- index.html --> frontend where user can enter visual interface of requested data
- style.css --> plain css, where the design is set, for now only a butchered version, will be set to "more visual" later, will contain only the minimal design
- JS folder/bundle.js, which contains:
	- blockchain.js 
		create functions and classes necessary for the blockchain to work
		not all code snippets are used, I started prototyping from a cryptocurrency creation, so you can find functions that are currently
		not currently used, such as mining, pending transactions, keypair, difficulty
	- formhandler.js
		create saveData function: collects the input data in the data constructor, string it and hashes it with a previously declared method
		//createdisplayBlock function: it (should) display the data of a block of the blockchain in the user interface, unfortunately I couldn't do this because of time constraints
		display the data on the page, due to an error the data did not appear, even though the hashing was successful
	- main.js
		
The code is in desperate need of "cleaning" and organizing, during prototype development I hit several walls, so I had to find new ways to visualize parts of the system, apologies for that.  The point of the prototype is to show how all the data from a simple input form (e.g. government window data entry) is hashed and stored using a SHA256 algorithm.
It was deemed impractical to present the whole system in such a short time frame, so a separate document is available for that purpose as Finalised-BID-Walled-EN.docx. 


